import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import homeSlice from "../features/Home/homeSlice";
import adminSlice from "../features/Admin/adminSlice";

export default configureStore({
  reducer: {
    home: homeSlice,
    admin: adminSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
});
