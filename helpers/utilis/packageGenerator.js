const colors = require("colors");
const { program } = require("commander");

const packageGenerator = () => {
  program
    .command("generate")
    .alias("g")
    .option(
      "-p, --page " + colors.green("<page>"),
      "Generates a React page file"
    )
    .option(
      "-c, --component " + colors.green("<component>"),
      "Generates a React component file"
    )
    .description("Generate a new React Component or Page!")
    .action(async (name) => {
      console.log(name);
    });
};

module.exports = {
  packageGenerator,
};
