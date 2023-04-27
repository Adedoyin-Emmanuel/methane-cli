const generateJsxArrowTemplate = (componentName) =>
{
    const template = `
import React from "react";


const ${componentName} = () => {

    return (
        <React.Fragment>
            <h1>${componentName} works!</h1>
        </React.Fragment>
    );  
}

export default ${componentName};
    `;
    return template;
}


const generateJsxFunctionTemplate = (componentName) =>
{
    const template = `
import React from "react";


function ${componentName} () {

    return (
        <React.Fragment>
            <h1>${componentName} works!</h1>
        </React.Fragment>
    );  
}

export default ${componentName};
    `;
    return template;
}


const generateTsxArrowTemplate = (componentName) => {
  const template = `
import React from "react";

interface ${componentName}Props {
    
}
const ${componentName}:React.FC = ():JSX.Element => {

    return (
        <React.Fragment>
            <h1>${componentName} works!</h1>
        </React.Fragment>
    );  
}

export default ${componentName};
    `;
  return template;
  
};

const generateTsxFunctionTemplate = (componentName) => {
  const template = `
import React from "react";

interface ${componentName}Props {
    
}
function ${componentName}():JSX.Element => {

    return (
        <React.Fragment>
            <h1>${componentName} works!</h1>
        </React.Fragment>
    );  
}

export default ${componentName};
    `;
    
  return template;
};


module.exports = {

    generateJsxArrowTemplate,
    generateJsxFunctionTemplate,
    generateTsxArrowTemplate,
    generateTsxFunctionTemplate
}

