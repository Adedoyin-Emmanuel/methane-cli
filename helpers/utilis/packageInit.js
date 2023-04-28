const methaneCli = require("./initHelperFunction");
const {program} = require("commander");


const InitMethaneCLI = () =>{

    program
      .command("init")
      .alias("i")
      .description("Create default configuration files")
      .action(()=>{
        methaneCli.initMethaneCLI();
      })
}


module.exports = {
    InitMethaneCLI
}
