import * as generateNextJsDynamicPageTmp from "../templates/nextJsDynamicPage.js";
const resolveDynamicPageContent = (dynamicPageId, userConfig, pageName, componentType = "client") => {
    if (userConfig.readConfig().template === "jsx" &&
        userConfig.readConfig().component === "arrow") {
        return generateNextJsDynamicPageTmp.generateNextJsDynamicPageJsxArrowTemplate(dynamicPageId, userConfig.readConfig().generateStylesheet, pageName, userConfig.readConfig().stylesheetType, componentType);
    }
    else if (userConfig.readConfig().template === "jsx" &&
        userConfig.readConfig().component === "functional") {
        return generateNextJsDynamicPageTmp.generateNextJsDynamicPageJsxFunctionTemplate(dynamicPageId, userConfig.readConfig().generateStylesheet, pageName, userConfig.readConfig().stylesheetType, componentType);
    }
    else if (userConfig.readConfig().template === "tsx" &&
        userConfig.readConfig().component === "arrow") {
        return generateNextJsDynamicPageTmp.generateNextJsDynamicPageTsxArrowTemplate(dynamicPageId, userConfig.readConfig().generateStylesheet, pageName, userConfig.readConfig().stylesheetType, componentType);
    }
    else if (userConfig.readConfig().template === "tsx" &&
        userConfig.readConfig().component === "functional") {
        return generateNextJsDynamicPageTmp.generateNextJsDynamicPageTsxFunctionTemplate(dynamicPageId, userConfig.readConfig().generateStylesheet, pageName, userConfig.readConfig().stylesheetType, componentType);
    }
};
export { resolveDynamicPageContent };
