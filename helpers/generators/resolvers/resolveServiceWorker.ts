import {
  serviceWorkerRegistrationTemplate,
  serviceWorkerTemplate,
} from "../templates/serviceWorkerTemplate";

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
