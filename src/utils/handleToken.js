import {
  getTokenHandler,
  setTokenHandler,
} from "../features/Admin/adminActionHandler";

export const handleToken = (dispatch, updateToken) => {
  let token = dispatch(getTokenHandler());
  if (updateToken) {
    token = dispatch(setTokenHandler(updateToken));
  }
  return token;
};
