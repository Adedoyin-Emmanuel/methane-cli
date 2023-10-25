import { program } from "commander";
import colors from "colors";
// import * as userReadConfig from "./readUserConfig";
// import * as userWriteConfig from "./writeUserConfig";
import * as userReadConfig from "./readUserConfig.js";
import * as userWriteConfig from "./writeUserConfig.js";
const configurePackage = () => {
    program
        .command("config")
        .alias("c")
        .description("Set default configurations")
        .option("-t, --template " + colors.green("<template>"), "Set the default template (jsx or tsx)")
        .option("-c, --component " + colors.green("<component>"), "Set the default component type (arrow or functional)")
        .option("-p, --page " + colors.green("<page>"), "Set the default page type (arrow or functional)")
        .option("-r, --register " + colors.green("<boolean>"), "Set the default registration of pages in the App.jsx or App.tsx file (true or false)")
        .option("-st, --stylesheetType " + colors.green("<style>"), "Set the default style type (css or scss)")
        .option("-gs, --generateStylesheet " + colors.green("<boolean>"), "Generates a stylesheet file for the Component and Pages. (true or false)")
        .option("-gf, --generateFolder " + colors.green("<boolean>"), "Generates a custom folder for the Component and Pages. (true or false)")
        .action((options) => {
        const config = userReadConfig.readConfig();
        //component template
        if (options.template) {
            if (options.template != "jsx" && options.template != "tsx") {
                console.log(options.template);
                console.log(colors.red(`Invalid template format, format must be either ${colors.bold("jsx")} or ${colors.bold("tsx")}`));
                return;
            }
            config.template = options.template;
            userWriteConfig.writeConfig(config);
            console.log(colors.cyan(`Default template is now ${colors.bold(config.template)}`));
            return;
        }
        //stylesheetType format
        if (options.stylesheetType) {
            if (options.stylesheetType != "css" &&
                options.stylesheetType != "scss") {
                console.log(colors.red(`Invalid stylesheetType format, format must be either ${colors.bold("css")} or ${colors.bold("scss")}`));
                return;
            }
            config.stylesheetType = options.stylesheetType;
            userWriteConfig.writeConfig(config);
            console.log(colors.cyan(`Default stylesheet type is now ${colors.bold(config.stylesheetType)}`));
            return;
        }
        //generate stylesheet file config
        if (options.generateStylesheet) {
            if (options.generateStylesheet != "true" &&
                options.generateStylesheet != "false") {
                console.log(colors.red("Invalid stylesheet generation value, value must be 'true' or 'false'"));
                return;
            }
            config.generateStylesheet = options.generateStylesheet;
            userWriteConfig.writeConfig(config);
            console.log(colors.cyan(`Stylesheet files generation set to ${colors.bold(config.generateStylesheet)}`));
            return;
        }
        //folder generation
        if (options.generateFolder) {
            if (options.generateFolder != "true" &&
                options.generateFolder != "false") {
                console.log(colors.red(`Invalid folder generation value, value must be ${colors.bold("true")} or ${colors.bold("false")}`));
                return;
            }
            config.generateFolder = options.generateFolder;
            userWriteConfig.writeConfig(config);
            console.log(colors.cyan(`Component & Page folder generation set to ${colors.bold(config.generateFolder)}`));
            return;
        }
        //page registration.
        if (options.register) {
            if (options.register != "true" && options.register != "false") {
                console.log(colors.red(`Invalid register value, value must be ${colors.bold("true")} or ${colors.bold("false")}`));
                return;
            }
            config.register = options.register;
            userWriteConfig.writeConfig(config);
            console.log(colors.cyan(`React pages registration set to ${colors.bold(config.register)}`));
            return;
        }
        //component generation format
        if (options.component) {
            if (options.component != "arrow" && options.component != "functional") {
                console.log(colors.red(`Invalid component format, format must be either ${colors.bold("arrow")} or ${colors.bold("functional")}`));
                return;
            }
            config.component = options.component;
            userWriteConfig.writeConfig(config);
            console.log(colors.cyan(`Default component is now ${colors.bold("functional")} function template`));
            return;
        }
        //page generation template
        if (options.page) {
            if (options.page != "arrow" && options.page != "functional") {
                console.log(colors.red(`Invalid page format, format must be either ${colors.bold("arrow")} or ${colors.bold("functional")}`));
                return;
            }
            config.page = options.page;
            userWriteConfig.writeConfig(config);
            console.log(colors.cyan(`Default page is now ${colors.bold(config.page)} function template`));
            return;
        }
        //check if an argument was passed
        if (Object.keys(options).length === 0) {
            console.log(colors.grey(colors.bold(`No configurations applied, run ${colors.white("rg config --help")} to see available commands`)));
        }
    });
};
export { configurePackage, };
