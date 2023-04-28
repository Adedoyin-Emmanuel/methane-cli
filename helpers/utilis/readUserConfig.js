const fs = require("fs");
const filePath = "./config/userConfig.json";
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
    readConfig
}
