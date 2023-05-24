import React from "react";
import classes from "./ChangePassword.module.scss";
import ResetPasswordForm from "../../ResetPassword/ResetPasswordForm/ResetPasswordForm";

const ChangePassword = () => {
  return (
    <div className={classes.changePassword}>
      <ResetPasswordForm isChangePassword={true} />
    </div>
  );
};

export default ChangePassword;
