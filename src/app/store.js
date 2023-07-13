import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import homeSlice from "../features/Home/homeSlice";
import adminSlice from "../features/Admin/adminSlice";
import commonSlice from "../features/Common/commonSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
    admin: adminSlice,
    common: commonSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});
