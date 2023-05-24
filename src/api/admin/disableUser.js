import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const disableUser = (userId) => {
  return apiRequestType(
    apiTypes.PUT,
    apiContants.ADMIN.TOGGLE_USER_STATUS(userId)
  );
};

export default disableUser;
