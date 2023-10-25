import { program } from "commander";
import * as userReadConfig from "./readUserConfig.js";
import colors from "colors";
const listAllConfig = () => {
    program
        .command("list-config")
        .alias("lc")
        .description("List all Methane-Cli configurations")
        .action(() => {
        console.log(colors.bold(colors.white("All configurations")));
        const allConfigurations = userReadConfig.readConfig();
        if (!allConfigurations) {
            console.log(colors.bold(colors.red("An error occured while reading configuration")));
        }
        else {
            console.log(colors.bold(colors.cyan(allConfigurations)));
        }
    });
};
export { listAllConfig, };
