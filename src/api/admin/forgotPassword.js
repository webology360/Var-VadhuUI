import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const forgotPassword = (userId) => {
  return apiRequestType(
    apiTypes.POST,
    apiContants.ADMIN.FORGOT_PASSWORD(userId)
  );
};

export default forgotPassword;
