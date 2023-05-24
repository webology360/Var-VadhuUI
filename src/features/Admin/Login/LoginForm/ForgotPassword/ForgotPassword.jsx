import React, { useState } from "react";
import Input from "../../../../../components/common/Input/Input";
import forgotPassword from "../../../../../api/admin/forgotPassword";
import Button from "../../../../../components/common/Button/Button";
import classes from "./ForgotPassword.module.scss";

const ForgotPassword = ({ handleForgotPasswordModal, reset }) => {
  const [forgotPasswordUserId, setForgotPasswordUserId] = useState("");

  const handleSetForgotPassword = (e) => {
    const value = e.target.value.trim() !== "" && e.target.value;
    if (value) {
      setForgotPasswordUserId(value);
    } else {
      setForgotPasswordUserId("");
    }
  };

  const forgotPasswordField = {
    key: 1,
    placeholder: "Enter Your Registered User Id or Mobile Number",
    name: "forgotPassword",
    isLight: false,
    height: 4.4,
    width: 100,
    widthType: "%",
    onChange: (e) => handleSetForgotPassword(e),
    gap: 0,
    value: forgotPasswordUserId,
  };

  const handleForgotPassword = () => {
    forgotPassword(forgotPasswordUserId)
      .then((response) => {
        console.log(response);
        reset();
        handleForgotPasswordModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.forgotPassword}>
      <Input fieldProps={forgotPasswordField} />
      <div className={classes.forgotPassword__footer}>
        <div
          className={classes.forgotPassword__footer__cancel}
          onClick={handleForgotPasswordModal}
        >
          Cancel
        </div>
        <Button
          type="button"
          label="Submit"
          onClick={handleForgotPassword}
          small
        />
      </div>
    </div>
  );
};

export default ForgotPassword;
