import React, { useState } from "react";
import classes from "./SearchForm.module.scss";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../components/common/Input/Input";
import * as yup from "yup";
import Button from "../../../components/common/Button/Button";
import { setProfiles } from "../homeSlice";
import { useDispatch } from "react-redux";
import { stateAndCityList } from "../../../utils/stateAndCityList";
import { RxCounterClockwiseClock } from "react-icons/rx";
import getSearchUserList from "../../../api/home/getSearchUserList";
import { motherToungeList } from "../../../utils/motherTounge";

const SearchForm = () => {
  const dispatch = useDispatch();
  const [ageFrom, setAgeFrom] = useState({
    min: 18,
    max: 30,
  });
  const [ageTo, setAgeTo] = useState({
    min: 18,
    max: 30,
  });

  const [selectedState, setSelectedState] = useState("");

  const genderList = [
    { id: 2, value: "Women" },
    { id: 1, value: "Men" },
  ];

  const stateList = Object.keys(stateAndCityList);

  const fieldList = [
    {
      key: 1,
      label: "Looking For",
      placeholder: "Select option",
      name: "gender",
      fieldName: "value",
      fieldValue: "id",
      type: "select",
      valueArr: genderList,
      // required: true,
    },
    {
      key: 2,
      label: "Age From",
      name: "ageFrom",
      type: "number",
      // required: true,
      min: ageFrom.min,
      max: ageFrom.max,
      width: 7,
      onChange: (e) =>
        setAgeTo((state) => {
          return { ...state, min: e.target.value };
        }),
    },
    {
      key: 3,
      label: "Age To",
      name: "ageTo",
      type: "number",
      // required: true,
      min: ageTo.min,
      // max: ageTo.max,
      width: 7,
      onChange: (e) =>
        setAgeFrom((state) => {
          return { ...state, max: e.target.value };
        }),
    },
    {
      key: 4,
      label: "State",
      placeholder: "Select State",
      name: "state",
      type: "select",
      valueArr: stateList,
      onChange: (e) => setSelectedState(e.target.value),
      // required: true,
    },
    {
      key: 5,
      label: "Location",
      placeholder: "Select Location",
      name: "location",
      type: "select",
      valueArr: selectedState ? stateAndCityList[selectedState] : [], // required: true,
    },
    {
      key: 6,
      label: "Mother Tounge",
      placeholder: "Select Mother Tounge",
      name: "motherTounge",
      type: "select",
      valueArr: motherToungeList,
      // required: true,
    },
  ];

  const defaultSearchFormValues = {
    gender: genderList[0].id,
    ageFrom: 20,
    ageTo: 30,
    state: "",
    location: "",
    motherTounge: "",
  };

  const searchFormSchema = yup.object().shape({
    gender: yup.string().required(),
    ageFrom: yup.number().required(),
    ageTo: yup.number().required(),
    state: yup.string().required(),
    location: yup.string().required(),
    motherTounge: yup.string().required(),
  });

  const methods = useForm({
    resolver: yupResolver(searchFormSchema),
    mode: "onBlur",
    defaultValues: defaultSearchFormValues,
  });

  const {
    handleSubmit,
    formState: {
      errors,
      //  isDirty,
      isValid,
    },
    reset,
  } = methods;

  const handleReset = () => {
    reset();
    dispatch(setProfiles([]));
  };

  const onSubmit = (values) => {
    const { gender, ageFrom, ageTo, state, location, motherTounge } = values;
    getSearchUserList(
      gender,
      ageFrom,
      ageTo,
      state,
      location,
      motherTounge
    ).then((response) => {
      dispatch(setProfiles(response?.data?.data));
    });
  };

  return (
    <FormProvider {...methods}>
      <form className={classes.searchForm} onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.searchForm__fieldList}>
          {fieldList?.map((field) => {
            if (field.name === "ageFrom") {
              return (
                <div
                  className={classes.searchForm__fieldList__field}
                  key={field.key}
                >
                  <Input
                    fieldProps={{
                      ...field,
                      error: errors[field?.name]?.message,
                    }}
                  />
                  <span className={classes.searchForm__fieldList__field__tag}>
                    To
                  </span>
                </div>
              );
            }
            return <Input fieldProps={field} key={field.key} />;
          })}
          <Button label="Search" type="submit" disabled={!isValid} />
          <div
            className={classes.searchForm__fieldList__reset}
            onClick={handleReset}
          >
            <RxCounterClockwiseClock />
            Reset
          </div>
        </div>
        {/* <div className={classes.searchForm__buttonContainer}>
        </div> */}
      </form>
    </FormProvider>
  );
};

export default SearchForm;
