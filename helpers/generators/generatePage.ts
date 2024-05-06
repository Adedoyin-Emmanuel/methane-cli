import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as pageRegisterer from "./register/registerPage.js";
import * as pageResolver from "./resolvers/resolvePageContent.js";
import { captitalizeWord } from "../../helpers/utilis/capitalize.js";

const rootDir = path.join(process.cwd());
const pageDir = [
  "src/pages",
  "src/Pages",
  "src/page",
  "src/Page",
  "pages",
  "Pages",
  "page",
  "Page",
].find((dir) => {
  return fs.existsSync(path.join(rootDir, dir));
});

const generatePageFile = async (
  name: string,
  pageDir: string,
  pageResolver: any
) => {
  /**
   * I added the capitalizeWord function to ensure that the page generated,
   * starts with a capital letter even if the user enters a small letter.
   * Eg home => Home
   */

  await fs.writeFile(
    pageDir,
    pageResolver.resolvePageContent(readUserConfig, captitalizeWord(name)),
    (error) => {
      if (error) {
        console.log(colors.bold(colors.red(error.toString())));
      }
    }
  );
};

export const generatePage = async (name: string) => {
  if (!name) {
    return console.log(
      colors.bold(colors.red("page extension or name is required!"))
    );
  }
  if (!pageDir) {
    console.log(colors.bold(colors.red("pages folder doesn't exist")));
    return;
  }

  const generatePageFolder =
    readUserConfig.readConfig().generateFolder === "true";

  const pageDirName = generatePageFolder
    ? path.join(pageDir, name)
    : path.join(pageDir);

  /**
   * So what I'm doing here is that if the user config allows generating folder with pages,
   * Then the page name should be index.jsx or index.tsx. This will make the import statement cleaner
   *
   * Eg, If I generate a home page the path should be /pages/home/index.tsx
   *
   * Instead of /pages/home/home.tsx
   *
   * So when importing, I can do
   * import Home from "/pages/home";
   *
   * instead of import Home from "/pages/home/home.tsx";
   *
   * I also did the same for the components
   *
   * @see generateComponent.ts
   * @line 74
   */

  const pageFilePath = path.join(
    pageDirName +
      `/${generatePageFolder ? "index" : name}.${
        readUserConfig.readConfig().template
      }`
  );

  try {
    /*create the generated component directory*/
    generatePageFolder ? await fs.mkdirSync(pageDirName) : null;

    if (readUserConfig.readConfig().generateStylesheet === "true") {
      const styleSheetType = readUserConfig.readConfig().stylesheetType;
      const cssFilePath = path.join(pageDirName, `${name}.${styleSheetType}`);

      await fs.promises.writeFile(cssFilePath, "");
    }

    generatePageFile(name, path.join(pageFilePath), pageResolver);

    /*register the page in the App.jsx or App.tsx file*/
    readUserConfig.readConfig().register === "true"
      ? pageRegisterer.addPageImport(
          rootDir,
          name,
          path.join(".", pageDir.replace("src/", ""))
        )
      : null;

    console.log(
      `${colors.bold(
        colors.green(`${captitalizeWord(name)} page generated successfully 🚀`)
      )}`
    );
  } catch (error: any) {
    console.log(colors.bold(colors.red(`An error occured! ${error.message}`)));
  }
};
