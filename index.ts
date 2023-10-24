#!/usr/bin/env node

import colors from "colors";
import { program } from "commander";
import figlet from "figlet";
import * as packageConfig from "./helpers/utilis/packageConfiguration";
import * as packageDes from "./helpers/utilis/packageDescription";
import * as packageGen from "./helpers/utilis/packageGenerator";
import * as packageInit from "./helpers/utilis/packageInit";
import * as packageListConfig from "./helpers/utilis/packageListConfiguration";

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
  function (err, data: any) {
    if (err) {
      console.log("Figlet error:", colors.red(err.toString()));
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
