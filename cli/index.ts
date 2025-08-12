#!/usr/bin/env node

import colors from "colors";
import { program } from "commander";
import figlet from "figlet";
import { configurePackage } from "./helpers/utilis/package-configuration.js";
import { packageDescription } from "./helpers/utilis/package-description.js";
import { packageGenerator } from "./helpers/utilis/package-generator.js";
import { InitMethaneCLI } from "./helpers/utilis/package-init.js";
import { listAllConfig } from "./helpers/utilis/package-list-configuration.js";

figlet.text(
  "Methane",
  {
    font: "Big",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
    whitespaceBreak: true,
  },
  function (err, data: any) {
    if (err) {
      console.log("Figlet error:", colors.red(err.toString()));
      return;
    }

    console.log(colors.bold(colors.rainbow(data)));
    InitMethaneCLI();
    packageDescription();
    configurePackage();
    packageGenerator();
    listAllConfig();
    program.parse(process.argv);
  }
);
