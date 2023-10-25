import colors from "colors";
import fs from "fs";
import path from "path";
const rootDir = path.join(process.cwd());

const componentDir = [
  "src/components",
  "src/Components",
  "src/component",
  "src/Component",
  "Components",
  "components",
  "Component",
  "component",
].find((dir) => {
  return fs.existsSync(path.join(rootDir, dir));
});
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as componentResolver from "./resolvers/resolveComponentContent.js"
const generateComponentFile = async (
  name: string,
  componentDir: string,
  componentResolver: any
) => {
  await fs.writeFile(
    componentDir,
    componentResolver.resolveComponentContent(readUserConfig, name),
    (error: any) => {
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
  if (!componentDir) {
    console.log(colors.red("components folder doesn't exist"));
    return;
  }

  const componentDirName =
    readUserConfig.readConfig().generateFolder === "true"
      ? path.join(componentDir, name)
      : path.join(componentDir);

  const componentFilePath = path.join(
    componentDirName + `/${name}.${readUserConfig.readConfig().template}`
  );

  try {
    /*create the generated component directory*/
    readUserConfig.readConfig().generateFolder === "true"
      ? await fs.mkdirSync(componentDirName)
      : null;

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
