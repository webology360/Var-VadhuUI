import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const getUserById = (userId) => {
  return apiRequestType(
    apiTypes.GET,
    apiContants.USER.GET_USER_BY_ID(userId, true)
  );
};

export default getUserById;
