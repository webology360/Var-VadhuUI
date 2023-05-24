import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const login = (data) => {
  return apiRequestType(apiTypes.POST, apiContants.ADMIN.LOGIN, data);
};

export default login;
