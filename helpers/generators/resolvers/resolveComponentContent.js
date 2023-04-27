const generateComponentTmp = require("./../templates/componentTemplate");

const resolveComponentContent = (userConfig, componentName) => {
  if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateComponentTmp.generateJsxArrowTemplate(componentName);
  } else if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "functional"
  ) {
    return generateComponentTmp.generateJsxFunctionTemplate(componentName);
  } else if (
    userConfig.readConfig().template === "tsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateComponentTmp.generateTsxArrowTemplate(componentName);
  } else if (
    userConfig.readConfig().template === "tsx" &&
    userConfig.readConfig().component === "functional"
  ) {
    return generateComponentTmp.generateTsxFunctionTemplate(componentName);
  }
};


module.exports ={
    resolveComponentContent
}
