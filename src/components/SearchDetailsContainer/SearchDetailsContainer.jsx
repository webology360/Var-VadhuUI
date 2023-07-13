import React, { useEffect, useState } from "react";
import Input from "../common/Input/Input";
import SearchIcon from "../../assets/icons/Admin/SearchIcon";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import classes from "./SearchDetailsContainer.module.scss";
import getSearchUsersList from "../../api/admin/getSearchUsersList";
import CircularImage from "../common/CircularImage/CircularImage";
import Button from "../common/Button/Button";
import useDebounce from "../../hooks/useDebounce";
import { genderTypes } from "../../utils/genderTypes";
import { useNavigate } from "react-router";
import appRoutes from "../../utils/appRoutes";
import { useDispatch } from "react-redux";

const SearchDetailsContainer = ({
  type = genderTypes.FEMALE,
  activeProfile,
  setActiveProfile,
  usersList,
  setUsersList,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.trim() !== "" && e.target.value;
    if (value) {
      setSearchTerm(value);
    } else {
      setSearchTerm("");
    }
  };

  const searchField = {
    key: 1,
    placeholder: "Search with name (or) location (or) age",
    name: "searchDetails",
    isLight: false,
    height: 4.2,
    width: 100,
    widthType: "%",
    icon: <SearchIcon />,
    onChange: (e) => handleSearch(e),
    gap: 0,
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    const genderType =
      type === genderTypes.FEMALE ? genderTypes.FEMALE : genderTypes.MALE;
    getSearchUsersList(genderType, debouncedSearchTerm)
      .then((response) => {
        if (response.status === 200) {
          setUsersList(response?.data?.data);
          setActiveProfile(response?.data?.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, debouncedSearchTerm, type, setActiveProfile, setUsersList]);

  const searchDetailsSchema = yup.object().shape({
    searchDetails: yup.string().required("This field is required"),
  });

  const methods = useForm({
    resolver: yupResolver(searchDetailsSchema),
    mode: "onBlur",
    defaultValues: {
      searchDetails: "",
    },
  });

  const {
    handleSubmit,
    formState: {
      errors,
      //  isDirty, isValid
    },
    // reset,
  } = methods;

  const handleActiveProfile = (profile) => {
    setActiveProfile(profile);
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <FormProvider {...methods}>
      <form
        className={classes.searchDetailsContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={classes.searchDetailsContainer__header}>
          View {type === genderTypes.FEMALE ? "Bride" : "Groom"} Details
          <Button
            label="Add"
            small
            dark
            onClick={() => navigate(appRoutes.ADMIN.MANAGE_USER.ADD)}
          />
        </div>
        <Input
          fieldProps={{ ...searchField, error: errors?.searchDetails?.message }}
        />
        {usersList?.length > 0 && (
          <div
            className={classes.searchDetailsContainer__profilesListContainer}
          >
            <div
              className={
                classes.searchDetailsContainer__profilesListContainer__heading
              }
            >
              Recently Added Profiles
            </div>
            <div
              className={
                classes.searchDetailsContainer__profilesListContainer__list
              }
            >
              {usersList?.map((profile) => {
                return (
                  <div
                    key={profile?._id}
                    className={
                      classes.searchDetailsContainer__profilesListContainer__list__item
                    }
                    onClick={() => handleActiveProfile(profile)}
                  >
                    <CircularImage
                      isActive={profile?._id === activeProfile?._id}
                      imgURL={profile?.imgList[0]}
                      height="7.8"
                      width="7.8"
                    />
                    {`${profile?.firstName} ${profile?.lastName}`}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default SearchDetailsContainer;
