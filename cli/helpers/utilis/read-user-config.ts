import fs from "fs";
import colors from "colors";

import { getUserConfigFilePath } from "./get-user-config-file-path.js";

const filePath = getUserConfigFilePath();

export const readConfig = () => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data.toString());
  } catch (error: any) {
    console.log(
      colors.bold(
        colors.red(
          `Error reading config file, please run methane init to initialize config file`
        )
      )
    );
    process.exit(1);
  }
};
