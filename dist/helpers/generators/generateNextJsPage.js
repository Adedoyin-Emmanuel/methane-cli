import colors from "colors";
import fs from "fs";
import path from "path";
import * as readUserConfig from "../utilis/readUserConfig.js";
import * as pageResolver from "./resolvers/resolveNextJsPageContent.js";
const findPagesDirectory = () => {
    const rootDir = process.cwd();
    const possibleDirs = [
        "src/app/page",
        "src/app/pages",
        "src/app/Page",
        "src/app/Pages",
        "src/pages",
        "src/Pages",
        "src/app/",
        "app/page",
        "app/Pages",
        "app/pages",
        "app/",
    ];
    const directoryExists = (dir) => {
        try {
            const stat = fs.statSync(dir);
            return stat.isDirectory();
        }
        catch (error) {
            return false;
        }
    };
    const pagesDir = possibleDirs.find((dir) => directoryExists(path.join(rootDir, dir)));
    return pagesDir ? path.join(rootDir, pagesDir) : null;
};
const generatePageFile = async (name, pagesDir, pageResolver, componentType, startPage) => {
    let pageFilePath = path.join(pagesDir + `/page.${readUserConfig.readConfig().template}`);
    if (startPage) {
        pageFilePath = path.join(pagesDir + startPage + `/page.${readUserConfig.readConfig().template}`);
    }
    await fs.writeFile(pageFilePath, pageResolver.resolvePageContent(readUserConfig, "Index", componentType), (error) => {
        if (error) {
            console.log(colors.bold(colors.red(error.toString())));
        }
    });
};
export const generatePage = async (name, componentType, startPage) => {
    if (!name) {
        return console.log(colors.bold(colors.red("Page name is required!")));
    }
    const pagesDir = findPagesDirectory();
    if (!pagesDir) {
        console.log(colors.bold(colors.red("pages directory doesn't exist")));
        return;
    }
    let pageDirName = readUserConfig.readConfig().generateFolder === "true"
        ? path.join(pagesDir, name)
        : path.join(pagesDir);
    if (startPage) {
        pageDirName =
            readUserConfig.readConfig().generateFolder === "true"
                ? path.join(pagesDir + startPage, name)
                : path.join(pagesDir + startPage);
    }
    try {
        readUserConfig.readConfig().generateFolder === "true"
            ? await fs.mkdirSync(pageDirName)
            : null;
        if (readUserConfig.readConfig().generateStylesheet === "true") {
            const styleSheetType = readUserConfig.readConfig().stylesheetType;
            const cssFilePath = path.join(pageDirName, `page.style.${styleSheetType}`);
            await fs.promises.writeFile(cssFilePath, "");
        }
        else {
        }
        generatePageFile(name, pageDirName, pageResolver, componentType);
    }
    catch (error) {
        console.log(colors.bold(colors.red(error)));
    }
    console.log(`${colors.bold(colors.green(`${name} page generated successfully`))}`);
};
