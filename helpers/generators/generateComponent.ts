import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as componentResolver from "./resolvers/resolveComponentContent.js";
import { captitalizeWord } from "helpers/utilis/capitalize.js";

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

  const componentDirName =
    readUserConfig.readConfig().generateFolder === "true"
      ? path.join(componentDir, name)
      : componentDir;

  const componentFilePath = path.join(
    componentDirName + `/${name}.${readUserConfig.readConfig().template}`
  );

  try {
    // Create the generated component directory
    if (readUserConfig.readConfig().generateFolder === "true") {
      fs.mkdirSync(componentDirName);
    }

    if (readUserConfig.readConfig().generateStylesheet === "true") {
      const styleSheetType = readUserConfig.readConfig().stylesheetType;
      const cssFilePath = path.join(
        componentDirName,
        `${name}Style.${styleSheetType}`
      );

      await fs.promises.writeFile(cssFilePath, "");
    }

    generateComponentFile(
      name,
      path.join(componentFilePath),
      componentResolver
    );
  } catch (error: any) {
    console.log(colors.bold(colors.red(error)));
  }

  console.log(
    `${colors.bold(colors.green(`${name} Component generated successfully`))}`
  );
};
