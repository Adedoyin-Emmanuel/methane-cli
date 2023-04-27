#!/usr/bin/env node
const colors = require("colors");
const figlet = require("figlet");
const { program } = require("commander");
const packageConfig = require("./helpers/utilis/packageConfiguration");
const packageDes = require("./helpers/utilis/packageDescription");
const packageGen = require("./helpers/utilis/packageGenerator");
// Configure Figlet for the package name
figlet.text(
  "React-Gen",
  {
    font: "Big",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
    whitespaceBreak: true,
  },
  function (err, data) {
    if (err) {
      console.log("Figlet error:", colors.red(err));
      return;
    }

    console.log(colors.bold(colors.rainbow(data)));
    packageDes.packageDescription();
    packageConfig.configurePackage();
    packageGen.packageGenerator();
    program.parse(process.argv);
  }
);
