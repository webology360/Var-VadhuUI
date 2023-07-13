import React, { useEffect, useState } from "react";
import SecondaryNavbar from "../../../components/SecondaryNavbar/SecondaryNavbar";
import classes from "./ProfileInfo.module.scss";
// import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import ImageList from "../../../components/common/ImageList/ImageList";
import FullProfileInfo from "../../../components/common/FullProfileInfo/FullProfileInfo";
import getUserById from "../../../api/home/getUserById";
import ConnectModal from "../../../components/ConnectModal/ConnectModal";
const ProfileInfo = () => {
  const { userId } = useParams();
  const { pathname } = useLocation();
  const [activeProfile, setActiveProfile] = useState(null);
  const [isConnectModal, setIsConnectModal] = useState(false);

  const handleConnectModal = () => {
    setIsConnectModal(!isConnectModal);
  };

  // const homeState = useSelector((state) => state.home);
  // const { profiles } = homeState;

  useEffect(() => {
    getUserById(userId)
      .then((user) => {
        setActiveProfile(user?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  // const activeProfile = profiles?.find((profile) => profile._id === userId);
  const navLinks = [
    {
      key: 1,
      path: pathname,
      name: `${activeProfile?.firstName} ${activeProfile?.lastName}`,
    },
  ];

  return (
    <div className={classes.profileInfo}>
      <div className={classes.profileInfo__navbar}>
        <SecondaryNavbar navLinks={navLinks} />
      </div>
      <div className={classes.profileInfo__infoContainer}>
        <ImageList images={activeProfile?.imgList} />
        <FullProfileInfo
          profile={activeProfile}
          handleConnect={handleConnectModal}
        />
      </div>
      <ConnectModal
        connectModal={isConnectModal}
        handleConnectModal={handleConnectModal}
        userId={userId}
      />
    </div>
  );
};

export default ProfileInfo;
