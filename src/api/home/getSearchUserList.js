import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";

const getSearchUserList = (
  type,
  ageFrom,
  ageTo,
  state,
  location,
  motherTounge
) => {
  return apiRequestType(
    apiTypes.GET,
    apiContants.USER.GET_SEARCH_USERS_LIST(
      type,
      ageFrom,
      ageTo,
      state,
      location,
      motherTounge
    )
  );
};

export default getSearchUserList;
