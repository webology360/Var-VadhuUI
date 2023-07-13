import React from "react";
import classes from "./ConnectModal.module.scss";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import connectUser from "../../api/home/connectUser";

const ConnectModalForm = ({ handleConnectModal, userId }) => {
  const defaultConnectModalFormValues = {
    mobileNumber: "",
    emailId: "",
  };

  const connectModalFormSchema = yup.object().shape({
    mobileNumber: yup.number().required("This field is required"),
    emailId: yup
      .string()
      .email("Please Enter Valid Email Id")
      .required("This field is required"),
  });

  const methods = useForm({
    resolver: yupResolver(connectModalFormSchema),
    mode: "onChange",
    defaultValues: defaultConnectModalFormValues,
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

  const mobileNumberField = {
    key: 1,
    label: "Mobile Number",
    placeholder: "Enter Mobile Number",
    name: "mobileNumber",
    isLight: false,
    height: 4.4,
    width: 100,
    widthType: "%",
    // required: true,
  };
  const emailField = {
    key: 2,
    label: "Email ID",
    placeholder: "Enter Email ID",
    name: "emailId",
    isLight: false,
    height: 4.4,
    width: 100,
    widthType: "%",
    // required: true,
  };

  const onSubmit = (data) => {
    console.log(data, userId);
    connectUser(userId, data).then((data) => {
      console.log(data);
      if (data.status === 200) {
        handleConnectModal();
      }
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        className={classes.connectModalForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          fieldProps={{
            ...mobileNumberField,
            error: errors[mobileNumberField?.name]?.message,
          }}
        />
        <Input
          fieldProps={{
            ...emailField,
            error: errors[emailField?.name]?.message,
          }}
        />
        <div className={classes.connectModalForm__footer}>
          <div
            className={classes.connectModalForm__footer__cancel}
            onClick={handleConnectModal}
          >
            Cancel
          </div>
          <Button type="submit" label="Submit" small disabled={!isValid} />
        </div>
      </form>
    </FormProvider>
  );
};

export default ConnectModalForm;
