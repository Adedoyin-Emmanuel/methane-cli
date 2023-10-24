const filePath = path.join(
  __dirname,
  "../../",
  "config",
  "methaneCliConfig.json"
);
import colors from "colors";
import fs from "fs";
import path from "path";

const readConfig = () => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    console.log(
      colors.grey("Error reading config file", colors.red(error.message))
    );
    return {};
  }
};

module.exports = {
  readConfig,
};
