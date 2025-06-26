import api from "./serviceInterceptor";

const path = '/reports'
// Define an empty object


export const generateReport = (data) => {
    return api.post(path, data);
};