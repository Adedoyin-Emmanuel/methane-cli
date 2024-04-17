import { program } from "commander";
import * as methaneCli from "./initHelperFunction.js";

const InitMethaneCLI = () => {
  program
    .command("init")
    .alias("i")
    .description("Create configuration files")
    .option(
      "-d, --default ",
      "Skip prompt and create methane config with default configurations"
    )
    .action((options) => {
      options.default
        ? methaneCli.initMethaneCLI(true)
        : methaneCli.initMethaneCLI(false);
    });
};

export { InitMethaneCLI };
