import fs from "fs";

const getFileStats = (filePath) => {
  const stats = fs.statSync(filePath);
  const sizeInBytes = stats.size;

  return sizeInBytes;
};

module.exports = {
  getFileStats,
};
