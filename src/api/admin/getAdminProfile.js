import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const getAdminProfile = () => {
  return apiRequestType(apiTypes.GET, apiContants.ADMIN.GET_PROFILE);
};

export default getAdminProfile;
