const fs = require("fs");
const colors = require("colors");
const path = require("path");
const rootDir = path.join(process.cwd());
const SWDir = ["src"].find((dir) => {
  return fs.existsSync(path.join(rootDir, dir));
});
const readUserConfig = require("./../utilis/readUserConfig");
const swResolver = require("./resolvers/resolveServiceWorker");
const swRegisterer = require("./register/registerServiceWorker");

const generateServiceWorkerFile = async () => {
  if (SWDir) {
    try {
      /*create the service worker file*/
      await fs.writeFile(
        path.resolve(SWDir, `sw.js`),
        swResolver.resolveServiceWorkerTemplate(),
        (error) => {
          if (error) {
            console.log(colors.bold(colors.red(error)));
          }
        }
      );

      await fs.writeFile(
        path.resolver(SWDir, "serviceWorkerRegistration.js"),
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
