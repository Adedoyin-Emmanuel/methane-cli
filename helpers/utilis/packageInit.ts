import { program } from "commander";
import * as methaneCli from "./initHelperFunction.js";

const InitMethaneCLI = () => {
  program
    .command("init")
    .alias("i")
    .description("Create default configuration files")
    .action(() => {
      methaneCli.initMethaneCLI();
    });
};

export  {
  InitMethaneCLI,
};
