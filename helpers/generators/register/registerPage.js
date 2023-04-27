const fs = require("fs");
const path = require("path");
const colors = require("colors");

const addPageImport = (rootDir, pageName, currentPageName) => {
  const supportedExtensions = [".js", ".jsx", ".ts", ".tsx"];
  const dummyImportStatement = `import ${pageName} from "./${currentPageName}/${pageName}";`;

  const checkFile = (filePath) => {
    const fileExt = path.extname(filePath);
    if (supportedExtensions.includes(fileExt)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      if (!fileContents.includes(dummyImportStatement)) {
        const newContents = dummyImportStatement + fileContents;
        fs.writeFileSync(filePath, newContents);
        console.log(colors.cyan(`Page Successfully Added to ${filePath}`));
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
      if (stats.isDirectory()) {
        searchDir(filePath);
      } else if (stats.isFile() && file.match(/^App\.(jsx?|tsx?)$/i)) {
        checkFile(filePath);
      }
    });
  };

  searchDir(rootDir);
}

module.exports = {
    addPageImport
}
