import colors from "colors";
import { program } from "commander";
import * as componentGen from "../generators/generateComponent.js";
import * as pageGen from "../generators/generatePage.js";
import * as serviceWorkerGen from "../generators/generateServiceWorker.js";
const packageGenerator = () => {
    program
        .command("generate")
        .alias("g")
        .option("-p, --page " + colors.bold(colors.bold("<name>")), "Generates a React page file.")
        .option("-c, --component " + colors.bold(colors.bold("<name>")), "Generates a React component file.")
        .option("-sw, --serviceWorker ", "Generates a Service Worker file for PWA.")
        .description("Generate a new React Component, Page or Service Worker!")
        .action(async (name) => {
        //check if an argument was passed
        if (Object.keys(name).length === 0) {
            console.log(colors.bold(colors.grey(`No argument specified, run ${colors.white("rg generate --help")} for available commands`)));
            return;
        }
        const { component, page, serviceWorker } = name;
        if (component !== undefined &&
            page !== undefined &&
            serviceWorker !== undefined) {
            const componentName = `${component
                .charAt(0)
                .toUpperCase()}${component.slice(1)}`;
            const pageName = `${page.charAt(0).toUpperCase()}${page.slice(1)}`;
            //serviceworker is here too
            serviceWorkerGen.generateServiceWorkerFile();
            componentGen.generateComponent(componentName);
            pageGen.generatePage(pageName);
        }
        else if (component !== undefined &&
            page === undefined &&
            serviceWorker === undefined) {
            const componentName = `${component
                .charAt(0)
                .toUpperCase()}${component.slice(1)}`;
            componentGen.generateComponent(componentName);
        }
        else if (page !== undefined &&
            component === undefined &&
            serviceWorker === undefined) {
            const pageName = `${page.charAt(0).toUpperCase()}${page.slice(1)}`;
            pageGen.generatePage(pageName);
        }
        else if (serviceWorker !== undefined &&
            component === undefined &&
            page === undefined) {
            serviceWorkerGen.generateServiceWorkerFile();
        }
        else if (serviceWorker !== undefined &&
            page !== undefined &&
            component === undefined) {
            const pageName = `${page.charAt(0).toUpperCase()}${page.slice(1)}`;
            pageGen.generatePage(pageName);
            //serviceworker is here too
        }
        else if (serviceWorker !== undefined &&
            component !== undefined &&
            page == undefined) {
            const componentName = `${component
                .charAt(0)
                .toUpperCase()}${component.slice(1)}`;
            componentGen.generateComponent(componentName);
            serviceWorkerGen.generateServiceWorkerFile();
            //service worker is here too
        }
        else if (page !== undefined &&
            component !== undefined &&
            serviceWorker === undefined) {
            const componentName = `${component
                .charAt(0)
                .toUpperCase()}${component.slice(1)}`;
            const pageName = `${page.charAt(0).toUpperCase()}${page.slice(1)}`;
            pageGen.generatePage(pageName);
            componentGen.generateComponent(componentName);
        }
    });
};
export { packageGenerator };
