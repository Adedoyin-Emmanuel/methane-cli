const fs = require("fs");
const colors = require("colors");
const path = require("path");
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
const readUserConfig = require("./../utilis/readUserConfig");
const componentResolver = require("./resolvers/resolveComponentContent");
const generateComponentFile = async (name, componentDir, componentResolver) => {
  await fs.writeFile(
    componentDir,
    componentResolver.resolveComponentContent(readUserConfig, name),
    (error) => {
      if (error) {
        console.log(colors.bold(colors.red(error)));
      }
    }
  );
};

const generateComponent = async (name) => {
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
  } catch (error) {
    console.log(colors.bold(colors.red(error)));
  }

  console.log(
    `${colors.bold(colors.green(`${name} Component generated successfully`))}`
  );
};

module.exports = {
  generateComponent,
};
