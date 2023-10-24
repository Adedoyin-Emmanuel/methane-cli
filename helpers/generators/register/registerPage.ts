import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../../utilis/readUserConfig";

export const addPageImport = (rootDir, pageName, currentPageName) => {
  const supportedExtensions = [".js", ".jsx", ".ts", ".tsx"];
  const generatedPageImportStatement =
    readUserConfig.readConfig().generateFolder === "true"
      ? `import ${pageName} from "./${currentPageName}/${pageName}/${pageName}";`
      : `import ${pageName} from "./${currentPageName}/${pageName}";`;

  const checkFile = (filePath) => {
    const fileExt = path.extname(filePath);
    if (supportedExtensions.includes(fileExt)) {
      const fileContents = fs.readFileSync(filePath, "utf8");
      if (!fileContents.includes(generatedPageImportStatement)) {
        const importStatements = fileContents.match(/import.*?;/gs);
        let newContents = fileContents;
        if (importStatements && importStatements.length > 0) {
          const lastImportStatement =
            importStatements[importStatements.length - 1];
          const lastImportStatementIndex =
            newContents.lastIndexOf(lastImportStatement);
          newContents =
            newContents.slice(
              0,
              lastImportStatementIndex + lastImportStatement.length
            ) +
            "\n" +
            generatedPageImportStatement +
            newContents.slice(
              lastImportStatementIndex + lastImportStatement.length
            );
        } else {
          newContents = generatedPageImportStatement + "\n" + newContents;
        }
        fs.writeFileSync(filePath, newContents);
        console.log(
          colors.cyan(
            colors.bold(`${pageName} Page Successfully Added to ${filePath}`)
          )
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

