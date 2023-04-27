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
  fs.existsSync(path.join(rootDir, dir));
});
const readUserConfig = require("./../utilis/readUserConfig");

const generateComponent = (extension, name) => {
  if (!extension || !name) {
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
        fs.mkdir(componentPath);

        if (readUserConfig.readConfig().generateStylesheet === "true") {
          const styleSheetType = readUserConfig.readConfig().stylesheetType;
          const cssFilePath = path.join(
            componentFilePath,
            `${name}Style.${styleSheetType}`
          );
            
          fs.writeFile(cssFilePath, "");
          
          /*create the generated component*/
        }
      } catch (error) {}
    }
    const componentFilePath = path.join(
      rootDir,
      `${name}.${readUserConfig.readConfig().template}`
    );

    /*check user configurations*/
    console.log(readUserConfig.readConfig().template);
    //if(readUserConfig.readConfig().)
  } else {
    console.log(readUserConfig.readConfig().template);
  }
  console.log(`${colors.bold(colors.green(`${name} generated successfully`))}`);
};

module.exports = {
  generateComponent,
};
