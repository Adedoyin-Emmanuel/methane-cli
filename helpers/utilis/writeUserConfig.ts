import colors from "colors";
import fs from "fs";
import { getUserConfigFilePath } from "./getUserConfigFilePath";

const filePath = getUserConfigFilePath();

export const writeConfig = (config: any) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
    console.log(colors.green("Configurations saved successfully!"));
  } catch (error: any) {
    console.log(colors.grey("Error Writing config"), colors.red(error.message));
  }
};
