import api from "./serviceInterceptor";
// Define an empty object


export const listDrugs = () => {
  return api.get('http://10.135.69.124:5000/');
};



