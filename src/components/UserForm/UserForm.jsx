import React, { useEffect, useState } from "react";
import classes from "./UserForm.module.scss";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  // useLocation,
  useNavigate,
  //  useParams
} from "react-router";
// import { useDispatch } from "react-redux";
import Input from "../common/Input/Input";
import { genderTypes } from "../../utils/genderTypes";
import { stateAndCityList } from "../../utils/stateAndCityList";
import Button from "../common/Button/Button";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { RxCounterClockwiseClock } from "react-icons/rx";
import addUser from "../../api/admin/addUser";
import { motherToungeList } from "../../utils/motherTounge";
import appRoutes from "../../utils/appRoutes";
import updateUser from "../../api/admin/updateUser";
import uploadImages from "../../api/admin/uploadImages";
import uploadBioData from "../../api/admin/uploadBioData";
import { employmentTypes } from "../../utils/employmentTypes";
import { setMessage } from "../../features/Common/commonSlice";
import { useDispatch } from "react-redux";

const UserForm = ({ userForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isBioData, setIsBioData] = useState(false);
  const [isImageList, setIsImageList] = useState(false);

  const userFormSchema = yup.object().shape({
    firstName: yup.string().required("This field is required"),
    middleName: yup.string(),
    lastName: yup.string().required("This field is required"),
    dateOfBirth: yup.date().required("This field is required"),
    email: yup
      .string()
      .required("This field is required")
      .email("Please enter valid email"),
    mobileNumber: yup.number().required("This field is required"),
    occupation: yup.string().required("This field is required"),
    education: yup.string().required("This field is required"),
    //preferredPartnerChoice: yup.string().required("This field is required"),
    gender: yup.number().required("This field is required"),
    height: yup.number().required("This field is required"),
    age: yup.number().required("This field is required").min(18),
    bodyComplexion: yup.string().required("This field is required"),
    motherTounge: yup.string().required("This field is required"),
    employmentType: yup.string().required("This field is required"),
    familyMembersAndRelations: yup.array().of(
      yup.object({
        name: yup.string().required("This field is required"),
        relation: yup.string().required("This field is required"),
        occupation: yup.string().required("This field is required"),
      })
    ),
    //zodiacSign: yup.string().required("This field is required"),
    presentAddress: yup.object({
      state: yup.string().required("This field is required"),
      area: yup.string().required("This field is required"),
      pincode: yup.number().required("This field is required"),
    }),
    permanentAddress: yup.object({
      state: yup.string().required("This field is required"),
      area: yup.string().required("This field is required"),
      pincode: yup.number().required("This field is required"),
    }),
    bioData: yup.mixed().nullable().required("This field is required"),
    //annualIncome: yup.number().required("This field is required"),
    remarks: yup.string().required("This field is required"),
    imgList: yup.mixed().nullable().required("This field is required"),
  });

  const methods = useForm({
    resolver: yupResolver(userFormSchema),
    mode: "onBlur",
    defaultValues: userForm,
  });

  const {
    handleSubmit,
    formState: { errors, isValid },
    reset,
    control,
    setValue,
    getValues,
  } = methods;

  const employmentTypeList = [
    {
      name: "Self Employed/Business",
      value: employmentTypes.SELF_EMPLOYED_BUSINESS,
    },
    { name: "Govt./Public Sector", value: employmentTypes.GOVT_PUBLIC_SECTOR },
    { name: "Private Sector", value: employmentTypes.PRIVATE_SECTOR },
  ];
  const genderList = [
    { name: "Male", value: genderTypes.MALE },
    { name: "Female", value: genderTypes.FEMALE },
  ];
  const stateList = Object.keys(stateAndCityList);

  // useEffect(() => {
  //   setPresentAddressState(userForm?.permanentAddress?.state);
  //   setPermanentAddressState(userForm?.presentAddress?.state);
  // }, [userForm]);

  const handleSetAge = (e) => {
    const today = new Date();
    const birthDate = new Date(e.target.value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setValue("age", age);
  };

  const handleCheckIsSameAddress = (isChecked) => {
    if (isChecked) {
      const values = getValues();
      console.log(values);
      setValue("permanentAddress", values.presentAddress);
    } else {
      setValue("permanentAddress", userForm.permanentAddress);
    }
  };
  console.log(errors);

  const isSameAddress = {
    key: 1,
    label: "Same As Above",
    type: "checkbox",
    name: "isSameAddress",
    isLight: false,
    height: 2,
    width: 2,
    direction: "row-reverse",
    onChange: (e) => {
      handleCheckIsSameAddress(e.target.checked);
    },
  };
  const fieldList = {
    basicDetails: [
      {
        key: 1,
        label: "First Name",
        placeholder: "Enter First Name",
        name: "firstName",
        isLight: false,
      },
      {
        key: 2,
        label: "Middle Name",
        placeholder: "Enter Middle Name",
        name: "middleName",
        isLight: false,
      },
      {
        key: 3,
        label: "Last Name",
        placeholder: "Enter Last Name",
        name: "lastName",
        isLight: false,
      },
      {
        key: 4,
        label: "Date of Birth",
        type: "date",
        placeholder: "Enter Date of Birth",
        name: "dateOfBirth",
        isLight: false,
        onChange: (e) => handleSetAge(e),
      },
      {
        key: 19,
        label: "Email",
        placeholder: "Enter Email Id",
        name: "email",
        isLight: false,
      },
      {
        key: 20,
        label: "Mobile Number",
        placeholder: "Enter Mobile Number",
        name: "mobileNumber",
        isLight: false,
      },
      {
        key: 5,
        type: "number",
        label: "Age",
        placeholder: "Enter Age",
        name: "age",
        isLight: false,
      },
      {
        key: 6,
        type: "select",
        label: "Gender",
        placeholder: "Select Gender",
        valueArr: genderList,
        fieldName: "name",
        fieldValue: "value",
        name: "gender",
        isLight: false,
      },
      {
        key: 7,
        label: "Height",
        placeholder: "Enter Height",
        name: "height",
        isLight: false,
      },
      {
        key: 8,
        label: "Education",
        placeholder: "Enter Education",
        name: "education",
        isLight: false,
      },
      {
        key: 18,
        label: "Employment Type",
        placeholder: "Select Employment Type",
        name: "employmentType",
        type: "select",
        isLight: false,
        valueArr: employmentTypeList,
        fieldName: "name",
        fieldValue: "value",
      },
      {
        key: 9,
        label: "Occupation",
        placeholder: "Enter Occupation",
        name: "occupation",
        isLight: false,
      },
      {
        key: 10,
        label: "Preferred Partner Choice",
        placeholder: "Enter Preferred Partner Choice",
        name: "preferredPartnerChoice",
        type: "textarea",
        isLight: false,
      },
      {
        key: 11,
        label: "Body Complexion",
        placeholder: "Enter Body Complexion",
        name: "bodyComplexion",
        isLight: false,
      },
      {
        key: 12,
        label: "Zodiac Sign",
        placeholder: "Enter Zodiac Sign",
        name: "zodiacSign",
        isLight: false,
      },
      {
        key: 13,
        label: "Annual Income",
        placeholder: "Enter Annual Income",
        name: "annualIncome",
        isLight: false,
      },
      {
        key: 14,
        type: "file",
        label: "Bio Data",
        placeholder: "Upload Bio Data",
        name: "bioData",
        isLight: false,
        hidden: true,
        onChange: (e) => {
          if (e.target?.files) {
            setIsBioData(true);
          } else {
            setIsBioData(false);
          }
        },
      },
      {
        key: 15,
        type: "file",
        label: "Profile Images",
        placeholder: "Upload Profile Images",
        name: "imgList",
        isLight: false,
        multiple: true,
        hidden: true,
        onChange: (e) => {
          if (e.target?.files) {
            setIsImageList(true);
          } else {
            setIsImageList(false);
          }
        },
      },
      {
        key: 16,
        label: "Mother Tounge",
        placeholder: "Select Mother Tounge",
        name: "motherTounge",
        type: "select",
        isLight: false,
        valueArr: motherToungeList,
      },
      {
        key: 17,
        label: "More about me",
        type: "textarea",
        placeholder: "Enter More about me",
        name: "remarks",
        isLight: false,
        width: 100,
        widthType: "%",
      },
    ],
    presentAddressDetails: [
      {
        key: 1,
        label: "Address",
        placeholder: "Enter Address",
        name: "area",
        isLight: false,
        width: 100,
        widthType: "%",
      },
      {
        key: 2,
        type: "select",
        label: "State",
        valueArr: stateList,
        placeholder: "Select State",
        name: "state",
        isLight: false,
        // onChange: (e) => setPresentAddressState(e.target.value),
      },
      // {
      //   key: 3,
      //   type: "select",
      //   label: "City",
      //   valueArr: presentAddressState
      //     ? stateAndCityList[presentAddressState]
      //     : [],
      //   placeholder: "Select City",
      //   name: "location",
      //   isLight: false,
      // },
      {
        key: 4,
        label: "Pincode",
        placeholder: "Enter Pincode",
        name: "pincode",
        isLight: false,
      },
    ],
    permanentAddressDetails: [
      {
        key: 1,
        label: "Address",
        placeholder: "Enter Address",
        name: "area",
        isLight: false,
        width: 100,
        widthType: "%",
      },
      {
        key: 2,
        type: "select",
        label: "State",
        valueArr: stateList,
        placeholder: "Select State",
        name: "state",
        isLight: false,
        // onChange: (e) => setPermanentAddressState(e.target.value),
      },
      // {
      //   key: 3,
      //   type: "select",
      //   label: "City",
      //   valueArr: permanentAddressState
      //     ? stateAndCityList[permanentAddressState]
      //     : [],
      //   placeholder: "Select City",
      //   name: "location",
      //   isLight: false,
      // },
      {
        key: 4,
        label: "Pincode",
        placeholder: "Enter Pincode",
        name: "pincode",
        isLight: false,
      },
    ],
  };

  useEffect(() => {
    reset(userForm);
    // setIsBioData(true);
    // setIsImageList(true);
  }, [reset, userForm]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyMembersAndRelations",
  });

  const handleReset = () => {
    reset();
  };

  const onSubmit = (values) => {
    console.log(values);
    // https://pps.whatsapp.net/v/t61.24694-24/341269006_200583556083095_7372397639995143744_n.jpg?ccb=11-4&oh=01_AdT_T942Hfh65qUPPDIwcln7DarnrS4ZOR-2CYn8X1Zy3g&oe=6455FAB4
    // const imgListExample = [
    //   "https://pps.whatsapp.net/v/t61.24694-24/342395336_773825987603289_3961633916960680479_n.jpg?ccb=11-4&oh=01_AdTHcf4ttK2utBXvC1HvZ7hL5bjhxlRmta5hFNHHtOidHQ&oe=6455EF3B",
    //   "https://pps.whatsapp.net/v/t61.24694-24/342395336_773825987603289_3961633916960680479_n.jpg?ccb=11-4&oh=01_AdTHcf4ttK2utBXvC1HvZ7hL5bjhxlRmta5hFNHHtOidHQ&oe=6455EF3B",
    //   "https://pps.whatsapp.net/v/t61.24694-24/342395336_773825987603289_3961633916960680479_n.jpg?ccb=11-4&oh=01_AdTHcf4ttK2utBXvC1HvZ7hL5bjhxlRmta5hFNHHtOidHQ&oe=6455EF3B",
    //   "https://pps.whatsapp.net/v/t61.24694-24/342395336_773825987603289_3961633916960680479_n.jpg?ccb=11-4&oh=01_AdTHcf4ttK2utBXvC1HvZ7hL5bjhxlRmta5hFNHHtOidHQ&oe=6455EF3B",
    //   "https://pps.whatsapp.net/v/t61.24694-24/342395336_773825987603289_3961633916960680479_n.jpg?ccb=11-4&oh=01_AdTHcf4ttK2utBXvC1HvZ7hL5bjhxlRmta5hFNHHtOidHQ&oe=6455EF3B",
    // ];
    const { bioData, imgList, ...restFormData } = values;
    const imagesData = new FormData();
    const pdfData = new FormData();
    console.log(bioData, imgList);
    [...imgList]?.forEach((image) => {
      imagesData.append("images", image);
    });
    pdfData.append("bioData", bioData[0]);

    if (userForm?._id) {
      updateUser(userForm?._id, { ...userForm, ...restFormData })
        .then((response) => {
          // console.log(response);
          dispatch(
            setMessage({
              messageType: response.data?.messageType,
              message: response.data?.message,
            })
          );
          if (response.status === 201) {
            if (isImageList) {
              uploadImages(userForm?._id, imagesData)
                .then((imgResponse) => {
                  console.log(imgResponse);
                  if (isBioData) {
                    uploadBioData(response?.data?.data?._id, pdfData)
                      .then((pdfResponse) => {
                        console.log(pdfResponse);
                        if (values.gender === 1) {
                          navigate(appRoutes.ADMIN.MANAGE_GROOM);
                        } else {
                          navigate(appRoutes.ADMIN.MANAGE_BRIDE);
                        }
                      })
                      .catch((err) => {
                        console.log(err);
                        dispatch(
                          setMessage({
                            messageType: err.response.data?.messageType,
                            message: err.response.data?.message,
                          })
                        );
                      });
                  } else {
                    if (values.gender === 1) {
                      navigate(appRoutes.ADMIN.MANAGE_GROOM);
                    } else {
                      navigate(appRoutes.ADMIN.MANAGE_BRIDE);
                    }
                  }
                })
                .catch((err) => console.log(err));
            } else if (isBioData) {
              uploadBioData(response?.data?.data?._id, pdfData)
                .then((pdfResponse) => {
                  console.log(pdfResponse);
                  if (values.gender === 1) {
                    navigate(appRoutes.ADMIN.MANAGE_GROOM);
                  } else {
                    navigate(appRoutes.ADMIN.MANAGE_BRIDE);
                  }
                })
                .catch((err) => {
                  console.log(err);
                  dispatch(
                    setMessage({
                      messageType: err.response.data?.messageType,
                      message: err.response.data?.message,
                    })
                  );
                });
            } else {
              if (values.gender === 1) {
                navigate(appRoutes.ADMIN.MANAGE_GROOM);
              } else {
                navigate(appRoutes.ADMIN.MANAGE_BRIDE);
              }
            }
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(
            setMessage({
              messageType: err.response.data?.messageType,
              message: err.response.data?.message,
            })
          );
        });
    } else {
      addUser({ ...restFormData })
        .then((response) => {
          // console.log(response);
          dispatch(
            setMessage({
              messageType: response.data?.messageType,
              message: response.data?.message,
            })
          );
          if (response.status === 201) {
            uploadImages(response?.data?.data?._id, imagesData)
              .then((imgResponse) => {
                // console.log(imgResponse);
                uploadBioData(response?.data?.data?._id, pdfData)
                  .then((pdfResponse) => {
                    console.log(pdfResponse);
                    if (values.gender === 1) {
                      navigate(appRoutes.ADMIN.MANAGE_GROOM);
                    } else {
                      navigate(appRoutes.ADMIN.MANAGE_BRIDE);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    dispatch(
                      setMessage({
                        messageType: err.response.data?.messageType,
                        message: err.response.data?.message,
                      })
                    );
                  });
              })
              .catch((err) => {
                console.log(err);
                dispatch(
                  setMessage({
                    messageType: err.response.data?.messageType,
                    message: err.response.data?.message,
                  })
                );
              });
          }
        })
        .catch((err) => {
          console.log(err);
          dispatch(
            setMessage({
              messageType: err.response.data?.messageType,
              message: err.response.data?.message,
            })
          );
        });
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={classes.userForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.userForm__header}>
          <div className={classes.userForm__header__heading}>
            User Details Form
          </div>
          <div className={classes.userForm__header__buttonContainer}>
            <div
              className={classes.userForm__header__buttonContainer__reset}
              onClick={handleReset}
            >
              <RxCounterClockwiseClock />
              Reset
            </div>
            <Button
              type="submit"
              label={userForm?._id ? "Update" : "Submit"}
              disabled={!isValid && !isBioData && !isImageList}
              small
              light
            />
          </div>
        </div>
        <div className={classes.userForm__basicDetails}>
          <div className={classes.userForm__basicDetails__fields}>
            {fieldList?.basicDetails?.map((field) => {
              return (
                <Input
                  fieldProps={{ ...field, error: errors[field?.name]?.message }}
                  key={field.key}
                />
              );
            })}
          </div>
          <div className={classes.userForm__basicDetails__relationsfields}>
            {fields?.map((_, index, relationsArr) => {
              return (
                <div
                  className={
                    classes.userForm__basicDetails__relationsfields__field
                  }
                  key={index}
                >
                  <Input
                    fieldProps={{
                      name: `familyMembersAndRelations.${index}.relation`,
                      label: index === 0 && "Family Members And Relations",
                      placeholder: "Enter Family Member Relation",
                      isLight: false,
                      error:
                        errors?.familyMembersAndRelations?.[index]?.relation
                          ?.message,
                    }}
                  />
                  <Input
                    fieldProps={{
                      name: `familyMembersAndRelations.${index}.name`,
                      placeholder: "Enter Family Member Name",
                      isLight: false,
                      error:
                        errors?.familyMembersAndRelations?.[index]?.name
                          ?.message,
                    }}
                  />
                  <Input
                    fieldProps={{
                      name: `familyMembersAndRelations.${index}.occupation`,
                      placeholder: "Enter Family Member Occupation",
                      isLight: false,
                      error:
                        errors?.familyMembersAndRelations?.[index]?.occupation
                          ?.message,
                    }}
                  />
                  {relationsArr?.length > 1 && (
                    <div
                      className={
                        classes.userForm__basicDetails__relationsfields__field__delete
                      }
                      onClick={() => remove(index)}
                    >
                      <RiDeleteBin5Fill />
                    </div>
                  )}
                  {index === relationsArr?.length - 1 && (
                    <Button
                      type="button"
                      label="Add Another Member"
                      dark
                      width="26"
                      onClick={() => append({ name: "", relation: "" })}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className={classes.userForm__addressDetails}>
          <div className={classes.userForm__addressDetails__presentAddress}>
            <div
              className={
                classes.userForm__addressDetails__presentAddress__heading
              }
            >
              Present Address
            </div>
            <div
              className={
                classes.userForm__addressDetails__presentAddress__fields
              }
            >
              {fieldList?.presentAddressDetails?.map((field) => {
                return (
                  <Input
                    fieldProps={{
                      ...field,
                      name: `presentAddress.${field.name}`,
                    }}
                    key={field.key}
                  />
                );
              })}
            </div>
          </div>
          <div className={classes.userForm__addressDetails__permanentAddress}>
            <div
              className={
                classes.userForm__addressDetails__permanentAddress__heading
              }
            >
              Permanent Address
              <div
                className={
                  classes.userForm__addressDetails__permanentAddress__heading__input
                }
              >
                <Input
                  fieldProps={{
                    ...isSameAddress,
                  }}
                />
              </div>
            </div>
            <div
              className={
                classes.userForm__addressDetails__permanentAddress__fields
              }
            >
              {fieldList?.permanentAddressDetails?.map((field) => {
                return (
                  <Input
                    fieldProps={{
                      ...field,
                      name: `permanentAddress.${field.name}`,
                    }}
                    key={field.key}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default UserForm;
