import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as pageResolver from "./resolvers/resolveNextJsPageContent.js";

const findPagesDirectory = () => {
  const rootDir = process.cwd();
  const possibleDirs = [
    "src/app/page",
    "src/app/pages",
    "src/app/Page",
    "src/app/Pages",
    "src/pages",
    "src/Pages",
    "app/page",
    "app/Page",
    "app/",
    "src/app/",
  ];

  const directoryExists = (dir: string) => {
    try {
      const stat = fs.statSync(dir);
      return stat.isDirectory();
    } catch (error) {
      return false;
    }
  };

  const pagesDir = possibleDirs.find((dir) =>
    directoryExists(path.join(rootDir, dir))
  );

  return pagesDir ? path.join(rootDir, pagesDir) : null;
};

const generatePageFile = async (
  name: string = "page",
  pagesDir: string,
  pageResolver: any,
  componentType: string
) => {
  const pageFilePath = path.join(
    pagesDir + `/${name}.${readUserConfig.readConfig().template}`
  );

  await fs.promises.writeFile(
    pageFilePath,
    pageResolver.resolvePageContent(readUserConfig, name, componentType)
  );
};

export const generatePage = async (name: string = "page", componentType: string) => {
  if (!name) {
    return console.log(colors.bold(colors.red("Page name is required!")));
  }

  const pagesDir = findPagesDirectory();

  if (!pagesDir) {
    console.log(colors.bold(colors.red("pages directory doesn't exist")));
    return;
  }

  const pageFilePath = path.join(
    pagesDir + `/${name}.${readUserConfig.readConfig().template}`
  );

  try {
    if (readUserConfig.readConfig().generateStylesheet === "true") {
      const styleSheetType = readUserConfig.readConfig().stylesheetType;
      const cssFilePath = path.join(pagesDir, `${name}Style.${styleSheetType}`);

      await fs.promises.writeFile(cssFilePath, "");
    }

    generatePageFile(name, pagesDir, pageResolver, componentType);
  } catch (error: any) {
    console.log(colors.bold(colors.red(error)));
  }

  console.log(
    `${colors.bold(colors.green(`${name} Page generated successfully`))}`
  );
};
