import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const updateAdmin = (adminId, data) => {
  return apiRequestType(
    apiTypes.POST,
    apiContants.ADMIN.UPDATE_ADMIN(adminId),
    data
  );
};

export default updateAdmin;
