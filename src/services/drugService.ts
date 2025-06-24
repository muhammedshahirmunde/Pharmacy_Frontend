import api from "./serviceInterceptor";
// Define an empty object

export const listDrugs = () => {
  return api.get({});
};



