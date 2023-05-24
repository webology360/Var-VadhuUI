import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const updateUser = (userId, data) => {
  return apiRequestType(
    apiTypes.PUT,
    apiContants.ADMIN.UPDATE_USER(userId),
    data
  );
};

export default updateUser;
