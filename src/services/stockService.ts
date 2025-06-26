import api from "./serviceInterceptor";
// Define an empty object

const basePath = '/stocks'

export const getStocks = () => {
  return api.get(basePath);
};

export const createStock = (data) => {
  return api.post(data);
};




