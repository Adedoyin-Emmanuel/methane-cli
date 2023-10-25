const generateNextJsJsxArrowTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" && "use client";
  if (importStyleSheet === "true") {
    template = `
${componentTypeTemplate}
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
${componentTypeTemplate}
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

const generateNextJsJsxFunctionTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" && "use client";
  if (importStyleSheet === "true") {
    template = `
${componentTypeTemplate}
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
${componentTypeTemplate}
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

const generateNextJsTsxArrowTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" && "use client";
  if (importStyleSheet === "true") {
    template = `
${componentTypeTemplate}
import React from "react";
import "./${componentName}Style.${styleSheetType}";

interface ${componentName}Props {
    
}

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
${componentTypeTemplate}
import React from "react";

interface ${componentName}Props {
    
}

const ${componentName} = ()=> {

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

const generateNextJsTsxFunctionTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" && "use client";
  if (importStyleSheet === "true") {
    template = `
${componentTypeTemplate}
import React from "react";
import "./${componentName}Style.${styleSheetType}";

interface ${componentName}Props {
    
}

function ${componentName} (){

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
${componentTypeTemplate}
import React from "react";

interface ${componentName}Props {
    
}

function ${componentName} (){

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
  generateNextJsJsxArrowTemplate,
  generateNextJsJsxFunctionTemplate,
  generateNextJsTsxArrowTemplate,
  generateNextJsTsxFunctionTemplate,
};
