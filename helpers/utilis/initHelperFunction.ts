import colors from "colors";
import path from "path";
import fs from "fs";

export const initMethaneCLI = () =>{
  const configFolderPath = path.join(process.cwd(), "config");
  const userConfigFilePath = path.join(configFolderPath, "userConfig.json");

  if (!fs.existsSync(configFolderPath)) {
    fs.mkdirSync(configFolderPath);
  }

  const defaultConfig = {
    template: "jsx",
    component: "arrow",
    page: "arrow",
    generateStylesheet: "true",
    generateFolder: "true",
    register: "true",
    stylesheetType: "css",
  };

  if (!fs.existsSync(userConfigFilePath)) {
    fs.writeFileSync(
      userConfigFilePath,
      JSON.stringify(defaultConfig, null, 2)
    );
  }

  console.log(colors.green(colors.bold("Methane CLI has been initialized successfully!")));
}


