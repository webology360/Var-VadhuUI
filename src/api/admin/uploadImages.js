import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const uploadImages = (userId, data) => {
  return apiRequestType(
    apiTypes.PUT,
    apiContants.ADMIN.UPLOAD_IMAGES(userId),
    data
  );
};

export default uploadImages;
