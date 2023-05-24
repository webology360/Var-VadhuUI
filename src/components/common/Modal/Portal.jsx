import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
  let element = document.createElement("div");
  const modalRoot = document.getElementById("modal-root");

  useEffect(() => {
    modalRoot.appendChild(element);
    return () => {
      modalRoot.removeChild(element);
    };
  }, [modalRoot, element]);

  return createPortal(children, element);
};

export default Portal;
