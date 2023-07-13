import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { unSetMessage } from "../commonSlice";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = () => {
  const dispatch = useDispatch();
  const commonState = useSelector((state) => state.common);

  const { messageType, message, isMessage, closeTimer } = commonState;

  useEffect(() => {
    if (isMessage) {
      toast[messageType](message);
    }
    const timer = setTimeout(() => {
      dispatch(unSetMessage());
    }, closeTimer);
    return () => clearTimeout(timer);
  }, [dispatch, isMessage, messageType, message, closeTimer]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={closeTimer}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover
      draggable
      theme="colored"
      newestOnTop
    />
  );
};

export default ToastMessage;
