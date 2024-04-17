import colors from "colors";
import fs from "fs";
import inquirer from "inquirer";
import path from "path";

export const initMethaneCLI = (skipPrompt: boolean) => {
  const configFolderPath = path.join(process.cwd(), "methane");
  const userConfigFilePath = path.join(configFolderPath, "methane.json");

  if (!fs.existsSync(configFolderPath)) {
    fs.mkdirSync(configFolderPath);
  }

  if (!fs.existsSync(userConfigFilePath)) {
    let defaultConfig = {
      template: "tsx",
      component: "arrow",
      page: "arrow",
      generateStylesheet: "false",
      generateFolder: "true",
      register: "false",
      stylesheetType: "css",
    };

    // check if the user skipped prompt
    if (skipPrompt) {
      console.log(
        colors.yellow(
          colors.bold(
            `Skipping prompt, default config will be applied. You can always change it by runnning methane config --help`
          )
        )
      );
      const userConfig = { ...defaultConfig };

      fs.writeFileSync(userConfigFilePath, JSON.stringify(userConfig, null, 2));

      console.log("\n");
      console.log(
        colors.green(
          colors.bold(
            "Methane CLI configurations has been initialized successfully! 🚀"
          )
        )
      );

      return;
    }

    inquirer
      .prompt([
        {
          type: "list",
          name: "template",
          message: "Select a default template:",
          choices: ["jsx", "tsx"],
          default: "tsx",
        },
        {
          type: "list",
          name: "component",
          message: "Select a default component type:",
          choices: ["arrow", "functional"],
          default: "arrow",
        },

        {
          type: "list",
          name: "page",
          message: "Select a default page type:",
          choices: ["arrow", "functional"],
          default: "arrow",
        },

        {
          type: "list",
          name: "generateStylesheet",
          message: "Generates a stylesheet file for the Component and Pages",
          choices: ["true", "false"],
          default: "false",
        },

        {
          type: "list",
          name: "generateFolder",
          message: "Generates a folder file for the Component and Pages",
          choices: ["true", "false"],
          default: "true",
        },

        {
          type: "list",
          name: "register",
          message:
            "Registers pages in app entry point. If using NextJS, select false, else, sets the default registration of pages in the App.jsx or App.tsx file",
          choices: ["true", "false"],
          default: "false",
        },

        {
          type: "list",
          name: "stylesheetType",
          message: "Set the default style type (css or scss)",
          choices: ["css", "scss"],
          default: "css",
        },
      ])
      .then((answers) => {
        const userConfig = { ...defaultConfig, ...answers };

        fs.writeFileSync(
          userConfigFilePath,
          JSON.stringify(userConfig, null, 2)
        );
        console.log(
          colors.green(
            colors.bold(
              "Methane CLI configurations has been initialized successfully!"
            )
          )
        );
      });
  } else {
    console.log(
      colors.bold(colors.yellow("Methane CLI configuration already exists."))
    );
  }
};
