import colors from "colors";
import fs from "fs";
import { getUserConfigFilePath } from "./getUserConfigFilePath.js";

const filePath = getUserConfigFilePath();

export const writeConfig = (config: any) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
    console.log(colors.green("Configurations saved successfully!"));
  } catch (error: any) {
    console.log(
      colors.bold(
        colors.red(
          `Error writing to config file, please run methane init to initialize config file`
        )
      )
    );
    process.exit(1);
  }
};
