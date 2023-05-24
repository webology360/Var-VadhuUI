import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const getTopProfilesList = (type) => {
  return apiRequestType(
    apiTypes.GET,
    apiContants.ADMIN.GET_TOP_PROFILES_LIST(type)
  );
};

export default getTopProfilesList;
