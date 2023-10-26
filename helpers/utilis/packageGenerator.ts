import colors from "colors";
import { program } from "commander";
import * as componentGen from "../generators/generateComponent.js";
import * as pageGen from "../generators/generatePage.js";
import * as serviceWorkerGen from "../generators/generateServiceWorker.js";
import * as nextJsPageGen from "../generators/generateNextJsPage.js";
import * as nextJsComponentGen from "../generators/generateNextJsComponent.js";
import * as nextJsDynamicPageGen from "../generators/generateNextJsDynamicPage.js";



const packageGenerator = () => {
  program
    .command("generate")
    .alias("g")
    .option(
      "-p, --page " + colors.bold(colors.white("<name>")),
      "Generates a React page file."
    )
    .option(
      "-c, --component " + colors.bold(colors.white("<name>")),
      "Generates a React component file."
    )
    .option(
      "-nc, --next-component " + colors.bold(colors.white("<name>")),
      "Generates a NextJs component file."
    )
    .option(
      "-ct, --component-type " + colors.bold(colors.white("<name>")),
      "Specifies a client or server component, defaults to client."
    )

    .option(
      "-np, --next-page " + colors.bold(colors.white("<name>")),
      "Generates a NextJs page file."
    )
    .option(
      "-ndp, --next-dynamic-page " + colors.bold(colors.white("<name>")),
      "Generates a NextJs dynamic page file."
    )
    .option("-sw, --serviceWorker ", "Generates a Service Worker file for PWA.")
    .description(
      "Generate a new React or NextJS Component, Page or Service Worker!"
    )
    .action(async (name:any, options:any) => {
      const {
        component,
        page,
        serviceWorker,
        nextComponent,
        nextPage,
        nextDynamicPage,
        componentType 
      } = name;
      const componentName = component
        ? `${component.charAt(0).toUpperCase()}${component.slice(1)}`
        : undefined;
      const pageName = page
        ? `${page.charAt(0).toUpperCase()}${page.slice(1)}`
        : undefined;
      
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
        nextJsComponentGen.generateComponent(nextComponent,legitComponentType);
        
      }

      if (nextPage && legitComponentType) {
        //generate next page
        nextJsPageGen.generatePage(nextPage, legitComponentType);

      }

      if (nextDynamicPage) {
         console.log(nextDynamicPage);
         console.log(legitComponentType);
      }
    });
};

export { packageGenerator };
