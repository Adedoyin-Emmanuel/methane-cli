const generateJsxArrowTemplate = (componentName) => {
  const template = `
    import React from "react";
    import { Link, useNavigate } from "react-router-dom";
    
    const ${componentName} = () => {
        const navigateTo = useNavigate();
        
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

const generateJsxFunctionTemplate = (componentName) => {
  const template = `
    import React from "react";
    import { Link, useNavigate } from "react-router-dom";
    
    
    function ${componentName} () {
        const navigateTo = useNavigate();
        
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

const generateTsxArrowTemplate = (componentName) => {
  const template = `
    import React from "react";
    import { Link, useNavigate } from "react-router-dom";
    
    interface ${componentName}Props {
        
    }
    const ${componentName}:React.FC = ():JSX.Element => {
        const navigateTo = useNavigate();
        
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
    import { Link, useNavigate } from "react-router-dom";
    
    interface ${componentName}Props {
        
    }
    function ${componentName}():JSX.Element => {
        const navigateTo = useNavigate();
        
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
  generateTsxFunctionTemplate,
};
