import { apiContants } from "../apiConstants";
import apiRequestType from "../apiRequestType";
import { apiTypes } from "../apiTypes";
import { axiosCancelToken } from "../axiosCancelToken";

let cancelToken;
const getSearchUsersList = (type, value) => {
  cancelToken = axiosCancelToken(cancelToken);
  return apiRequestType(
    apiTypes.POST,
    apiContants.ADMIN.GET_USERS_LIST(type, value),
    "",
    cancelToken
  );
};

export default getSearchUsersList;
