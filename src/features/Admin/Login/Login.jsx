import React from "react";
import classes from "./Login.module.scss";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <div className={classes.login}>
      <LoginForm />
    </div>
  );
};

export default Login;
