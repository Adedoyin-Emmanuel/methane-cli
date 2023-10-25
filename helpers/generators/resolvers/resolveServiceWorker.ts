import {
  serviceWorkerRegistrationTemplate,
  serviceWorkerTemplate,
} from "../templates/serviceWorkerTemplate.js";

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
