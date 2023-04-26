#!/usr/bin/env node

const fs = require("fs-extra");
const colors = require("colors");
const figlet = require("figlet");
const path = require("path");
const { program } = require("commander");
const userReadConfig = require("./helpers/utilis/readUserConfig");
const userWriteConfig = require("./helpers/utilis/writeUserConfig");
const gradient = require("gradient-string");
const { option } = require("yargs");

// Configure Figlet for the package name
figlet.text(
  "React-Gen",
  {
    font: "Big",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Figlet error:", colors.red(err));
      return;
    }

    console.log(colors.rainbow(data));

    program
      .version("1.0.0")
      .description(
        colors.cyan("A CLI tool that creates React Components & Pages")
      );
    program
      .command("config")
      .description("Set default configurations")
      .option(
        "-t, --template " + colors.green("<template>"),
        "Set the default template (jsx or tsx)"
      )
      .option(
        "-c, --component " + colors.green("<component>"),
        "Set the default component type (arrow or functional)"
      )
      .option(
        "-p, --page " + colors.green("<page>"),
        "Set the default page type (arrow or functional)"
      ).option(
        "-r --register" + colors.green("<register>"),
        "Set the default registration of pages in the App.jsx or App.tsx file (true or false)" 
      )
      .action((options) => {
        const config = userReadConfig.readConfig();
        if (options.template) {
          if (options.template != "jsx" && options.template != "tsx") {
            console.log(options.template);
            console.log(
              colors.red(
                "Invalid template format, format must be either 'jsx' or 'tsx'"
              )
            );
            return;
          }
          config.template = options.template;
          userWriteConfig.writeConfig(config);
          console.log(
            colors.cyan("Default template is now " + config.template)
          );
        }
        if (options.component) {
          if (
            options.component != "arrow" &&
            options.component != "functional"
          ) {
            console.log(
              colors.red(
                "Invalid component format, format must be either 'arrow' or 'functional'"
              )
            );
            return;
          }
          config.component = options.component;
          userWriteConfig.writeConfig(config);
          console.log(
            colors.cyan(
              "Default component is now " + config.component + " function template"
            )
          );
        }
        if (options.page) {
          if (
            options.page != "arrow" &&
            options.page != "functional"
          ) {
            console.log(
              colors.red(
                "Invalid page format, format must be either 'arrow' or 'functional'"
              )
            );
            return;
          }
          config.page = options.page;
          userWriteConfig.writeConfig(config);
          console.log(
            colors.cyan(
              "Default page is now " +
                config.page +
                " function template"
            )
          );
        }
      });
    program.parse(process.argv);
  }
);
