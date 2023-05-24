import { apiTypes } from "./apiTypes";
import axiosInstance from "./axios";

const apiRequestType = async (
  type,
  apiURL,
  payload,
  cancelToken,
  customConfig
) => {
  try {
    let config;
    if (customConfig) {
      config = { ...customConfig };
    } else {
      config = {
        headers: {
          token: localStorage.getItem("token"),
        },
        cancelToken: cancelToken?.token,
      };
    }
    if (type === apiTypes.GET) {
      return await axiosInstance
        .get(apiURL, config)
        .then((response) => {
          return Promise.resolve(response);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    } else if (type === apiTypes.POST) {
      return await axiosInstance
        .post(apiURL, payload, config)
        .then((response) => {
          return Promise.resolve(response);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    } else if (type === apiTypes.PUT) {
      return await axiosInstance
        .put(apiURL, payload, config)
        .then((response) => {
          return Promise.resolve(response);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    } else if (type === apiTypes.DELETE) {
      return await axiosInstance
        .delete(apiURL, config)
        .then((response) => {
          return Promise.resolve(response);
        })
        .catch((err) => {
          return Promise.reject(err);
        });
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default apiRequestType;
