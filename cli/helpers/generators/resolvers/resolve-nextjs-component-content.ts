import * as generateNextJsPageTmp from "../templates/nextjs-component-template.js";

const resolveComponentContent = (userConfig: any, pageName: string, componentType: string = "client"): any => {
  if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateNextJsPageTmp.generateNextJsJsxArrowTemplate(
      pageName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType,
      componentType
    );
  } else if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "functional"
  ) {
    return generateNextJsPageTmp.generateNextJsJsxFunctionTemplate(
      pageName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType,
      componentType
    );
  } else if (
    userConfig.readConfig().template === "tsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateNextJsPageTmp.generateNextJsTsxArrowTemplate(
      pageName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType,
      componentType
    );
  } else if (
    userConfig.readConfig().template === "tsx" &&
    userConfig.readConfig().component === "functional"
  ) {
    return generateNextJsPageTmp.generateNextJsTsxFunctionTemplate(
      pageName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType,
      componentType
    );
  }
};

export { resolveComponentContent };
