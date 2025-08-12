import colors from "colors";
import { program } from "commander";

import * as pageGen from "../generators/generate-page.js";
import * as componentGen from "../generators/generate-component.js";
import * as nextJsPageGen from "../generators/generate-nextjs-page.js";
import * as serviceWorkerGen from "../generators/generate-service-worker.js";
import * as nextJsComponentGen from "../generators/generate-nextjs-component.js";
import * as nextJsDynamicPageGen from "../generators/generate-nextjs-dynamic-page.js";

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
      "-sp, --start-page " + colors.bold(colors.white("<name>")),
      "Optionally specify the directory to start from when generating a NextJs dynamic page or a regular page. Starts with /"
    )
    .option(
      "-nid, --next-page-id " + colors.bold(colors.white("<name>")),
      "Dynamic id for the NextJs dynamic page file."
    )
    .option("-sw, --serviceWorker ", "Generates a Service Worker file for PWA.")
    .description(
      "Generate a new React or NextJS Component, Page or Service Worker!"
    )
    .action(async (name: any, options: any) => {
      const {
        page,
        nextPage,
        startPage,
        component,
        nextPageId,
        serviceWorker,
        componentType,
        nextComponent,
      } = name;
      const componentName = component ? `${component}` : undefined;
      const pageName = page ? `${page}` : undefined;

      let legitComponentType =
        componentType === undefined ? "client" : "server";
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
        nextJsComponentGen.generateComponent(nextComponent, legitComponentType);
      }

      if (nextPage && startPage) {
        nextJsPageGen.generatePage(nextPage, legitComponentType, startPage);
      }

      if (nextPage && !startPage) {
        nextJsPageGen.generatePage(nextPage, legitComponentType);
      }

      if (nextPageId && startPage) {
        nextJsDynamicPageGen.generatePage(
          nextPageId,
          "page",
          legitComponentType,
          startPage
        );
      }

      if (nextPageId && !startPage) {
        nextJsDynamicPageGen.generatePage(
          nextPageId,
          "page",
          legitComponentType
        );
      }
    });
};

export { packageGenerator };
