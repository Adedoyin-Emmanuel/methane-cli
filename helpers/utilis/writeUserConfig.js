const fs = require("fs");
const colors = require("colors");
const filePath = "./config/userConfig.json";

const writeConfig = (config) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(config, null, 2));
    console.log(colors.green("Configurations saved successfully!"));
  } catch (error) {
    console.log(colors.grey("Error Writing config"), colors.red(error.message));
  }
};

module.exports = {
  writeConfig,
};
