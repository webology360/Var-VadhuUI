import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const resetPassword = (userId, data) => {
  return apiRequestType(
    apiTypes.PUT,
    apiContants.ADMIN.RESET_PASSWORD(userId),
    data
  );
};

export default resetPassword;
