const fs = require("fs");
const colors = require("colors");

const generateComponent = (extension, name) =>{
    if(!extension || !name)
    {
        return console.log(colors.bold(colors.red("Component extension or name is required!")));
    }
    
}


module.exports = {
    generateComponent
}
