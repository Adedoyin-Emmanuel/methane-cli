import { program } from "commander";
import methaneCli from "./initHelperFunction";

const InitMethaneCLI = () => {
  program
    .command("init")
    .alias("i")
    .description("Create default configuration files")
    .action(() => {
      methaneCli.initMethaneCLI();
    });
};

module.exports = {
  InitMethaneCLI,
};
