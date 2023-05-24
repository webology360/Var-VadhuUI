import React, { useEffect, useState } from "react";
import classes from "./ManageUserForm.module.scss";
import SecondaryNavbar from "../../../components/SecondaryNavbar/SecondaryNavbar";
import UserForm from "../../../components/UserForm/UserForm";
import { useLocation, useParams } from "react-router";
import getUserByIdAdmin from "../../../api/admin/getUserByIdAdmin";

const ManageUserForm = () => {
  const { pathname } = useLocation();
  const { userId } = useParams();
  const [userForm, setUserForm] = useState(null);

  const navLinks = [
    {
      key: 1,
      path: pathname,
      name: userId ? "Update User Form" : "Add User Form",
    },
  ];

  useEffect(() => {
    if (userId) {
      getUserByIdAdmin(userId)
        .then((user) => {
          setUserForm(() => {
            return {
              ...user?.data?.data,
              dateOfBirth: user?.data?.data?.dateOfBirth.split("T")[0],
              // .toISOString(),
            };
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      const defaultUserFormValues = {
        firstName: "",
        middleName: "",
        lastName: "",
        dateOfBirth: "",
        occupation: "",
        education: "",
        preferredPartnerChoice: "",
        gender: "",
        height: "",
        age: "",
        bodyComplexion: "",
        motherTounge: "",
        familyMembersAndRelations: [{ relation: "", name: "" }],
        zodiacSign: "",
        presentAddress: {
          state: "",
          location: "",
          area: "",
          pincode: "",
        },
        permanentAddress: {
          state: "",
          location: "",
          area: "",
          pincode: "",
        },
        bioData: "",
        annualIncome: "",
        remarks: "",
        imgList: [],
      };
      setUserForm(defaultUserFormValues);
    }
  }, [userId]);

  return (
    <div className={classes.manageUser}>
      <div className={classes.manageUser__navbar}>
        <SecondaryNavbar navLinks={navLinks} />
      </div>
      <UserForm userForm={userForm} />
    </div>
  );
};

export default ManageUserForm;
