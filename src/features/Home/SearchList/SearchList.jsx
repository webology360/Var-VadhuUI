import React from "react";
import classes from "./SearchList.module.scss";
import { useSelector } from "react-redux";
import ProfileCard from "../../../components/common/ProfileCard/ProfileCard";
// import { setProfiles } from "../homeSlice";

const SearchList = () => {
  // const dispatch = useDispatch();
  const homeState = useSelector((state) => state.home);
  const { profiles, profilesCount } = homeState;

  // const handleReset = () => {
  //   dispatch(setProfiles([]));
  // };
  return (
    <div className={classes.searchList}>
      <div className={classes.searchList__header}>
        <div className={classes.searchList__header__searchDetails}>
          Search Result :
          <div className={classes.searchList__header__searchDetails__count}>
            Total {profilesCount} profiles
          </div>
        </div>
        {/* <div
          className={classes.searchList__header__reset}
          onClick={handleReset}
        >
          Reset Filters
        </div> */}
      </div>
      <div className={classes.searchList__list}>
        {profiles?.map((profile) => {
          return <ProfileCard profile={profile} key={profile._id} />;
        })}
      </div>
    </div>
  );
};

export default SearchList;
