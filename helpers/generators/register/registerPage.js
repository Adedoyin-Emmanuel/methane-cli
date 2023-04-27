const fs = require("fs");
const path = require("path");
const colors = require("colors");
const readUserConfig = require("./../../utilis/readUserConfig");

const addPageImport = (rootDir, pageName, currentPageName) => {
  const supportedExtensions = [".js", ".jsx", ".ts", ".tsx"];
  const generatedPageImportStatement = (readUserConfig.readConfig().generateFolder === "true") ? `import ${pageName} from "./${currentPageName}/${pageName}/${pageName}";` : `import ${pageName} from "./${currentPageName}/${pageName}";`;

  const checkFile = (filePath) => {
    const fileExt = path.extname(filePath);
    if (supportedExtensions.includes(fileExt)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      if (!fileContents.includes(generatedPageImportStatement)) {
        const newContents = generatedPageImportStatement + fileContents;
        fs.writeFileSync(filePath, newContents);
        console.log(
          colors.cyan(colors.bold(`Page Successfully Added to ${filePath}`))
        );
      } else {
        console.log(
          colors.bold(colors.red(`Import Statement Already in ${filePath}`))
        );
      }
    }
  };

  const searchDir = (dirPath) => {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory() && file !== "node_modules") {
        searchDir(filePath);
      } else if (stats.isFile() && file.match(/^App\.(jsx?|tsx?)$/i)) {
        checkFile(filePath);
      }
    });
  };

  searchDir(rootDir);
};

module.exports = {
  addPageImport,
};
