const colors = require("colors");
const { program } = require("commander");
const componentGen = require("./../generators/generateComponent");
const pageGen = require("./../generators/generatePage")
const packageGenerator = () => {
  program
    .command("generate")
    .alias("g")
    .option(
      "-p, --page " + colors.green("<name>"),
      "Generates a React page file."
    )
    .option(
      "-c, --component " + colors.green("<name>"),
      "Generates a React component file."
    )
    .option(
      "-sw, --serviceWorker " + colors.green("<name>"),
      "Generates a Service Worker file for PWA."
    )
    .description("Generate a new React Component, Page or Service Worker!")
    .action(async (name) => {
      //check if an argument was passed
      if (Object.keys(name).length === 0) {
        console.log(
          colors.bold(
            colors.grey(
              `No argument specified, run ${colors.white(
                "rg generate --help"
              )} for available commands`
            )
          )
        );
        return;
      }

      const { component, page, serviceWorker } = name;
      if (
        component !== undefined &&
        page !== undefined &&
        serviceWorker !== undefined
      ) {
        const componentName = `${component
          .charAt(0)
          .toUpperCase()}${component.slice(1)}`;
        const pageName = `${page.charAt(0).toUpperCase()}${page.slice(1)}`;
        //serviceworker is here too
        componentGen.generateComponent(componentName);
        pageGen.generatePage(pageName);
        
      } else if (
        component !== undefined &&
        page === undefined &&
        serviceWorker === undefined
      ) {
        const componentName = `${component
          .charAt(0)
          .toUpperCase()}${component.slice(1)}`;
          
        componentGen.generateComponent(componentName);
        
      } else if (
        page !== undefined &&
        component === undefined &&
        serviceWorker === undefined
      ) {
        const pageName = `${page.charAt(0).toUpperCase()}${page.slice(1)}`;
        pageGen.generatePage(pageName);
        
      } else if (
        serviceWorker !== undefined &&
        component === undefined &&
        page === undefined
      ) {
        console.log(`serviceWorker is ${typeof serviceWorker}`);
      } else if (
        serviceWorker !== undefined &&
        page !== undefined &&
        component === undefined
      ) {
        const pageName = `${page.charAt(0).toUpperCase()}${page.slice(1)}`;
        pageGen.generatePage(pageName);
        
        //serviceworker is here too
      } else if (
        serviceWorker !== undefined &&
        component !== undefined &&
        page == undefined
      ) {
        const componentName = `${component
          .charAt(0)
          .toUpperCase()}${component.slice(1)}`;
         componentGen.generateComponent(componentName);
          
        //service worker is here too
      } else if (
        page !== undefined &&
        component !== undefined &&
        serviceWorker === undefined
      ) {
        const componentName = `${component
          .charAt(0)
          .toUpperCase()}${component.slice(1)}`;
        const pageName = `${page.charAt(0).toUpperCase()}${page.slice(1)}`;
        pageGen.generatePage(pageName);
        componentGen.generateComponent(componentName);
        
      }
    });
};

module.exports = {
  packageGenerator,
};
