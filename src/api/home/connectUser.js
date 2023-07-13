import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const connectUser = (userId, data) => {
  return apiRequestType(
    apiTypes.POST,
    apiContants.USER.CONNECT_USER(userId),
    data
  );
};

export default connectUser;
