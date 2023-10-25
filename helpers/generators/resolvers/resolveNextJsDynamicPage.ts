import * as generateNextJsPageTmp from "../templates/nextJsDynamicPage.js";

const resolveDynamicPageContent = (
  userConfig: any,
  pageName: string,
  dynamicPageId: any,
  componentType?: string
): any => {
  if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateNextJsPageTmp.generateNextJsDynamicPageJsxArrowTemplate(
      dynamicPageId,
      userConfig.readConfig().generateStylesheet,
      pageName,
      userConfig.readConfig().stylesheetType,
      componentType
    );
  } else if (
    userConfig.readConfig().template === "jsx" &&
    userConfig.readConfig().component === "functional"
  ) {
    return generateNextJsPageTmp.generateNextJsDynamicPageJsxFunctionTemplate(
      dynamicPageId,
      userConfig.readConfig().generateStylesheet,
      pageName,
      userConfig.readConfig().styleSheetType,
      componentType
    );
  } else if (
    userConfig.readConfig().template === "tsx" &&
    userConfig.readConfig().component === "arrow"
  ) {
    return generateNextJsPageTmp.generateNextJsDynamicPageTsxArrowTemplate(
      dynamicPageId,
      userConfig.readConfig().generateStylesheet,
      pageName,
      userConfig.readConfig().styleSheetType,
      componentType
    );
  } else if (
    userConfig.readConfig().template === "tsx" &&
    userConfig.readConfig().component === "functional"
  ) {
    return generateNextJsPageTmp.generateNextJsDynamicPageTsxFunctionTemplate(
      dynamicPageId,
      userConfig.readConfig().generateStylesheet,
      pageName,
      userConfig.readConfig().styleSheetType,
      componentType
    );
  }
};


export { resolveDynamicPageContent };
