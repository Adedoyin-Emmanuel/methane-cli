const {
  serviceWorkerTemplate,
  serviceWorkerRegistrationTemplate,
} = require("./../templates/serviceWorker");

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
