const generateNextJsJsxArrowTemplate = (componentName, importStyleSheet, styleSheetType, componentType) => {
    let template;
    let componentTypeTemplate = componentType === "client" ? '"use client"' : "";
    let addRouterImport = componentType === "client"
        ? 'import { useRouter, usePathname } from "next/navigation";'
        : "";
    let pathnameDeclaration = componentType === "client" ? "const pathname = usePathname();" : "";
    let pathnameDisplay = componentType === "client" ? "<p>Current pathname: {pathname}</p>" : "";
    if (importStyleSheet === "true") {
        template = `
${componentTypeTemplate}

import React from "react";
import "./${componentName}Style.${styleSheetType}";
${addRouterImport}

const ${componentName} = () => {
    ${pathnameDeclaration}

    return (
        <div>
            <h1>${componentName} works!</h1>
            ${pathnameDisplay}
        </div>
    );  
}

export default ${componentName};
    `;
    }
    else {
        template = `
${componentTypeTemplate}
import React from "react";
${addRouterImport}


const ${componentName} = () => {
    ${pathnameDeclaration}

    return (
        <div>
            <h1>${componentName} works!</h1>
            ${pathnameDisplay}
        </div>
    );  
}

export default ${componentName};
    `;
    }
    return template;
};
const generateNextJsJsxFunctionTemplate = (componentName, importStyleSheet, styleSheetType, componentType) => {
    let template;
    let componentTypeTemplate = componentType === "client" ? '"use client"' : "";
    let addRouterImport = componentType === "client"
        ? 'import { useRouter, usePathname } from "next/navigation";'
        : "";
    let pathnameDeclaration = componentType === "client" ? "const pathname = usePathname();" : "";
    let pathnameDisplay = componentType === "client" ? "<p>Current pathname: {pathname}</p>" : "";
    if (importStyleSheet === "true") {
        template = `
${componentTypeTemplate}

import React from "react";
import "./${componentName}Style.${styleSheetType}";
${addRouterImport}

function ${componentName} (){
    ${pathnameDeclaration}

    return (
        <div>
            <h1>${componentName} works!</h1>
            ${pathnameDisplay}
        </div>
    );  
}

export default ${componentName};
    `;
    }
    else {
        template = `
${componentTypeTemplate}
import React from "react";
${addRouterImport}


function ${componentName} (){
    ${pathnameDeclaration}

    return (
        <div>
            <h1>${componentName} works!</h1>
            ${pathnameDisplay}
        </div>
    );  
}
export default ${componentName};
    `;
    }
    return template;
};
const generateNextJsTsxArrowTemplate = (componentName, importStyleSheet, styleSheetType, componentType) => {
    let template;
    let componentTypeTemplate = componentType === "client" ? '"use client"' : "";
    let addRouterImport = componentType === "client"
        ? 'import { useRouter, usePathname } from "next/navigation";'
        : "";
    let pathnameDeclaration = componentType === "client" ? "const pathname = usePathname();" : "";
    let pathnameDisplay = componentType === "client" ? "<p>Current pathname: {pathname}</p>" : "";
    if (importStyleSheet === "true") {
        template = `
${componentTypeTemplate}

import React from "react";
import "./${componentName}Style.${styleSheetType}";
${addRouterImport}


const ${componentName} = () => {
    ${pathnameDeclaration}

    return (
        <div>
            <h1>${componentName} works!</h1>
            ${pathnameDisplay}
        </div>
    );  
}

export default ${componentName};
    `;
    }
    else {
        template = `
${componentTypeTemplate}
import React from "react";
${addRouterImport}


const ${componentName} = () => {
    ${pathnameDeclaration}

    return (
        <div>
            <h1>${componentName} works!</h1>
            ${pathnameDisplay}
        </div>
    );  
}

export default ${componentName};
    `;
    }
    return template;
};
const generateNextJsTsxFunctionTemplate = (componentName, importStyleSheet, styleSheetType, componentType) => {
    let template;
    let componentTypeTemplate = componentType === "client" ? '"use client"' : "";
    let addRouterImport = componentType === "client"
        ? 'import { useRouter, usePathname } from "next/navigation";'
        : "";
    let pathnameDeclaration = componentType === "client" ? "const pathname = usePathname();" : "";
    let pathnameDisplay = componentType === "client" ? "<p>Current pathname: {pathname}</p>" : "";
    if (importStyleSheet === "true") {
        template = `
${componentTypeTemplate}

import React from "react";
import "./${componentName}Style.${styleSheetType}";
${addRouterImport}


function ${componentName}() {
   ${pathnameDeclaration}

    return (
        <div>
            <h1>${componentName} works!</h1>
            ${pathnameDisplay}
        </div>
    );  
}

export default ${componentName};
    `;
    }
    else {
        template = `
${componentTypeTemplate}
import React from "react";
${addRouterImport}


function ${componentName}() {
  ${pathnameDeclaration}

    return (
        <div>
            <h1>${componentName} works!</h1>
            ${pathnameDisplay}
        </div>
    );  
}

export default ${componentName};
    `;
    }
    return template;
};
export { generateNextJsJsxArrowTemplate, generateNextJsJsxFunctionTemplate, generateNextJsTsxArrowTemplate, generateNextJsTsxFunctionTemplate, };
