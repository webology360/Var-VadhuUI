import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const getUserByIdAdmin = (userId) => {
  return apiRequestType(apiTypes.GET, apiContants.USER.GET_USER_BY_ID(userId));
};

export default getUserByIdAdmin;
