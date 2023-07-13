import { createAction, createSlice } from "@reduxjs/toolkit";

export const resetState = createAction("RESET_STATE");

const initialState = {
  messageType: null,
  message: false,
  isMessage: false,
  closeTimer: 3000,
  isLoading: 3000,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setMessage(state, action) {
      const { messageType, message, closeTimer } = action.payload;
      state.messageType = messageType;
      state.message = message;
      state.isMessage = true;
      state.closeTimer = closeTimer ? closeTimer : 3000;
    },
    unSetMessage(state) {
      state.messageType = null;
      state.message = null;
      state.isMessage = false;
      state.closeTimer = 3000;
    },
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(resetState, () => initialState);
  },
});

export const { setMessage, unSetMessage } = commonSlice.actions;

export default commonSlice.reducer;
