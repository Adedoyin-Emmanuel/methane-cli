const fs = require("fs");
const colors = require("colors");
const path = require("path");
const rootDir = path.join(process.cwd());
const SWDir = ["src"].find((dir) => {
  return fs.existsSync(path.join(rootDir, dir));
});
const readUserConfig = require("./../utilis/readUserConfig");
const swResolver = require("./resolvers/resolvePageContent");
const swRegisterer = require("./register/registerServiceWorker");

const generateServiceWorkerFile = async () => {
  try {
    generateServiceWorker();
    
  } catch (error) {
    console.log(colors.bold(colors.red(error)));
  }

  console.log(
    `${colors.bold(colors.green(`Service Worker generated successfully`))}`
  );

  swRegisterer.checkAndImportServiceWorker();
};

module.exports = {
  generatePage,
};
