const {
  serviceWorkerTemplate,
  serviceWorkerRegistrationTemplate,
} = require("./../templates/serviceWorkerTemplate");

const resolveServiceWorkerTemplate= () => {
  return serviceWorkerTemplate();
};


const resolveServiceWorkerRegistrationTemplate = () =>
{
    return serviceWorkerRegistrationTemplate();
}


module.exports = {
    resolveServiceWorkerTemplate,
    resolveServiceWorkerRegistrationTemplate,
}
