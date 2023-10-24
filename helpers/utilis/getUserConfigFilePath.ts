import fs from 'fs';
import path from 'path';



export const getUserConfigFilePath = () => {
  const userConfigFolderPath = path.join(process.cwd(), "methane");
  const userConfigFilePath = path.join(userConfigFolderPath, "methane.json");

  if (fs.existsSync(userConfigFilePath)) {
    return userConfigFilePath;
  }

  // Fall back to the global configuration file
  return path.join(__dirname, "../../", "config", "methane.json");
};
