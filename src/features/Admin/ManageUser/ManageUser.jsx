import React, { useEffect, useState } from "react";
import SearchDetailsContainer from "../../../components/SearchDetailsContainer/SearchDetailsContainer";
import TopProfiles from "../../../components/TopProfiles/TopProfiles";
import { genderTypes } from "../../../utils/genderTypes";
import ActiveProfileWithFullInfo from "../../../components/ActiveProfileWithFullInfo/ActiveProfileWithFullInfo";
import disableUser from "../../../api/admin/disableUser";
import deleteUser from "../../../api/admin/deleteUser";
import Modal from "../../../components/common/Modal/Modal";
import classes from "./ManageUser.module.scss";
import appRoutes from "../../../utils/appRoutes";
import { useLocation } from "react-router";
import { setMessage } from "../../Common/commonSlice";
import { useDispatch } from "react-redux";

const ManageUser = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [usersList, setUsersList] = useState([]);
  const [activeType, setActiveType] = useState(2);
  const [activeProfile, setActiveProfile] = useState(null);
  const [topProfiles, setTopProfiles] = useState([]);
  const [disabledUserModal, setDisabledUserModal] = useState(false);
  const [deleteUserModal, setDeleteUserModal] = useState(false);

  useEffect(() => {
    if (pathname === appRoutes.ADMIN.MANAGE_BRIDE) {
      setActiveType(genderTypes.FEMALE);
    } else if (pathname === appRoutes.ADMIN.MANAGE_GROOM) {
      setActiveType(genderTypes.MALE);
    }
  }, [pathname]);

  const handleDisableUserModal = () => {
    setDisabledUserModal(!disabledUserModal);
  };
  const handleDeleteUserModal = () => {
    setDeleteUserModal(!deleteUserModal);
  };

  const handleDisableUser = () => {
    disableUser(activeProfile?._id)
      .then((response) => {
        dispatch(
          setMessage({
            messageType: response.data?.messageType,
            message: response.data?.message,
          })
        );
        console.log(response);
        if (response.status === 200) {
          setActiveProfile((profile) => {
            return { ...profile, status: profile?.status === 1 ? 2 : 1 };
          });
          const filteredTopProfiles = topProfiles.map((profile) => {
            if (profile?._id !== activeProfile?._id) {
              return profile;
            }
            return { ...profile, status: profile?.status === 1 ? 2 : 1 };
          });
          const filteredUsersList = usersList.map((profile) => {
            if (profile?._id !== activeProfile?._id) {
              return profile;
            }
            return { ...profile, status: profile?.status === 1 ? 2 : 1 };
          });
          setUsersList(filteredUsersList);
          setTopProfiles(filteredTopProfiles);
          handleDisableUserModal();
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
  };

  const handleDeleteUser = () => {
    deleteUser(activeProfile?._id)
      .then((response) => {
        console.log(response);
        dispatch(
          setMessage({
            messageType: response.data?.messageType,
            message: response.data?.message,
          })
        );
        const filteredTopProfiles = topProfiles.filter(
          (profile) => profile._id !== activeProfile._id
        );
        const filteredUsersList = usersList.filter(
          (profile) => profile._id !== activeProfile._id
        );
        setUsersList(filteredUsersList);
        setTopProfiles(filteredTopProfiles);
        setActiveProfile(filteredUsersList[0]);
        handleDeleteUserModal();
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
  };

  return (
    <div className={classes.manageUser}>
      <div className={classes.manageUser__searchAndInfo}>
        <SearchDetailsContainer
          type={activeType}
          activeProfile={activeProfile}
          setActiveProfile={setActiveProfile}
          usersList={usersList}
          setUsersList={setUsersList}
        />
        <ActiveProfileWithFullInfo
          activeProfile={activeProfile}
          handleDisableUser={handleDisableUserModal}
          handleDeleteUser={handleDeleteUserModal}
        />
      </div>
      <TopProfiles
        type={activeType}
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
        topProfiles={topProfiles}
        setTopProfiles={setTopProfiles}
      />
      <Modal
        isOpen={disabledUserModal}
        height={20}
        width={46}
        heading="Disable User"
        toggle={handleDisableUserModal}
        paddingBody="0rem 3rem"
        buttonLabel1="Cancel"
        buttonLabel2="Yes"
        handleSubmit={handleDisableUser}
      >
        <div className={classes.manageUser__modal}>
          Are you sure you want to disable user?
        </div>
      </Modal>
      <Modal
        isOpen={deleteUserModal}
        height={20}
        width={46}
        heading="Delete User"
        toggle={handleDeleteUserModal}
        paddingBody="0rem 3rem"
        buttonLabel1="Cancel"
        buttonLabel2="Yes"
        handleSubmit={handleDeleteUser}
      >
        <div className={classes.manageUser__modal}>
          Are you sure you want to delete user?
        </div>
      </Modal>
    </div>
  );
};

export default ManageUser;
