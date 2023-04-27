const colors = require("colors");
const { program } = require("commander");

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
        console.log(
          `component is ${typeof component}, page is ${typeof page}, serviceWorker is ${typeof serviceWorker}`
        );
      } else if (
        component !== undefined &&
        page === undefined &&
        serviceWorker === undefined
      ) {
        console.log(`component is ${typeof component}`);
      } else if (
        name !== undefined &&
        component === undefined &&
        serviceWorker === undefined
      ) {
        console.log(`page is ${typeof page}`);
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
        console.log(
          `page is ${typeof page}, serviceWorker is ${typeof serviceWorker}`
        );
      } else if (
        serviceWorker !== undefined &&
        component !== undefined &&
        page == undefined
      ) {
        console.log(
          `component is ${typeof component}, serviceWorker is ${typeof serviceWorker}`
        );
      } else if (
        page !== undefined &&
        component !== undefined &&
        serviceWorker === undefined
      ) {
        console.log(`component is ${typeof component}, page is ${typeof page}`);
      }

    });
};

module.exports = {
  packageGenerator,
};
