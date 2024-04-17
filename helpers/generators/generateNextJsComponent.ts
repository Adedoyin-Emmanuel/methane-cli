import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as componentResolver from "./resolvers/resolveNextJsComponentContent.js";
import { captitalizeWord } from "helpers/utilis/capitalize.js";

const findComponentDirectory = () => {
  const rootDir = process.cwd();
  const possibleDirs = [
    "src/app/component",
    "src/app/components",
    "src/app/_components",
    "src/app/_component",
    "src/app/Component",
    "src/app/_Components",
    "src/app/_Component",
    "src/app/Components",
    "src/components",
    "src/Components",
    "app/components",
    "app/Component",
    "app/Components",
    "app/component",
    "app/_components",
    "app/_component",
    "app/_Components",
    "app/_Component",
  ];

  // Function to check if a directory exists without traversing "node_modules"
  const directoryExists = (dir: any) => {
    try {
      const stat = fs.statSync(dir);
      return stat.isDirectory();
    } catch (error) {
      return false;
    }
  };

  const componentDir = possibleDirs.find((dir) =>
    directoryExists(path.join(rootDir, dir))
  );

  return componentDir ? path.join(rootDir, componentDir) : null;
};

const generateComponentFile = async (
  name: string,
  componentDir: string,
  componentResolver: any,
  componentType: string
) => {
  await fs.writeFile(
    componentDir,
    componentResolver.resolveComponentContent(
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

export const generateComponent = async (
  name: string,
  componentType: string
) => {
  if (!name) {
    return console.log(
      colors.bold(colors.red("Component extension or name is required!"))
    );
  }

  const componentDir = findComponentDirectory();

  if (!componentDir) {
    console.log(colors.bold(colors.red("components folder doesn't exist")));
    return;
  }

  const generateComponentFolder =
    readUserConfig.readConfig().generateFolder === "true";

  const componentDirName = generateComponentFolder
    ? path.join(componentDir, name)
    : path.join(componentDir);

  /**
   * So what I'm doing here is that if the user config allows generating folder with pages,
   * Then the page name should be index.jsx or index.tsx. This will make the import statement cleaner
   */

  const componentFilePath = path.join(
    componentDirName +
      `/${generateComponentFolder ? "index" : name}.${
        readUserConfig.readConfig().template
      }`
  );

  try {
    // Create the generated component directory
    if (generateComponentFolder) {
      await fs.promises.mkdir(componentDirName);
    }

    if (readUserConfig.readConfig().generateStylesheet === "true") {
      const styleSheetType = readUserConfig.readConfig().stylesheetType;
      const cssFilePath = path.join(
        componentDirName,
        `${name}.${styleSheetType}`
      );

      await fs.promises.writeFile(cssFilePath, "");
    }

    generateComponentFile(
      name,
      path.join(componentFilePath),
      componentResolver,
      componentType
    );

    console.log(
      `${colors.bold(
        colors.green(
          `${captitalizeWord(name)} component generated successfully 🚀`
        )
      )}`
    );
  } catch (error: any) {
    console.log(colors.bold(colors.red(`An error occured! ${error.message}`)));
  }
};
