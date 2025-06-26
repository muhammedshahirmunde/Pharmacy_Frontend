import axios from "axios";
import type {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig
} from "axios";

console.log('THE ENV is ', import.meta.env);


// Create an Axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
});

// Request Interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const userDataString = localStorage.getItem("user");
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const token = userData?.token;

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('The config is', config);
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;

      if (status === 401) {
        console.warn("Unauthorized! Redirecting to login...");
        window.location.href = "/login";
      } else if (status === 403) {
        console.error("Forbidden: You do not have access.");
      } else if (status >= 500) {
        console.error("Server error. Please try again later.");
      }
    } else if (error.request) {
      console.error("No response received from server.");
    } else {
      console.error("Error setting up request:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
