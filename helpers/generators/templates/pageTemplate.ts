const generateJsxArrowTemplate = (
  componentName,
  importStyleSheet,
  styleSheetType
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import React from "react";
import "./${componentName}Style.${styleSheetType}";
import {Link, useNavigate} from "react-router-dom";

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
  } else {
    template = `
import React from "react";
import {Link, useNavigate} from "react-router-dom";

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
  }

  return template;
};

const generateJsxFunctionTemplate = (
  componentName,
  importStyleSheet,
  styleSheetType
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
    import React from "react";
    import "./${componentName}Style.${styleSheetType}";
    import {Link, useNavigate} from "react-router-dom";

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
  } else {
    template = `
    import React from "react";
    import {Link, useNavigate} from "react-router-dom";

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
  }
  return template;
};

const generateTsxArrowTemplate = (
  componentName,
  importStyleSheet,
  styleSheetType
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import React from "react";
import "./${componentName}Style.${styleSheetType}";
import {Link, useNavigate} from "react-router-dom";

interface ${componentName}Props {
    
}
const ${componentName}:React.FC = (): JSX.Element => {
    const navigateTo = useNavigate();
    return (
        <React.Fragment>
            <h1>${componentName} works!</h1>
        </React.Fragment>
    );  
}

export default ${componentName};
    `;
  } else {
    template = `
import React from "react";
import {Link, useNavigate} from "react-router-dom";

interface ${componentName}Props {
    
}

const ${componentName}:React.FC = (): JSX.Element => {
    const navigateTo = useNavigate();
    return (
        <React.Fragment>
            <h1>${componentName} works!</h1>
        </React.Fragment>
    );  
}

export default ${componentName};
    `;
  }
  return template;
};

const generateTsxFunctionTemplate = (
  componentName,
  importStyleSheet,
  styleSheetType
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import React from "react";
import "./${componentName}Style.${styleSheetType}";
import {Link, useNavigate} from "react-router-dom";


interface ${componentName}Props {
    
}

function ${componentName}(): JSX.Element {
    const navigateTo = useNavigate();
    
    return (
        <React.Fragment>
            <h1>${componentName} works!</h1>
        </React.Fragment>
    );  
}

export default ${componentName};
    `;
  } else {
    template = `
import React from "react";
import {Link, useNavigate} from "react-router-dom";


interface ${componentName}Props {
    
}

function ${componentName}(): JSX.Element {
    const navigateTo = useNavigate();
    
    return (
        <React.Fragment>
            <h1>${componentName} works!</h1>
        </React.Fragment>
    );  
}

export default ${componentName};
    `;
  }

  return template;
};

export {
  generateJsxArrowTemplate,
  generateJsxFunctionTemplate,
  generateTsxArrowTemplate,
  generateTsxFunctionTemplate,
};
