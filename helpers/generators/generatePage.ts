import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as pageRegisterer from "./register/registerPage.js";
import * as pageResolver from "./resolvers/resolvePageContent.js";

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
  await fs.writeFile(
    pageDir,
    pageResolver.resolvePageContent(readUserConfig, name),
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

  const pageDirName =
    readUserConfig.readConfig().generateFolder === "true"
      ? path.join(pageDir, name)
      : path.join(pageDir);

  const pageFilePath = path.join(
    pageDirName + `/${name}.${readUserConfig.readConfig().template}`
  );

  try {
    /*create the generated component directory*/
    readUserConfig.readConfig().generateFolder === "true"
      ? await fs.mkdirSync(pageDirName)
      : null;

    if (readUserConfig.readConfig().generateStylesheet === "true") {
      const styleSheetType = readUserConfig.readConfig().stylesheetType;
      const cssFilePath = path.join(
        pageDirName,
        `${name}Style.${styleSheetType}`
      );

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
  } catch (error: any) {
    console.log(colors.bold(colors.red(error)));
  }

  console.log(
    `${colors.bold(colors.green(`${name} Page generated successfully`))}`
  );
};
