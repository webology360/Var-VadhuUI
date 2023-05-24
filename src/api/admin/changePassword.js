import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const changePassword = (data) => {
  return apiRequestType(apiTypes.PUT, apiContants.ADMIN.CHANGE_PASSWORD, data);
};

export default changePassword;
