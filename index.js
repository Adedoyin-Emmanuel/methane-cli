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
        "-t, --template <template>",
        "Set the default template (jsx or tsx)"
      )
      .option(
        "-c, --component <component>",
        "Set the default component type (arrow function or function)"
      )
      .option(
        "-p, --page <page>",
        "Set the default page type (arrow function or function)"
      )
      .action((options) => {
        const config = userReadConfig.readConfig();
        if (options.template) {
          if(options.template != "jsx"  && options.template != "tsx")
          {
            console.log(options.template);
            console.log(colors.red("Invalid template format, format must be either 'jsx' or 'tsx'"));
            return;
          }
          config.template = options.template;
          userWriteConfig.writeConfig(config);
          console.log(colors.cyan("Default template is now " + config.template));
        }
        if (options.component) {
          config.component = options.component;
        }
        if (options.page) {
          config.page = options.page;
        }
      });
        program.parse(process.argv);
      
  }
  
    
);


