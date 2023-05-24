import React, { useEffect, useState } from "react";
import classes from "./TopProfiles.module.scss";
import ProfileCard from "../common/ProfileCard/ProfileCard";
import { genderTypes } from "../../utils/genderTypes";
import getTopProfilesList from "../../api/admin/getTopProfilesList";

const TopProfiles = ({
  type,
  activeProfile,
  setActiveProfile,
  topProfiles,
  setTopProfiles,
}) => {
  useEffect(() => {
    const genderType =
      type === genderTypes.FEMALE ? genderTypes.FEMALE : genderTypes.MALE;
    getTopProfilesList(genderType).then((response) => {
      if (response.status === 200) {
        setTopProfiles(response?.data?.data);
      }
    });
  }, [type, setTopProfiles]);

  return (
    <div className={classes.topProfiles}>
      <div className={classes.topProfiles__heading}>Top Profiles</div>
      <div className={classes.topProfiles__list}>
        {topProfiles?.map((profile) => {
          return (
            <ProfileCard
              key={profile?._id}
              profile={profile}
              activeProfile={activeProfile}
              handleClickCard={(profile) => setActiveProfile(profile)}
              cardType="noBorder"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopProfiles;
