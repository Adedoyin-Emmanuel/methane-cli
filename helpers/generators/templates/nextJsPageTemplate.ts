const generateNextJsJsxArrowTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" && "use client";
  let addRouterImport =
    componentType === "client" &&
    'import { useRouter } from "next/navigation";';
  if (importStyleSheet === "true") {
    template = `
${componentTypeTemplate}

import React from "react";
import "./${componentName}Style.${styleSheetType}";
${addRouterImport}

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
${addRouterImport}


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
  let addRouterImport =
    componentType === "client" &&
    'import { useRouter } from "next/navigation";';
  if (importStyleSheet === "true") {
    template = `
${componentTypeTemplate}

import React from "react";
import "./${componentName}Style.${styleSheetType}";
${addRouterImport}

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
${addRouterImport}


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

const generateNextJsTsxArrowTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" && "use client";
  let addRouterImport =
    componentType === "client" &&
    'import { useRouter } from "next/navigation";';
  if (importStyleSheet === "true") {
    template = `
${componentTypeTemplate}

import React from "react";
import "./${componentName}Style.${styleSheetType}";
${addRouterImport}


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
${addRouterImport}


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
  let addRouterImport =
    componentType === "client" &&
    'import { useRouter } from "next/navigation";';
  if (importStyleSheet === "true") {
    template = `
${componentTypeTemplate}

import React from "react";
import "./${componentName}Style.${styleSheetType}";
${addRouterImport}


interface ${componentName}Props {
    
}

function ${componentName}() {

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
${addRouterImport}


interface ${componentName}Props {
    
}

function ${componentName}() {

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
