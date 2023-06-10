import React, { useState } from "react";
import Button from "../../../../components/common/Button/Button";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../../components/common/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import UserIcon from "../../../../assets/icons/Login/UserIcon";
import PasswordIcon from "../../../../assets/icons/Login/PasswordIcon";
import { useNavigate } from "react-router";
import appRoutes from "../../../../utils/appRoutes";
import { useDispatch } from "react-redux";
import classes from "./LoginForm.module.scss";
import login from "../../../../api/admin/login";
import { handleToken } from "../../../../utils/handleToken";
import ForgotPasswordModal from "./ForgotPassword/ForgotPasswordModal";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [forgotPasswordModal, setForgotPasswordModal] = useState(false);

  const fieldList = [
    {
      key: 1,
      label: "User ID",
      placeholder: "Enter Used ID /  Mobile Number",
      name: "userId",
      isLight: false,
      height: 4.4,
      width: 100,
      widthType: "%",
      icon: <UserIcon />,
      // required: true,
    },
    {
      key: 2,
      label: "Password",
      placeholder: "Enter Password",
      name: "password",
      type: "password",
      isLight: false,
      height: 4.4,
      width: 100,
      widthType: "%",
      icon: <PasswordIcon />,
      // required: true,
    },
  ];

  const defaultLoginFormValues = {
    userId: "",
    password: "",
  };

  const loginFormSchema = yup.object().shape({
    userId: yup.string().required("This field is required"),
    password: yup.string().required("This field is required"),
  });

  const methods = useForm({
    resolver: yupResolver(loginFormSchema),
    mode: "onBlur",
    defaultValues: defaultLoginFormValues,
  });

  const {
    handleSubmit,
    formState: {
      errors,
      //  isDirty,
      isValid,
    },
    reset,
    // setValue,
    // getValues,
  } = methods;

  const handleForgotPasswordModal = () => {
    setForgotPasswordModal(!forgotPasswordModal);
  };

  const onSubmit = (values) => {
    console.log(values);
    const { forgotPassword, ...data } = values;
    login(data)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          handleToken(dispatch, response?.data?.token);
          if (response?.data?.resetPassword) {
            navigate(appRoutes.RESET_PASSWORD.DYNAMIC(values.userId));
          } else {
            navigate(appRoutes.ADMIN.DEFAULT);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <FormProvider {...methods}>
      <form className={classes.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.loginForm__header}>Admin Login</div>
        <div className={classes.loginForm__main}>
          <div className={classes.loginForm__main__inputContainer}>
            {fieldList?.map((field) => {
              return (
                <Input
                  fieldProps={{ ...field, error: errors[field?.name]?.message }}
                  key={field.key}
                />
              );
            })}
          </div>
          <div className={classes.loginForm__main__buttonContainer}>
            <div
              className={classes.loginForm__main__buttonContainer__link}
              onClick={handleForgotPasswordModal}
            >
              Forgot Password?
            </div>
            <Button label="Login" type="submit" disabled={!isValid} />
          </div>
        </div>
      </form>
      <ForgotPasswordModal
        forgotPasswordModal={forgotPasswordModal}
        handleForgotPasswordModal={handleForgotPasswordModal}
        reset={reset}
      />
    </FormProvider>
  );
};

export default LoginForm;
