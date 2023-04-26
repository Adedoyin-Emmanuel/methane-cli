const fs = require("fs");
const filePath = "./../../config/userConfig.json";

const readConfig = () => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading config file", error.message);
    return {};
  }
};

modules.exports = {
    readConfig
}
