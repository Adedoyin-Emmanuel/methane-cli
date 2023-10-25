import colors from "colors";
import fs from "fs";
import { getUserConfigFilePath } from "./getUserConfigFilePath.js";
const filePath = getUserConfigFilePath();
export const writeConfig = (config) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
        console.log(colors.green("Configurations saved successfully!"));
    }
    catch (error) {
        console.log(colors.grey("Error Writing config"), colors.red(error.message));
    }
};
