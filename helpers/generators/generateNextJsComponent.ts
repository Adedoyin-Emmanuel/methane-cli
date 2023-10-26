import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as componentResolver from "./resolvers/resolveNextJsComponentContent.js";

const findComponentDirectory = () => {
  const rootDir = process.cwd();
  const possibleDirs = [
    "src/app/component",
    "src/app/components",
    "src/app/Component",
    "src/app/Components",
    "src/components",
    "src/Components",
    "app/components",
    "app/Component",
    "app/Components",
    "app/component",
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
  name: string = "index",
  componentDir: string,
    componentResolver: any,
  componentType: string
) => {
  const componentFilePath = path.join(
    componentDir + `/${name}.${readUserConfig.readConfig().template}`
  );

  await fs.promises.writeFile(
    componentFilePath,
    componentResolver.resolveComponentContent(readUserConfig, name, componentType)
  );
};


export const generateComponent = async (name: string = "index", componentType: string) => {
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
      await fs.promises.mkdir(componentDirName, { recursive: true });
    }

    if (readUserConfig.readConfig().generateStylesheet === "true") {
      const styleSheetType = readUserConfig.readConfig().stylesheetType;
      const cssFilePath = path.join(
        componentDirName,
        `${name}Style.${styleSheetType}`
      );

      await fs.promises.writeFile(cssFilePath, "");
    }

    generateComponentFile(name, path.join(componentDir), componentResolver, componentType);
  } catch (error: any) {
    console.log(colors.bold(colors.red(error)));
  }

  console.log(
    `${colors.bold(colors.green(`${name} Component generated successfully`))}`
  );
};
