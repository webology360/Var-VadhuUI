import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const getSearchUserList = (
  type,
  data
  // ageFrom,
  // ageTo,
  // state,
  // location,
  // motherTounge
) => {
  return apiRequestType(
    apiTypes.POST,
    apiContants.USER.GET_SEARCH_USERS_LIST(
      type
      // ageFrom,
      // ageTo,
      // state,
      // location,
      // motherTounge
    ),
    data
  );
};

export default getSearchUserList;
