const colors = require("colors");
const { program } = require("commander");

const packageDescription = () => {
  program
    .version("1.0.0")
    .description(
      colors.cyan("A CLI tool that creates React Components & Pages")
    );
};

module.exports = {
  packageDescription,
};
