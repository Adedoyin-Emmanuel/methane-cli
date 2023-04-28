const fs = require("fs");
const path = require("path");
const filePath = path.join(process.cwd(), "config", "methaneCliConfig.json");
const colors = require("colors");

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
