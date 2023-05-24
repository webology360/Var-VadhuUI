import { createAction, createSlice } from "@reduxjs/toolkit";

export const resetState = createAction("RESET_STATE");

const initialState = {
  profiles: [],
  profilesCount: 0,
  selectedLanguage: "en",
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    toggleLanguage(state) {
      state.selectedLanguage = state.selectedLanguage === "en" ? "hi" : "en";
    },
    setProfiles(state, action) {
      const profiles = action.payload;
      const profilesCount = action.payload?.length || 0;
      state.profiles = profiles;
      state.profilesCount = profilesCount;
    },
  },
  extraReducers: (build) => build.addCase(resetState, () => initialState),
});

export const { toggleLanguage, setProfiles } = homeSlice.actions;

export default homeSlice.reducer;
