const colors = require("colors");
const { program } = require("commander");

const packageGenerator = () => {
  program
    .command("generate")
    .alias("g")
    .option(
      "-p, --page " + colors.green("<name>"),
      "Generates a React page file."
    )
    .option(
      "-c, --component " + colors.green("<name>"),
      "Generates a React component file."
    )
    .option(
      "-sw, --serviceWorker" + colors.green("<name>"),
      "Generates a Service Worker file for PWA."
    )
    .description("Generate a new React Component or Page!")
    .action(async (name) => {
      //check if an argument was passed
      if(Object.keys(name).length === 0)
      {
         console.log(
           colors.bold(
             colors.grey(
               `No argument specified, run ${colors.white(
                 "rg generate --help"
               )} for available commands`
             )
           )
         );
        return;
      }
      console.log(typeof(name));
      return;
    });
    
   
  
};

module.exports = {
  packageGenerator,
};
