import React from "react";
import Modal from "../common/Modal/Modal";
import classes from "./ConnectModal.module.scss";
import ConnectModalForm from "./ConnectModalForm";

const ConnectModal = ({ connectModal, handleConnectModal, userId }) => {
  return (
    <Modal
      isOpen={connectModal}
      height={35}
      width={50}
      heading="Please Enter Below Details"
      toggle={handleConnectModal}
      paddingBody="0rem 3rem"
      //   buttonLabel1="Cancel"
      //   buttonLabel2="Connect"
      //   handleSubmit={handleSubmitConnectModal}
    >
      <ConnectModalForm
        handleConnectModal={handleConnectModal}
        userId={userId}
      />
    </Modal>
  );
};

export default ConnectModal;
