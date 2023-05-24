import React, { useEffect, useMemo } from "react";
import classes from "./AccountSettings.module.scss";
import Navbar from "../../../components/Navbar/Navbar";
import appRoutes from "../../../utils/appRoutes";
import { Outlet, useLocation, useNavigate, useParams } from "react-router";
import SecondaryNavbar from "../../../components/SecondaryNavbar/SecondaryNavbar";

const AccountSettings = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { adminId } = useParams();
  const navLinks = useMemo(
    () => [
      {
        key: 1,
        name: "admin.accountSettings.manageProfile",
        path: appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.DEFAULT,
      },
      {
        key: 2,
        name: "admin.accountSettings.changePassword",
        path: appRoutes.ADMIN.ACCOUNT_SETTINGS.CHANGE_PASSWORD,
      },
    ],
    []
  );

  const secondaryNavLinks = [
    {
      key: 1,
      path: pathname,
      name: adminId ? "Update Admin Form" : "Add Admin Form",
    },
  ];

  useEffect(() => {
    if (pathname === appRoutes.ADMIN.ACCOUNT_SETTINGS.DEFAULT) {
      navigate(navLinks[0].path);
    }
  }, [navigate, navLinks, pathname]);

  return (
    <div className={classes.accountSettings}>
      {pathname === appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.ADD_ADMIN ||
      pathname ===
        appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.UPDATE.DYNAMIC(adminId) ? (
        <SecondaryNavbar navLinks={secondaryNavLinks} />
      ) : (
        <div className={classes.accountSettings__header}>
          <div className={classes.accountSettings__header__heading}>
            Account Settings
          </div>
          <Navbar navLinks={navLinks} />
        </div>
      )}
      <div className={classes.accountSettings__mainContainer}>
        <Outlet />
      </div>
    </div>
  );
};

export default AccountSettings;
