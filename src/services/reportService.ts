import api from "./serviceInterceptor";

const baseUrl = import.meta.env.VITE_API_BASE_URL
// Define an empty object


export const generateReport = (data) => {
    return api.post('/drugs', data);
};