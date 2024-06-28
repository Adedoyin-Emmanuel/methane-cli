import colors from "colors";

import { program } from "commander";
const packageDescription = () => {
  program
    .version("1.4.7")
    .description(
      colors.cyan(
        "Methane-Cli is a tool for efficient creation of React or NextJs components, pages and Service Worker files."
      )
    );
};

export { packageDescription };
