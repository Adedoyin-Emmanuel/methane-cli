import colors from "colors";
import fs from "fs";
import path from "path";
const filePath = path.join(
  __dirname,
  "../../",
  "config",
  "methaneCliConfig.json"
);

export const writeConfig = (config: any) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
    console.log(colors.green("Configurations saved successfully!"));
  } catch (error:any) {
    console.log(colors.grey("Error Writing config"), colors.red(error.message));
  }
};

