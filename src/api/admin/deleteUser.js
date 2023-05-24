import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const deleteUser = (userId) => {
  return apiRequestType(apiTypes.DELETE, apiContants.ADMIN.DELETE_USER(userId));
};

export default deleteUser;
