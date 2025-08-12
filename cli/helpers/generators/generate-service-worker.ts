import fs from "fs";
import path from "path";
import colors from "colors";

import * as swResolver from "./resolvers/resolve-service-worker.js";
import * as swRegisterer from "./register/register-service-worker.js";

const rootDir = path.join(process.cwd());
const SWDir = ["src"].find((dir) => {
  return fs.existsSync(path.join(rootDir, dir));
});

const generateServiceWorkerFile = async () => {
  if (SWDir) {
    try {
      /*create the service worker file*/
      await fs.writeFile(
        path.resolve(SWDir, `service-worker.js`),
        swResolver.resolveServiceWorkerTemplate(),
        (error) => {
          if (error) {
            console.log(colors.bold(colors.red(error.toString())));
          }
        }
      );

      await fs.writeFile(
        path.resolve(SWDir, "serviceWorkerRegistration.js"),
        swResolver.resolveServiceWorkerRegistrationTemplate(),
        (error: any) => {
          if (error) {
            console.log(colors.bold(colors.red(error.toString())));
          }
        }
      );
    } catch (error: any) {
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

export { generateServiceWorkerFile };
