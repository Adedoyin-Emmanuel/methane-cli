const fs = require("fs");
const colors = require("colors");
const path = require("path");
const rootDir = path.join(process.cwd());
const componentDir = [
  "components",
  "Components",
  "component",
  "Component",
].find((dir) => {
  return fs.existsSync(path.join(rootDir, dir));
});
const readUserConfig = require("./../utilis/readUserConfig");
const componentResolver = require("./resolvers/resolveComponentContent");

const generateComponentFile = async (name, componentFilePath, componentResolver) => {
  await fs.writeFile(
    componentFilePath,
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
  if (componentDir) {
    if (readUserConfig.readConfig().generateFolder === "true") {
      const componentPath = path.join(rootDir, componentDir, name);
      const componentFilePath = path.join(
        componentPath,
        `${name}.${readUserConfig.readConfig().template}`
      );

      try {
        /*create the generated component directory*/
        await fs.mkdirSync(componentPath);

        if (readUserConfig.readConfig().generateStylesheet === "true") {
          const styleSheetType = readUserConfig.readConfig().stylesheetType;
          const cssFilePath = path.join(
            `${componentPath}/${name}Style.${styleSheetType}`
          );

          await fs.writeFile(cssFilePath, "", (error) => {
            if (error) {
              console.log(colors.bold(colors.red(error)));
            }
          });
          generateComponentFile(name, componentFilePath, componentResolver);
          
        } else {
          /*generate the component without the stylesheet*/
          generateComponentFile(name, componentFilePath, componentResolver);
        }
      } catch (error) {
        console.log(colors.bold(colors.cyan(error)));
      }
    } else {
      //don't generate folder
    }
    const componentFilePath = path.join(
      rootDir,
      `${name}.${readUserConfig.readConfig().template}`
    );

    /*check user configurations*/
    // console.log(readUserConfig.readConfig().template);
    //if(readUserConfig.readConfig().)
  } else {
    console.log("components folder doesn't exist");
    console.log(componentDir);
  }
  console.log(`${colors.bold(colors.green(`${name} generated successfully`))}`);
};

module.exports = {
  generateComponent,
};
