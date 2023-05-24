import React from "react";
import classes from "./ProfileCard.module.scss";
import { useNavigate } from "react-router";
import appRoutes from "../../../utils/appRoutes";
import CircularImage from "../CircularImage/CircularImage";

const ProfileCard = ({
  profile,
  activeProfile,
  cardType = "default",
  handleClickCard = false,
}) => {
  const navigate = useNavigate();
  const clickCard = () => {
    if (handleClickCard) {
      handleClickCard(profile);
    } else {
      navigate(appRoutes.PROFILE.DYNAMIC(profile._id));
    }
  };
  return (
    <div
      className={`${
        cardType === "default"
          ? classes.profileCard
          : classes.profileCard__noBorder
      }`}
      onClick={clickCard}
    >
      {/* <div className={classes.profileCard__imgContainer}>
        <img
          src={profile.imgList[0]}
          className={classes.profileCard__imgContainer__img}
          alt={profile.firstName}
        />
      </div> */}
      <CircularImage
        isActive={profile?._id === activeProfile?._id}
        imgURL={profile?.imgList[0]}
        height="11"
        width="11"
      />
      <div className={classes.profileCard__detailsContainer}>
        <div className={classes.profileCard__detailsContainer__name}>
          {`${profile?.firstName} ${profile?.lastName}`}
        </div>
        <div className={classes.profileCard__detailsContainer__otherDetails}>
          <div>Age : {profile?.age}</div>
          <div>Occu : {profile?.occupation}</div>
          <div>
            Region :{" "}
            {`${profile?.presentAddress?.location}, ${profile?.presentAddress?.state}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
