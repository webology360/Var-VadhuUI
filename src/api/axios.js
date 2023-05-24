import axios from "axios";
import { apiContants } from "./apiConstants";

const axiosInstance = axios.create({
  baseURL: apiContants.BASE_URL_1,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 403) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
