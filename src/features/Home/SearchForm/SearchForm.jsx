import React, { useEffect, useState } from "react";
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
import { setMessage } from "../../Common/commonSlice";
import { FormattedMessage } from "react-intl";

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

  const genderList = [
    { id: 2, value: "Woman" },
    { id: 1, value: "Man" },
  ];

  const lookingFor=<FormattedMessage id="home.Looking.For" />;
  const ageFor=<FormattedMessage id="home.Age.From" />;
  const ageToo=<FormattedMessage id="home.Age.To" />;
  //const stateLabel=<FormattedMessage id="home.State" />;
  //const motherTounge=<FormattedMessage id="home.Mother.Tounge" />;

  const [stateList, setStateList] = useState([]);
  const [nationalLanguageList, setNationalLanguageList] = useState([]);

  useEffect(() => {
    const stateListArr = Object.keys(stateAndCityList);
    const updateStateList = stateListArr.map((item, index) => {
      return { name: item, id: index + 1, isSelected: true };
    });
    const updateLanguageList = motherToungeList.map((item, index) => {
      return { name: item, id: index + 1, isSelected: true };
    });
    setStateList(updateStateList);
    setNationalLanguageList(updateLanguageList);
  }, []);

  const fieldList = [
    {
      key: 1,
      label: lookingFor,
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
      label: ageFor,
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
      label: ageToo,
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
      type: "multiselect",
      fieldName: "name",
      fieldValue: "id",
      valueArr: stateList,
      onChange: setStateList,
      // required: true,
    },
    // {
    //   key: 5,
    //   label: "Location",
    //   placeholder: "Select Location",
    //   name: "location",
    //   type: "select",
    //   valueArr: selectedState ? stateAndCityList[selectedState] : [], // required: true,
    // },
    {
      key: 6,
      label: "Mother Tounge",
      placeholder: "Select Mother Tounge",
      name: "motherTounge",
      type: "multiselect",
      fieldName: "name",
      fieldValue: "id",
      valueArr: nationalLanguageList,
      onChange: setNationalLanguageList,
      // required: true,
    },
  ];

  const defaultSearchFormValues = {
    gender: genderList[0].id,
    ageFrom: 20,
    ageTo: 35,
    state: "",
    // location: "",
    motherTounge: "",
  };

  const searchFormSchema = yup.object().shape({
    gender: yup.string().required(),
    ageFrom: yup.number().required(),
    ageTo: yup.number().required(),
    // state: yup.string().required(),
    // location: yup.string().required(),
    // motherTounge: yup.string().required(),
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
    const {
      gender,
      ageFrom,
      ageTo,
      // state, location, motherTounge
    } = values;
    console.log(stateList, nationalLanguageList, values);
    const updatedStateList = stateList
      .filter((state) => state?.isSelected)
      .map((state) => state.name);
    const updatedMotherTounge = nationalLanguageList
      .filter((state) => state?.isSelected)
      .map((state) => state.name);
    const formData = {
      ageFrom,
      ageTo,
      state: updatedStateList,
      motherTounge: updatedMotherTounge,
    };
    getSearchUserList(
      gender,
      formData
      // ageFrom,
      // ageTo,
      // stateList,
      // location,
      // nationalLanguageList
    )
      .then((response) => {
        dispatch(
          setMessage({
            messageType: response.data?.messageType,
            message: response.data?.message,
          })
        );
        dispatch(setProfiles(response?.data?.data));
      })
      .catch((err) => {
        dispatch(
          setMessage({
            messageType: err.response.data?.messageType,
            message: err.response.data?.message,
          })
        );
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
