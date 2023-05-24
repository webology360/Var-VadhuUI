import React, { useEffect } from "react";
import classes from "./AdminForm.module.scss";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../../components/common/Input/Input";
import { RxCounterClockwiseClock } from "react-icons/rx";
import Button from "../../../../components/common/Button/Button";
import addAdmin from "../../../../api/admin/addAdmin";
import getAdminProfile from "../../../../api/admin/getAdminProfile";
import { setProfile } from "../../adminSlice";
import appRoutes from "../../../../utils/appRoutes";
import updateAdmin from "../../../../api/admin/updateAdmin";

const AdminForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adminId } = useParams();
  const { profile } = useSelector((state) => state.admin);

  const fieldList = adminId
    ? [
        {
          key: 1,
          label: "User ID",
          placeholder: "Enter Used ID /  Mobile Number",
          name: "userId",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
        {
          key: 3,
          label: "First Name",
          placeholder: "Enter First Name",
          name: "firstName",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
        {
          key: 4,
          label: "Last Name",
          placeholder: "Enter Last Name",
          name: "lastName",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
        {
          key: 5,
          label: "Mobile Number",
          placeholder: "Enter Mobile Number",
          name: "mobileNumber",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
        {
          key: 6,
          label: "Email Id",
          placeholder: "Enter Email Id",
          name: "email",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
      ]
    : [
        {
          key: 1,
          label: "User ID",
          placeholder: "Enter Used ID /  Mobile Number",
          name: "userId",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
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
        },
        {
          key: 3,
          label: "First Name",
          placeholder: "Enter First Name",
          name: "firstName",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
        {
          key: 4,
          label: "Last Name",
          placeholder: "Enter Last Name",
          name: "lastName",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
        {
          key: 5,
          label: "Mobile Number",
          placeholder: "Enter Mobile Number",
          name: "mobileNumber",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
        {
          key: 6,
          label: "Email Id",
          placeholder: "Enter Email Id",
          name: "email",
          isLight: false,
          height: 4.4,
          width: 100,
          widthType: "%",
        },
      ];

  const defaultProfileFormValues = {
    userId: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
  };

  const profileFormSchema = yup.object().shape({
    userId: yup.string().required("This field is required"),
    password: adminId
      ? yup.string().notRequired()
      : yup
          .string()
          .required("This field is required")
          .matches(
            /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,16}$/,
            "Please enter a password at least 8 character and max 18 character and contain At least one uppercase, one lowercase, one special character and one number."
          ),
    firstName: yup.string().required("This field is required"),
    lastName: yup.string().required("This field is required"),
    mobileNumber: yup.number().required("This field is required"),
    email: yup
      .string()
      .required("This field is required")
      .email("Please enter valid email"),
  });

  const methods = useForm({
    resolver: yupResolver(profileFormSchema),
    mode: "onBlur",
    defaultValues: adminId ? profile : defaultProfileFormValues,
  });

  const {
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    // setValue,
    // getValues,
  } = methods;

  useEffect(() => {
    if (adminId && !profile) {
      getAdminProfile()
        .then((response) => {
          if (response.status === 200) {
            dispatch(setProfile(response?.data?.data));
          }
        })
        .catch((err) => console.log(err));
    }
    if (adminId && profile) {
      reset(profile);
    }
  }, [adminId, profile, reset, dispatch]);

  const handleReset = () => {
    reset();
  };

  const onSubmit = (values) => {
    console.log(values);
    if (adminId) {
      updateAdmin(adminId, values)
        .then((response) => {
          if (response.status === 200) {
            reset();
            navigate(appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.DEFAULT);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      addAdmin(values)
        .then((response) => {
          if (response.status === 201) {
            reset();
            navigate(appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.DEFAULT);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={classes.adminForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.adminForm__header}>
          <div className={classes.adminForm__header__heading}>
            {adminId ? "Update Admin Profile" : "Add New Admin"}
          </div>
          <div className={classes.adminForm__header__buttonContainer}>
            <div
              className={classes.adminForm__header__buttonContainer__reset}
              onClick={handleReset}
            >
              <RxCounterClockwiseClock />
              Reset
            </div>
            <Button
              type="submit"
              label={adminId ? "Update" : "Submit"}
              disabled={!isValid && !isDirty}
              small
              light
            />
          </div>
        </div>
        <div className={classes.adminForm__fieldList}>
          {fieldList?.map((field) => {
            return (
              <Input
                fieldProps={{ ...field, error: errors[field?.name]?.message }}
                key={field.key}
              />
            );
          })}
        </div>
      </form>
    </FormProvider>
  );
};

export default AdminForm;
