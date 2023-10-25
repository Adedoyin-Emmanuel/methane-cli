#!/usr/bin/env node
import colors from "colors";
import { program } from "commander";
import figlet from "figlet";
import { configurePackage } from "./helpers/utilis/packageConfiguration.js";
import { packageDescription } from "./helpers/utilis/packageDescription.js";
import { packageGenerator } from "./helpers/utilis/packageGenerator.js";
import { InitMethaneCLI } from "./helpers/utilis/packageInit.js";
import { listAllConfig } from "./helpers/utilis/packageListConfiguration.js";
/* Configure Figlet for the package name */
figlet.text("Methane-C l i", {
    font: "Big",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 150,
    whitespaceBreak: true,
}, function (err, data) {
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
});
