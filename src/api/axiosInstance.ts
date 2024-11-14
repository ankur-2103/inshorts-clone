import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Get the base URL from .env
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": import.meta.env.VITE_API_KEY, // Get the API key from .env
  },
});

// Optional: Add interceptors if needed (e.g., for adding auth tokens or handling errors)
// axiosInstance.interceptors.request.use(config => {
//   // Modify config here, e.g., add authorization token
//   return config;
// });

export default axiosInstance;
