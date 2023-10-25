const generateJsxArrowTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import "./${componentName}Style.${styleSheetType}";

const ${componentName} = () => {

    return (
        <>
            <h1>${componentName} works!</h1>
        </>
    );  
}

export default ${componentName};
    `;
  } else {
    template = `

const ${componentName} = () => {

    return (
        <>
            <h1>${componentName} works!</h1>
        </>
    );  
}

export default ${componentName};
    `;
  }

  return template;
};

const generateJsxFunctionTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
    import "./${componentName}Style.${styleSheetType}";
    
    function ${componentName} () {
    
        return (
            <>
                <h1>${componentName} works!</h1>
            </>
        );  
    }
    
    export default ${componentName};
        `;
  } else {
    template = `
    
    function ${componentName} () {
    
        return (
            <>
                <h1>${componentName} works!</h1>
            </>
        );  
    }
    
    export default ${componentName};
        `;
  }
  return template;
};

const generateTsxArrowTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import "./${componentName}Style.${styleSheetType}";

interface ${componentName}Props {
    
}

const ${componentName} = ()=> {

    return (
        <>
            <h1>${componentName} works!</h1>
        </>
    );  
}

export default ${componentName};
    `;
  } else {
    template = `

interface ${componentName}Props {
    
}

const ${componentName} = ()=> {

    return (
        <>
            <h1>${componentName} works!</h1>
        </>
    );  
}

export default ${componentName};
    `;
  }
  return template;
};

const generateTsxFunctionTemplate = (
  componentName: string,
  importStyleSheet: any,
  styleSheetType: any
) => {
  let template;
  if (importStyleSheet === "true") {
    template = `
import "./${componentName}Style.${styleSheetType}";


interface ${componentName}Props {
    
}

function ${componentName}(){

    return (
        <>
            <h1>${componentName} works!</h1>
        </>
    );  
}

export default ${componentName};
    `;
  } else {
    template = `


interface ${componentName}Props {
    
}

function ${componentName}() {

    return (
        <>
            <h1>${componentName} works!</h1>
        </>
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
