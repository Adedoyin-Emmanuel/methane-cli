import fs from "fs";
import path from "path";

export const getUserConfigFilePath = () => {
  const userConfigFolderPath = path.join(process.cwd(), "methane");
  const userConfigFilePath = path.join(userConfigFolderPath, "methane.json");

  if (fs.existsSync(userConfigFilePath)) {
    return userConfigFilePath;
  }

  const currentModuleUrl = new URL(import.meta.url);

  const currentModulePath = path.dirname(currentModuleUrl.pathname);

  return path.join(currentModulePath, "../../", "config", "methane.json");
};
