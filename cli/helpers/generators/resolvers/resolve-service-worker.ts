import {
  serviceWorkerTemplate,
  serviceWorkerRegistrationTemplate,
} from "../templates/service-worker-template.js";

const resolveServiceWorkerTemplate = () => {
  return serviceWorkerTemplate();
};

const resolveServiceWorkerRegistrationTemplate = () => {
  return serviceWorkerRegistrationTemplate();
};

export {
  resolveServiceWorkerTemplate,
  resolveServiceWorkerRegistrationTemplate,
};
