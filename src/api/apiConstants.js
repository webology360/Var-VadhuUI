export const apiContants = {
   BASE_URL_1: "https://varvadhuservices.onrender.com/api/",
  //BASE_URL_1: "http://localhost:5000/api/",
  ADMIN: {
    LOGIN: "admin/login",
    SIGNUP: "admin/signup",
    CHANGE_PASSWORD: "admin/changePassword",
    FORGOT_PASSWORD: (adminId) => `admin/forgotPassword/${adminId}`,
    RESET_PASSWORD: (adminId) => `admin/resetPassword/${adminId}`,
    GET_PROFILE: "admin/profile",
    GET_USERS_LIST: (type, value) => `user/list/${type}?value=${value}`,
    ADD_USER: "user/add",
    UPLOAD_IMAGES: (userId) => `user/upload/images/${userId}`,
    UPLOAD_BIODATA: (userId) => `user/upload/bioData/${userId}`,
    UPDATE_USER: (userId) => `user/update/${userId}`,
    DELETE_USER: (userId) => `user/delete/${userId}`,
    TOGGLE_USER_STATUS: (userId) => `user/toggleStatus/${userId}`,
    GET_TOP_PROFILES_LIST: (type) => `user/topProfiles/${type}`,
    ADD_ADMIN: "admin/signup",
    UPDATE_ADMIN: (adminId) => `admin/updateAdmin/${adminId}`,
  },
  USER: {
    GET_SEARCH_USERS_LIST: (
      type,
      ageFrom,
      ageTo,
      state,
      location,
      motherTounge
    ) =>
      `user/list/${type}?ageFrom=${ageFrom}&ageTo=${ageTo}&state=${state}&location=${location}&motherTounge=${motherTounge}`,
    GET_USER_BY_ID: (userId, updateCount = "") =>
      `user/getUser/${userId}${
        updateCount ? "?updateCount=" + updateCount : ""
      }`,
  },
};
