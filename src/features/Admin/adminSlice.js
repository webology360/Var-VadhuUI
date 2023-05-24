import { createAction, createSlice } from "@reduxjs/toolkit";

export const resetState = createAction("RESET_STATE");

const initialState = {
  token: null,
  loading: false,
  profile: null,
};

// export const getToken = createAsyncThunk(
//   "admin/getToken",
//   (_, { getState, dispatch }) => {
//     const state = getState();
//     const localStoredToken = localStorage.getItem("token");
//     if (!state?.admin?.token && localStoredToken) {
//       dispatch(setToken(localStoredToken));
//     }
//     return localStoredToken || state?.admin?.token;
//   }
// );
// export const setToken = createAsyncThunk("admin/setToken", (token) => {
//   localStorage.setItem("token", token);
//   return token;
// });

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setProfile(state, action) {
      const profile = action.payload;
      state.profile = profile;
    },
    setToken(state, action) {
      const token = action.payload;
      state.token = token;
    },
  },
  extraReducers: (build) => {
    build.addCase(resetState, () => initialState);
  },
});

export const { setToken, setProfile } = adminSlice.actions;

export default adminSlice.reducer;
