import colors from "colors";
import { program } from "commander";
import * as componentGen from "../generators/generateComponent.js";
import * as nextJsComponentGen from "../generators/generateNextJsComponent.js";
import * as nextJsDynamicPageGen from "../generators/generateNextJsDynamicPage.js";
import * as nextJsPageGen from "../generators/generateNextJsPage.js";
import * as pageGen from "../generators/generatePage.js";
import * as serviceWorkerGen from "../generators/generateServiceWorker.js";
const packageGenerator = () => {
    program
        .command("generate")
        .alias("g")
        .option("-p, --page " + colors.bold(colors.white("<name>")), "Generates a React page file.")
        .option("-c, --component " + colors.bold(colors.white("<name>")), "Generates a React component file.")
        .option("-nc, --next-component " + colors.bold(colors.white("<name>")), "Generates a NextJs component file.")
        .option("-ct, --component-type " + colors.bold(colors.white("<name>")), "Specifies a client or server component, defaults to client.")
        .option("-np, --next-page " + colors.bold(colors.white("<name>")), "Generates a NextJs page file.")
        .option("-sp, --start-page " + colors.bold(colors.white("<name>")), "Optionally specify the directory to start from when generating a NextJs dynamic page or a regular page. Starts with /")
        .option("-nid, --next-page-id " + colors.bold(colors.white("<name>")), "Dynamic id for the NextJs dynamic page file.")
        .option("-sw, --serviceWorker ", "Generates a Service Worker file for PWA.")
        .description("Generate a new React or NextJS Component, Page or Service Worker!")
        .action(async (name, options) => {
        const { component, page, serviceWorker, nextComponent, nextPage, componentType, nextPageId, startPage, } = name;
        const componentName = component ? `${component}` : undefined;
        const pageName = page ? `${page}` : undefined;
        let legitComponentType = componentType === undefined ? "client" : "server";
        if (serviceWorker) {
            serviceWorkerGen.generateServiceWorkerFile();
        }
        if (componentName) {
            componentGen.generateComponent(componentName);
        }
        if (pageName) {
            pageGen.generatePage(pageName);
        }
        if (nextComponent) {
            //generate next component
            nextJsComponentGen.generateComponent(nextComponent, legitComponentType);
        }
        if (nextPage && startPage) {
            //generate next page with the startPage option
            nextJsPageGen.generatePage(nextPage, legitComponentType, startPage);
        }
        if (nextPage && !startPage) {
            //generate next page without startPage option
            nextJsPageGen.generatePage(nextPage, legitComponentType);
        }
        if (nextPageId && startPage) {
            //generate the dynamic page from a particular page
            nextJsDynamicPageGen.generatePage(nextPageId, "page", legitComponentType, startPage);
            //we don't want it to generate the dynamic page twice
            // process.exit(0);
        }
        if (nextPageId && !startPage) {
            //generate dynamic page
            nextJsDynamicPageGen.generatePage(nextPageId, "page", legitComponentType);
        }
    });
};
export { packageGenerator };
