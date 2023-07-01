const fs = require("fs");

const getFileStats = (filePath) =>
{
    const stats = fs.statSync(filePath);
    const sizeInBytes = stats.size;
    
    return sizeInBytes;
}


module.exports = {
    getFileStats
}
