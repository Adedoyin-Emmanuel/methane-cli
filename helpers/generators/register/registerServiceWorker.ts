import colors from "colors";
import fs from "fs";
import path from "path";

export const checkAndImportServiceWorker = () => {
  const supportedFiles = [
    "index.jsx",
    "index.tsx",
    "main.jsx",
    "main.tsx",
    "index.js",
    "main.js",
    "main.ts",
    "index.ts",
    "Index.jsx",
    "Main.jsx",
    "Index.js",
    "Index.ts",
    "Main.ts",
  ];
  const importStatement = `import * as serviceWorkerRegistration from './serviceWorkerRegistration';`;

  const searchDir = (dirPath:string) => {
    const files = fs.readdirSync(dirPath);
    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory() && file !== "node_modules") {
        searchDir(filePath);
      } else if (stats.isFile() && supportedFiles.includes(file)) {
        const fileContents = fs.readFileSync(filePath, "utf8");
        if (!fileContents.includes(importStatement)) {
          const newContents = `${importStatement}\n${fileContents}`;
          fs.writeFileSync(filePath, newContents);
          console.log(
            colors.bold(
              colors.cyan(
                `Successfully injected import statement into ${filePath}`
              )
            )
          );
        } else {
          console.log(
            colors.bold(
              colors.red(`Import statement already exists in ${filePath}`)
            )
          );
        }
      }
    });
  };

  searchDir("./");
};
