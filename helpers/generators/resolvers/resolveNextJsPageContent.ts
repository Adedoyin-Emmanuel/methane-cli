import * as generateNextJsPageTmp from "../templates/nextJsPageTemplate.js";

const resolvePageContent = (userConfig: any, pageName: string): any => {
  if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateNextJsPageTmp.generateNextJsJsxArrowTemplate(
      pageName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType,
      userConfig.readConfig().componentType
    );
  } else if (userConfig.readConfig().template === "jsx" && userConfig.readConfig().component === "functional") {
      return generateNextJsPageTmp.generateNextJsJsxFunctionTemplate(
        pageName,
        userConfig.readConfig().generateStylesheet,
        userConfig.readConfig().stylesheetType,
        userConfig.readConfig().componentType
      );
  } else if (userConfig.readConfig().template === "tsx" && userConfig.readConfig().component === "arrow") {
      return generateNextJsPageTmp.generateNextJsTsxArrowTemplate(
        pageName,
        userConfig.readConfig().generateStylesheet,
        userConfig.readConfig().stylesheetType,
        userConfig.readConfig().componentType
      );
  }else if(userConfig.readConfig().template === "tsx" && userConfig.readConfig().component === "functional"){
    return generateNextJsPageTmp.generateNextJsTsxFunctionTemplate(
      pageName,
      userConfig.readConfig().generateStylesheet,
      userConfig.readConfig().stylesheetType,
      userConfig.readConfig().componentType
    );
  }
};


export {
    resolvePageContent,
}
