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
      heading=""
      toggle={handleConnectModal}
      paddingBody="0rem 3rem"
    //   buttonLabel1="Cancel"
    //   buttonLabel2="Connect"
    //   handleSubmit={handleSubmitConnectModal}
    >
      {/* <ConnectModalForm
        handleConnectModal={handleConnectModal}
        userId={userId}
      /> */}
      <div>
        <div style={{fontFamily:"cursive",fontSize:"2rem"}}>
          <p>
           Send "Hi" on whatsapp 6207406637 OR Call on 6207406637 to get contact information
          </p>
          <br/>
          <p>
           संपर्क जानकारी प्राप्त करने के लिए व्हाट्सएप 6207406637 पर "नमस्ते" भेजें या 6207406637 पर कॉल करें
          </p>
        </div>
       </div>

    </Modal>
  );
};

export default ConnectModal;
