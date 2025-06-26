import api from "./serviceInterceptor";
// Define an empty object

const basePath = '/drugs'

export const listDrugs = () => {
  return api.get(basePath + '/allDrugs');
};



