import generateComponentTmp from "../templates/componentTemplate";

const resolveComponentContent = (userConfig, componentName) => {
  if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateComponentTmp.generateJsxArrowTemplate(
      componentName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType
    );
  } else if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "functional"
  ) {
    return generateComponentTmp.generateJsxFunctionTemplate(
      componentName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType
    );
  } else if (
    userConfig.readConfig().template === "tsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateComponentTmp.generateTsxArrowTemplate(
      componentName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType
    );
  } else if (
    userConfig.readConfig().template === "tsx" &&
    userConfig.readConfig().component === "functional"
  ) {
    return generateComponentTmp.generateTsxFunctionTemplate(
      componentName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType
    );
  }
};

module.exports = {
  resolveComponentContent,
};
