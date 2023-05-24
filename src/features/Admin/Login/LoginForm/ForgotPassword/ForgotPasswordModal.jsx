import React from "react";
import Modal from "../../../../../components/common/Modal/Modal";
import ForgotPassword from "./ForgotPassword";

const ForgotPasswordModal = ({
  forgotPasswordModal,
  handleForgotPasswordModal,
  reset,
}) => {
  return (
    <Modal
      isOpen={forgotPasswordModal}
      height={26}
      width={46}
      heading="Forgot Password"
      toggle={handleForgotPasswordModal}
      paddingBody="0rem 3rem"
    >
      <ForgotPassword
        handleForgotPasswordModal={handleForgotPasswordModal}
        reset={reset}
      />
    </Modal>
  );
};

export default ForgotPasswordModal;
