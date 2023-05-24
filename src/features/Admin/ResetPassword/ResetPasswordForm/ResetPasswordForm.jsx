import React from "react";
import classes from "./ResetPasswordForm.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import Input from "../../../../components/common/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import PasswordIcon from "../../../../assets/icons/Login/PasswordIcon";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router";
import Button from "../../../../components/common/Button/Button";
import resetPassword from "../../../../api/admin/resetPassword";
import appRoutes from "../../../../utils/appRoutes";
import { handleToken } from "../../../../utils/handleToken";
import { useDispatch } from "react-redux";
import changePassword from "../../../../api/admin/changePassword";

const ResetPasswordForm = ({ isChangePassword = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adminId } = useParams();
  const fieldList = [
    {
      key: 1,
      label: "New Password",
      placeholder: "Enter New Password",
      name: "newPassword",
      type: "password",
      isLight: false,
      height: 4.4,
      width: 100,
      widthType: "%",
      icon: <PasswordIcon />,
    },
    {
      key: 2,
      label: "Confirm Password",
      placeholder: "Enter Confirm Password",
      name: "confirmPassword",
      type: "password",
      isLight: false,
      height: 4.4,
      width: 100,
      widthType: "%",
      icon: <PasswordIcon />,
    },
  ];
  const updatedFieldList = isChangePassword
    ? [
        {
          key: 3,
          label: "Old Password",
          placeholder: "Enter Old Password",
          name: "oldPassword",
          type: "password",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
          icon: <PasswordIcon />,
        },
        ...fieldList,
      ]
    : fieldList;

  const defaultResetPasswordFormValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  const changePasswordFormSchema = yup.object().shape({
    oldPassword: yup.string().required("This field is required"),
    newPassword: yup
      .string()
      .required("This field is required")
      .matches(
        /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,16}$/,
        "Please enter a password at least 8 character and max 18 character and contain At least one uppercase, one lowercase, one special character and one number."
      ),
    confirmPassword: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("newPassword"), null], "Password do not match"),
  });
  const resetPasswordFormSchema = yup.object().shape({
    oldPassword: yup.string(),
    newPassword: yup
      .string()
      .required("This field is required")
      .matches(
        /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,16}$/,
        "Please enter a password at least 8 character and max 18 character and contain At least one uppercase, one lowercase, one special character and one number."
      ),
    confirmPassword: yup
      .string()
      .required("This field is required")
      .oneOf([yup.ref("newPassword"), null], "Password do not match"),
  });

  const methods = useForm({
    resolver: yupResolver(
      isChangePassword ? changePasswordFormSchema : resetPasswordFormSchema
    ),
    mode: "onBlur",
    defaultValues: defaultResetPasswordFormValues,
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

  const onSubmit = (values) => {
    const { confirmPassword, newPassword, oldPassword } = values;
    if (confirmPassword === newPassword) {
      if (isChangePassword) {
        if (oldPassword !== newPassword) {
          changePassword({ oldPassword, newPassword })
            .then((response) => {
              if (response.status === 200) {
                // navigate(appRoutes.ADMIN.DEFAULT);
                reset();
              }
            })
            .catch((err) => console.log(err));
        } else {
        }
      } else {
        resetPassword(adminId, { newPassword })
          .then((response) => {
            if (response.status === 200) {
              handleToken(dispatch, response?.data?.token);
              navigate(appRoutes.ADMIN.DEFAULT);
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const themeClassName = isChangePassword
    ? classes.resetPasswordForm__change
    : classes.resetPasswordForm__reset;

  return (
    <FormProvider {...methods}>
      <form
        className={classes.resetPasswordForm + " " + themeClassName}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.resetPasswordForm__header}>
          {isChangePassword ? "Change Password" : "Update Password"}
        </div>
        <div className={classes.resetPasswordForm__main}>
          <div className={classes.resetPasswordForm__main__inputContainer}>
            {updatedFieldList?.map((field) => {
              return (
                <Input
                  fieldProps={{ ...field, error: errors[field?.name]?.message }}
                  key={field.key}
                />
              );
            })}
          </div>
          <div className={classes.resetPasswordForm__main__buttonContainer}>
            <Button
              label={isChangePassword ? "Change" : "Update"}
              type="submit"
              disabled={!isValid}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default ResetPasswordForm;
