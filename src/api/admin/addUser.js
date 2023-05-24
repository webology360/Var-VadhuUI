import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const addUser = (data) => {
  return apiRequestType(apiTypes.POST, apiContants.ADMIN.ADD_USER, data);
};

export default addUser;
