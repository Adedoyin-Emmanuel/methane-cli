#!/usr/bin/env node
import colors from "colors";
import { program } from "commander";
import figlet from "figlet";
import { configurePackage } from "./helpers/utilis/packageConfiguration";
import { packageDescription } from "./helpers/utilis/packageDescription";
import { packageGenerator } from "./helpers/utilis/packageGenerator";
import { InitMethaneCLI } from "./helpers/utilis/packageInit";
import { listAllConfig } from "./helpers/utilis/packageListConfiguration";
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
