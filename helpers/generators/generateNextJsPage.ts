import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as pageResolver from "./resolvers/resolveNextJsPageContent.js";
import { captitalizeWord } from "helpers/utilis/capitalize.js";

const findPagesDirectory = () => {
  const rootDir = process.cwd();
  const possibleDirs = [
    "src/app/page",
    "src/app/pages",
    "src/app/Page",
    "src/app/Pages",
    "src/app/_pages",
    "src/app/_Pages",
    "src/app/_page",
    "src/app/_Page",
    "src/pages",
    "src/Pages",
    "src/app/",
    "app/page",
    "app/Pages",
    "app/pages",
    "app/_pages",
    "app/_Pages",
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

const generatePageFile = async (
  name: string,
  pagesDir: string,
  pageResolver: any,
  componentType: string,
  startPage?: any
) => {
  let pageFilePath = path.join(
    pagesDir + `/page.${readUserConfig.readConfig().template}`
  );

  /**
   *
   * Okay, so the Start page is an optional Methane CLI arument,
   * that allows the user to generate pages in nested pages.
   *
   * @see line 106
   */

  if (startPage) {
    pageFilePath = path.join(
      pagesDir + startPage + `/page.${readUserConfig.readConfig().template}`
    );
  }

  await fs.writeFile(
    pageFilePath,
    pageResolver.resolvePageContent(
      readUserConfig,
      captitalizeWord(name),
      componentType
    ),
    (error) => {
      if (error) {
        console.log(colors.bold(colors.red(error.toString())));
      }
    }
  );
};

export const generatePage = async (
  name,
  componentType: string,
  startPage?: any
) => {
  if (!name) {
    return console.log(colors.bold(colors.red("Page name is required!")));
  }

  const pagesDir = findPagesDirectory();

  if (!pagesDir) {
    console.log(colors.bold(colors.red("pages directory doesn't exist")));
    return;
  }

  /**
   * So what I'm doing here is that if the user config allows generating folder with pages,
   * Then the page name should be index.jsx or index.tsx. This will make the import statement cleaner
   */

  const generatePageFolder =
    readUserConfig.readConfig().generateFolder === "true";

  const legitPageName: string = generatePageFolder ? "index" : name;

  let pageDirName = generatePageFolder
    ? path.join(pagesDir, legitPageName)
    : path.join(pagesDir);

  /**
   *
   * Okay, so the Start page is an optional Methane CLI arument that allows the user to generate pages in nested pages.
   *
   * Eg. I want to geneate a submit page in a /appointment page
   *
   * I can set the start page to be /appointment so the submit page is generated inside the appointment page.
   */
  if (startPage) {
    pageDirName = generatePageFolder
      ? path.join(pagesDir + startPage, legitPageName)
      : path.join(pagesDir + startPage);
  }

  try {
    generatePageFolder ? await fs.mkdirSync(pageDirName) : null;

    if (readUserConfig.readConfig().generateStylesheet === "true") {
      const styleSheetType = readUserConfig.readConfig().stylesheetType;
      const cssFilePath = path.join(pageDirName, `${name}.${styleSheetType}`);

      await fs.promises.writeFile(cssFilePath, "");
    }

    generatePageFile(name, pageDirName, pageResolver, componentType);

    console.log(
      `${colors.bold(
        colors.green(`${captitalizeWord(name)} page generated successfully 🚀`)
      )}`
    );
  } catch (error: any) {
    console.log(colors.bold(colors.red(`An error occured! ${error.message}`)));
  }
};
