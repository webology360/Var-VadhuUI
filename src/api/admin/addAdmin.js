import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const addAdmin = (data) => {
  return apiRequestType(apiTypes.POST, apiContants.ADMIN.ADD_ADMIN, data);
};

export default addAdmin;
