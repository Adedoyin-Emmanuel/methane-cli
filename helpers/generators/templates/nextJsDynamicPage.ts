const generateNextJsDynamicPageTsxArrowTemplate = (
  dynamicPageId: any,
  importStyleSheet: string,
  componentName: string,
  styleSheetType: string,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" ? '"use client"' : "";
  let addStyleSheetImport =
    importStyleSheet === "true"
      ? `import "./${componentName}Style.${styleSheetType}";`
      : "";
  let addRouterImport =
    componentType === "client"
      ? 'import { useRouter } from "next/navigation";'
      : "";

  let dynamicPageIdDisplay = `\{params.${dynamicPageId}}`;

  template = `
${componentTypeTemplate}

import React from "react";
${addStyleSheetImport}
${addRouterImport}

const ${componentName} = ({ params }: { params: { ${dynamicPageId}: string } }) => {

    return (
        <div>
            <h1>${componentName} works!</h1>
            <p>${dynamicPageIdDisplay}</p>
        </div>
    );  
}

export default ${componentName};
    `;
  return template;
};

const generateNextJsDynamicPageTsxFunctionTemplate = (
  dynamicPageId: any,
  importStyleSheet: string,
  componentName: string,
  styleSheetType: string,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" ? '"use client"' : "";
  let addStyleSheetImport =
    importStyleSheet === "true"
      ? `import "./${componentName}Style.${styleSheetType}";`
      : "";
  let addRouterImport =
    componentType === "client"
      ? 'import { useRouter } from "next/navigation";'
      : "";

  let dynamicPageIdDisplay = `\{params.${dynamicPageId}}`;

  template = `
${componentTypeTemplate}

import React from "react";
${addStyleSheetImport}
${addRouterImport}

function ${componentName} ({ params }: { params: { ${dynamicPageId}: string } }){

    return (
        <div>
            <h1>${componentName} works!</h1>
            <p>${dynamicPageIdDisplay}</p>
        </div>
    );  
}

export default ${componentName};
    `;

  return template;
};

const generateNextJsDynamicPageJsxArrowTemplate = (
  dynamicPageId: any,
  importStyleSheet: string,
  componentName: string,
  styleSheetType: string,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" ? '"use client"' : "";
  let addStyleSheetImport =
    importStyleSheet === "true"
      ? `import "./${componentName}Style.${styleSheetType}";`
      : "";
  let addRouterImport =
    componentType === "client"
      ? 'import { useRouter } from "next/navigation";'
      : "";
  let dynamicPageIdDisplay = `\{params.${dynamicPageId}}`;

  template = `
${componentTypeTemplate}

import React from "react";
${addStyleSheetImport}
${addRouterImport}

const ${componentName} = ({ params }) => {

    return (
        <div>
            <h1>${componentName} works!</h1>
            <p>${dynamicPageIdDisplay}</p>
        </div>
    );  
}

export default ${componentName};
  `;

  return template;
};

const generateNextJsDynamicPageJsxFunctionTemplate = (
  dynamicPageId: any,
  importStyleSheet: string,
  componentName: string,
  styleSheetType: string,
  componentType: string
) => {
  let template: string;
  let componentTypeTemplate = componentType === "client" ? '"use client"' : "";
  let addStyleSheetImport =
    importStyleSheet === "true"
      ? `import "./${componentName}Style.${styleSheetType}";`
      : "";
  let addRouterImport =
    componentType === "client"
      ? 'import { useRouter } from "next/navigation";'
      : "";

  let dynamicPageIdDisplay = `\{params.${dynamicPageId}}`;

  template = `
${componentTypeTemplate}

import React from "react";
${addStyleSheetImport}
${addRouterImport}

function ${componentName} ({ params }) {

    return (
        <div>
            <h1>${componentName} works!</h1>
            <p>${dynamicPageIdDisplay}</p>
        </div>
    );  
}

export default ${componentName};
  `;

  return template;
};

export {
  generateNextJsDynamicPageJsxArrowTemplate,
  generateNextJsDynamicPageJsxFunctionTemplate,
  generateNextJsDynamicPageTsxArrowTemplate,
  generateNextJsDynamicPageTsxFunctionTemplate,
};
