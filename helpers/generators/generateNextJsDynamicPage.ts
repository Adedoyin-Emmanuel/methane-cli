import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as pageResolver from "./resolvers/resolveNextJsDynamicPageContent.js";

const findPagesDirectory = () => {
  const rootDir = process.cwd();
  const possibleDirs = [
    "src/app/page",
    "src/app/pages",
    "src/app/Page",
    "src/app/Pages",
    "src/app/",
    "src/pages",
    "src/Pages",
    "app/page",
    "app/Page",
    "app/pages",
    "app/",
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

const generateDynamicPageFile = async (
  dynamicId: any,
  name: string = "page",
  pagesDir: string,
  pageResolver: any,
  componentType: string,
  startPage?: any
) => {
  let pageFilePath = path.join(
    pagesDir + `/page.${readUserConfig.readConfig().template}`
  );

  /*
  users can optionally specify a page that they already have to generate the dynamic folder to
    
  */

  if (startPage) {
    pageFilePath = path.join(
      pagesDir + startPage + `/page.${readUserConfig.readConfig().template}`
    );

  }

  await fs.promises.writeFile(
    pageFilePath,
    pageResolver.resolveDynamicPageContent(
      dynamicId,
      readUserConfig,
      name,
      componentType
    )
  );
};

export const generatePage = async (
  dynamicId: any,
  name: string = "page",
  componentType: string,
  startPage?:any
) => {
  if (!name) {
    return console.log(colors.bold(colors.red("Page name is required!")));
  }

  const pagesDir = findPagesDirectory();

  if (!pagesDir) {
    console.log(colors.bold(colors.red("pages directory doesn't exist")));
    return;
  }

  let pageDirName =
    readUserConfig.readConfig().generateFolder === "true"
      ? path.join(pagesDir, `[${dynamicId}]`)
      : path.join(pagesDir);
  
  if (startPage) {
     pageDirName =
       readUserConfig.readConfig().generateFolder === "true"
         ? path.join(pagesDir + startPage, `[${dynamicId}]`)
         : path.join(pagesDir + startPage);
  }


  try {
    readUserConfig.readConfig().generateFolder === "true"
      ? await fs.mkdirSync(pageDirName)
      : null;

    if (readUserConfig.readConfig().generateStylesheet === "true") {
      const styleSheetType = readUserConfig.readConfig().stylesheetType;
      const cssFilePath = path.join(
        pageDirName,
        `page.style.${styleSheetType}`
      );

      await fs.promises.writeFile(cssFilePath, "");
    }

    generateDynamicPageFile(
      dynamicId,
      "page",
      pageDirName,
      pageResolver,
      componentType
    );
  } catch (error: any) {
    console.log(colors.bold(colors.red(error)));
  }

  console.log(
    `${colors.bold(colors.green(`${dynamicId} page generated successfully`))}`
  );
};
