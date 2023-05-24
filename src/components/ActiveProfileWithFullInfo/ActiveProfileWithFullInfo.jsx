import React from "react";
import classes from "./ActiveProfileWithFullInfo.module.scss";
import ImageList from "../common/ImageList/ImageList";
import Button from "../common/Button/Button";
import FullProfileInfo from "../common/FullProfileInfo/FullProfileInfo";
import appRoutes from "../../utils/appRoutes";
import { useNavigate } from "react-router";

const ActiveProfileWithFullInfo = ({
  activeProfile,
  handleDisableUser,
  handleDeleteUser,
}) => {
  const navigate = useNavigate();
  return (
    <div className={classes.activeProfileInfoContainer}>
      <div className={classes.activeProfileInfoContainer__imageContainer}>
        <ImageList
          activeImageType="circular"
          images={activeProfile?.imgList}
          activeImageHeight="21.6"
          activeImageWidth="21.6"
        />
        <div
          className={
            classes.activeProfileInfoContainer__imageContainer__buttonContainer
          }
        >
          <Button
            label="Edit"
            small
            dark
            onClick={() =>
              navigate(
                appRoutes.ADMIN.MANAGE_USER.UPDATE.DYNAMIC(activeProfile._id)
              )
            }
          />
          <Button
            label={`${activeProfile?.status === 1 ? "Disable" : "Enable"}`}
            small
            dark
            onClick={handleDisableUser}
          />
          <Button label="Delete" small dark onClick={handleDeleteUser} />
        </div>
      </div>
      <FullProfileInfo profile={activeProfile} isHeading={false} />
    </div>
  );
};

export default ActiveProfileWithFullInfo;
