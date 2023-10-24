#!/usr/bin/env node

import colors from "colors";
import { program } from "commander";
import figlet from "figlet";
import packageConfig from "./helpers/utilis/packageConfiguration";
import packageDes from "./helpers/utilis/packageDescription";
import packageGen from "./helpers/utilis/packageGenerator";
import packageInit from "./helpers/utilis/packageInit";
import packageListConfig from "./helpers/utilis/packageListConfiguration";

/* Configure Figlet for the package name */

figlet.text(
  "Methane-C l i",
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
    packageInit.InitMethaneCLI();
    packageDes.packageDescription();
    packageConfig.configurePackage();
    packageGen.packageGenerator();
    packageListConfig.listAllConfig();
    program.parse(process.argv);
  }
);
