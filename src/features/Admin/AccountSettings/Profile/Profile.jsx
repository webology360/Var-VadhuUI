import React, { useEffect } from "react";
import classes from "./Profile.module.scss";
import getAdminProfile from "../../../../api/admin/getAdminProfile";
import Button from "../../../../components/common/Button/Button";
import { useNavigate } from "react-router";
import appRoutes from "../../../../utils/appRoutes";
import { setProfile } from "../../adminSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.admin);

  useEffect(() => {
    getAdminProfile()
      .then((response) => {
        if (response.status === 200) {
          dispatch(setProfile(response?.data?.data));
        }
      })
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <div className={classes.profileInfo}>
      <div className={classes.profileInfo__header}>
        <div className={classes.profileInfo__header__heading}>
          Profile Information :
        </div>
        <div className={classes.profileInfo__header__buttonContainer}>
          <Button
            label="Edit Profile"
            small
            dark
            onClick={() =>
              navigate(
                appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.UPDATE.DYNAMIC(
                  profile?._id
                )
              )
            }
          />
          <Button
            label="Add Admin"
            small
            dark
            onClick={() =>
              navigate(appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.ADD_ADMIN)
            }
          />
        </div>
      </div>
      <div className={classes.profileInfo__main}>
        <div className={classes.profileInfo__main__field}>
          <div className={classes.profileInfo__main__field__heading}>
            User Id
          </div>
          <div className={classes.profileInfo__main__field__value}>
            {profile?.userId}
          </div>
        </div>
        <div className={classes.profileInfo__main__field}>
          <div className={classes.profileInfo__main__field__heading}>Name</div>
          <div className={classes.profileInfo__main__field__value}>
            {`${profile?.firstName} ${profile?.lastName}`}
          </div>
        </div>
        <div className={classes.profileInfo__main__field}>
          <div className={classes.profileInfo__main__field__heading}>
            Mobile No.
          </div>
          <div className={classes.profileInfo__main__field__value}>
            {profile?.mobileNumber}
          </div>
        </div>
        <div className={classes.profileInfo__main__field}>
          <div className={classes.profileInfo__main__field__heading}>Email</div>
          <div className={classes.profileInfo__main__field__value}>
            {profile?.email}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
