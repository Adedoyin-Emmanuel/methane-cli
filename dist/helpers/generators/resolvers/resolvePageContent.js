import * as generatePageTmp from "../templates/pageTemplate.js";
const resolvePageContent = (userConfig, pageName) => {
    if (userConfig.readConfig().template === "jsx" &&
        userConfig.readConfig().component === "arrow") {
        return generatePageTmp.generateJsxArrowTemplate(pageName, userConfig.readConfig().generateStylesheet, userConfig.readConfig().stylesheetType);
    }
    else if (userConfig.readConfig().template === "jsx" &&
        userConfig.readConfig().component === "functional") {
        return generatePageTmp.generateJsxFunctionTemplate(pageName, userConfig.readConfig().generateStylesheet, userConfig.readConfig().stylesheetType);
    }
    else if (userConfig.readConfig().template === "tsx" &&
        userConfig.readConfig().component === "arrow") {
        return generatePageTmp.generateTsxArrowTemplate(pageName, userConfig.readConfig().generateStylesheet, userConfig.readConfig().stylesheetType);
    }
    else if (userConfig.readConfig().template === "tsx" &&
        userConfig.readConfig().component === "functional") {
        return generatePageTmp.generateTsxFunctionTemplate(pageName, userConfig.readConfig().generateStylesheet, userConfig.readConfig().stylesheetType);
    }
};
export { resolvePageContent, };
