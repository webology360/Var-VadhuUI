import { setToken } from "./adminSlice";

export const setTokenHandler = (token) => (dispatch) => {
  localStorage.setItem("token", token);
  dispatch(setToken(token));
  return token;
};

export const getTokenHandler = () => (dispatch, getState) => {
  const state = getState();
  const localStoredToken = localStorage.getItem("token");
  if (!state?.admin?.token && localStoredToken) {
    dispatch(setToken(localStoredToken));
  }
  return localStoredToken || state?.admin?.token;
};
