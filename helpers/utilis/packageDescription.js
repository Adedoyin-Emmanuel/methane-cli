const colors = require("colors");
const { program } = require("commander");

const packageDescription = () => {
  program
    .version("1.0.0")
    .description(
      colors.cyan(
        "Methane-Cli is a tool for efficient creation of React components, pages and Service Worker files."
      )
    )
};

module.exports = {
  packageDescription,
};
