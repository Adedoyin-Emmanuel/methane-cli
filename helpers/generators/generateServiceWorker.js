import colors from "colors";
import fs from "fs";
import path from "path";
const rootDir = path.join(process.cwd());
const SWDir = ["src"].find((dir) => {
  return fs.existsSync(path.join(rootDir, dir));
});

import swRegisterer from "./../utilis/swRegisterer";
import swResolver from "./../utilis/swResolver";

const generateServiceWorkerFile = async () => {
  if (SWDir) {
    try {
      /*create the service worker file*/
      await fs.writeFile(
        path.resolve(SWDir, `service-worker.js`),
        swResolver.resolveServiceWorkerTemplate(),
        (error) => {
          if (error) {
            console.log(colors.bold(colors.red(error)));
          }
        }
      );

      await fs.writeFile(
        path.resolve(SWDir, "serviceWorkerRegistration.js"),
        swResolver.resolveServiceWorkerRegistrationTemplate(),
        (error) => {
          if (error) {
            console.log(colors.bold(colors.red(error)));
          }
        }
      );
    } catch (error) {
      console.log(colors.bold(colors.red(error)));
    }
  } else {
    console.log(colors.bold(colors.red("Could not find {src} folder!")));
    return;
  }

  console.log(
    `${colors.bold(colors.green(`Service Worker generated successfully`))}`
  );

  swRegisterer.checkAndImportServiceWorker();
};

module.exports = {
  generateServiceWorkerFile,
};
