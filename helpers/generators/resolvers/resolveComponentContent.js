const generateComponentTmp = require("./../templates/componentTemplate");

const resolveComponentContent = (userConfig) => {
  if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateComponentTmp.generateJsxArrowTemplate();
  } else if (
    userConfig.readConfig.template === "jsx" &&
    userConfig.readConfig.component === "functional"
  ) {
    return generateComponentTmp.generateJsxFunctionTemplate();
  } else if (
    userConfig.readConfig.template === "tsx" &&
    userConfig.readConfig.component === "arrow"
  ) {
    return generateComponentTmp.generateTsxArrowTemplate();
  } else if (
    userConfig.readConfig.template === "tsx" &&
    userConfig.readConfig.component === "functional"
  ) {
    return generateComponentTmp.generateTsxFunctionTemplate();
  }
};


module.exports ={
    resolveComponentContent
}
