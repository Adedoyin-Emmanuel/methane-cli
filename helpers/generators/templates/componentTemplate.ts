const generateJsxArrowTemplate = (
  componentName: string,
  importStyleSheet:any,
  styleSheetType:any
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import React from "react";
import "./${componentName}Style.${styleSheetType}";

const ${componentName} = () => {

    return (
        <div>
            <h1>${componentName} works!</h1>
        </div>
    );  
}

export default ${componentName};
    `;
  } else {
    template = `
import React from "react";

const ${componentName} = () => {

    return (
        <div>
            <h1>${componentName} works!</h1>
        </div>
    );  
}

export default ${componentName};
    `;
  }

  return template;
};

const generateJsxFunctionTemplate = (
  componentName: string,
  importStyleSheet:any,
  styleSheetType: any
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
    import React from "react";
    import "./${componentName}Style.${styleSheetType}";
    
    function ${componentName} () {
    
        return (
            <div>
                <h1>${componentName} works!</h1>
            </div>
        );  
    }
    
    export default ${componentName};
        `;
  } else {
    template = `
    import React from "react";
    
    function ${componentName} () {
    
        return (
            <div>
                <h1>${componentName} works!</h1>
            </div>
        );  
    }
    
    export default ${componentName};
        `;
  }
  return template;
};

const generateTsxArrowTemplate = (
  componentName:string,
  importStyleSheet:any,
  styleSheetType: any
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import React from "react";
import "./${componentName}Style.${styleSheetType}";

interface ${componentName}Props {
    
}
const ${componentName} = (): JSX.Element => {

    return (
        <div>
            <h1>${componentName} works!</h1>
        </div>
    );  
}

export default ${componentName};
    `;
  } else {
    template = `
import React from "react";

interface ${componentName}Props {
    
}

const ${componentName} = (): JSX.Element => {

    return (
        <div>
            <h1>${componentName} works!</h1>
        </div>
    );  
}

export default ${componentName};
    `;
  }
  return template;
};

const generateTsxFunctionTemplate = (
  componentName:string,
  importStyleSheet:any,
  styleSheetType:any
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import React from "react";
import "./${componentName}Style.${styleSheetType}";


interface ${componentName}Props {
    
}

function ${componentName}(): JSX.Element {

    return (
        <div>
            <h1>${componentName} works!</h1>
        </div>
    );  
}

export default ${componentName};
    `;
  } else {
    template = `
import React from "react";


interface ${componentName}Props {
    
}

function ${componentName}(): JSX.Element {

    return (
        <div>
            <h1>${componentName} works!</h1>
        </div>
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
