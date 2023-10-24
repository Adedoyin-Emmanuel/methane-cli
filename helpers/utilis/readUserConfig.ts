import colors from "colors";
import fs from "fs";
import path from "path";

const filePath = path.join(
  __dirname,
  "../../",
  "config",
  "methaneCliConfig.json"
);
export const readConfig = () => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data.toString());
  } catch (error:any) {
    console.log(
      colors.grey(`Error reading config file ${colors.red(error.message)}`)
    );
    return {};
  }
};

