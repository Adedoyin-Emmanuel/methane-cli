import fs from "fs";

const getFileStats = (filePath) => {
  const stats = fs.statSync(filePath);
  const sizeInBytes = stats.size;

  return sizeInBytes;
};

export default getFileStats;
