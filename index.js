#!/usr/bin/env node
const colors = require("colors");
const figlet = require("figlet");
const { program } = require("commander");
const packageConfig = require("./helpers/utilis/packageConfiguration");
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
    
    //package description
    program
      .version("1.0.0")
      .description(
        colors.cyan("A CLI tool that creates React Components & Pages")
    );
    program 
      .command("generate")
      .alias("g")
      .option(
        "-p, --page " + colors.green("<page>"),
        "Generates a React page file"
       )
      .option(
        "-c, --component "+ colors.green("<component>"),
        "Generates a React component file"
       )
      .description("Generate a new React Component or Page!")
      .action(async (name)=>{
          console.log(name);
          
      })
      
    //package configurations.
    packageConfig.configurePackage();
    
    program.parse(process.argv);
  }
);
