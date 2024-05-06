import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as componentResolver from "./resolvers/resolveComponentContent.js";
import { captitalizeWord } from "./../../helpers/utilis/capitalize.js";

const findComponentDirectory = () => {
  const rootDir = process.cwd();
  const possibleDirs = [
    "src/components",
    "src/Components",
    "src/component",
    "src/Component",
    "Components",
    "components",
    "Component",
    "component",
  ];

  const componentDir = possibleDirs.find((dir) =>
    fs.existsSync(path.join(rootDir, dir))
  );

  return componentDir ? path.join(rootDir, componentDir) : null;
};

const generateComponentFile = async (
  name: string,
  componentDir: string,
  componentResolver: any
) => {
  /**
   * I added the capitalizeWord function to ensure that the component generated,
   * starts with a capital letter even if the user enters a small letter.
   * Eg button => Button
   */

  await fs.writeFile(
    componentDir,
    componentResolver.resolveComponentContent(
      readUserConfig,
      captitalizeWord(name)
    ),
    (error) => {
      if (error) {
        console.log(colors.bold(colors.red(error.toString())));
      }
    }
  );
};

export const generateComponent = async (name: string) => {
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
    : componentDir;

  /**
   * So what I'm doing here is that if the user config allows generating folder with components,
   * Then the component name should be index.jsx or index.tsx. This will make the import statement cleaner
   *
   * Eg, If I generate a button component the path should be /components/button/index.tsx
   *
   * Instead of /components/button/button.tsx
   *
   * So when importing, I can do
   * import Button from "/components/button";
   *
   * instead of import Button from "/components/button/button.tsx";
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
      fs.mkdirSync(componentDirName);
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
      componentResolver
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
