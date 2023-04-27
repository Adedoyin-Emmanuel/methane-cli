const generateComponentTmp = require("./../template/pageTemplate");

const resolveComponentContent = (userConfig) => {
  if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().page === "arrow"
  ) {
    return generateComponentTmp.generateJsxArrowTemplate();
  } else if (
    userConfig.readConfig.template === "jsx" &&
    userConfig.readConfig.page === "functional"
  ) {
    return generateComponentTmp.generateJsxFunctionTemplate();
  } else if (
    userConfig.readConfig.template === "tsx" &&
    userConfig.readConfig.page === "arrow"
  ) {
    return generateComponentTmp.generateTsxArrowTemplate();
  } else if (
    userConfig.readConfig.template === "tsx" &&
    userConfig.readConfig.page === "functional"
  ) {
    return generateComponentTmp.generateTsxFunctionTemplate();
  }
};

module.exports = {
  resolveComponentContent,
};
