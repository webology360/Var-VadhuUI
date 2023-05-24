import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const uploadBioData = (userId, data) => {
  return apiRequestType(
    apiTypes.PUT,
    apiContants.ADMIN.UPLOAD_BIODATA(userId),
    data
  );
};

export default uploadBioData;
