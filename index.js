#!/usr/bin/env node

const fs = require("fs-extra");
const colors = require("colors");
const figlet = require("figlet");
const path = require("path");
const { program } = require("commander");

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
      console.log("Figlet error:", err);
      return;
    }
        console.log(colors.rainbow(data));

    program
      .version("1.0.0")
      .description("A React component generator")
      .command("generate <name>")
      .alias("g")
      .description("Generate a new React component")
      .action(async (name) => {
        const componentName = name.charAt(0).toUpperCase() + name.slice(1);
        const componentPath = path.join(process.cwd(), componentName);
        const cssFilePath = path.join(componentPath, "styles.css");
        const componentFilePath = path.join(
          componentPath,
          `${componentName}.jsx`
        );

        try {
          // Create the component directory
          await fs.mkdir(componentPath);

          // Create the styles file
          await fs.writeFile(cssFilePath, "");

          // Create the component file
          await fs.writeFile(
            componentFilePath,
            `import React from 'react';
import './styles.css';

const ${componentName} = () => {
  return (
    <div>
      <h1>${componentName}</h1>
    </div>
  );
};

export default ${componentName};
`
          );

          console.log(
            colors.green(
              `Component '${componentName}' generated successfully at '${componentPath}'`
            )
          );
        } catch (error) {
          console.error(colors.red(error));
        }
      });

    program.parse(process.argv);
  }
);
