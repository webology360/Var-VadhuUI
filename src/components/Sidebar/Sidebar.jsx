import React from "react";
import classes from "./Sidebar.module.scss";
import Navbar from "../Navbar/Navbar";
import ToggleButton from "../common/ToggleButton/ToggleButton";
import {
  // resetState,
  toggleLanguage,
} from "../../features/Home/homeSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router";
import appRoutes from "../../utils/appRoutes";
// import Button from "../common/Button/Button";
// import { FormattedMessage } from "react-intl";
// import Logo from "../common/Logo/Logo";

const Sidebar = ({ isComponentVisible, setIsComponentVisible }) => {
  const dispatch = useDispatch();
  // const { pathname } = useLocation();
  // const navigate = useNavigate();
  // const adminState = useSelector((state) => state.admin);
  const { selectedLanguage } = useSelector((state) => state.home);
  // const { token } = adminState;

  const navLinks = [
    {
      key: 1,
      name: "home.home",
      path: appRoutes.HOME,
      isClick: true,
      handleNavLink: () => setIsComponentVisible(false),
    },
    {
      key: 2,
      name: "home.aboutUs",
      path: appRoutes.ABOUT_US,
      isClick: true,
      handleNavLink: () => setIsComponentVisible(false),
    },
    // {
    //   key: 3,
    //   name: "home.investorRelations",
    //   path: appRoutes.HOME,
    // },
    // {
    //   key: 4,
    //   name: "home.careers",
    //   path: appRoutes.HOME,
    // },
    // {
    //   key: 5,
    //   name: "home.media",
    //   path: appRoutes.HOME,
    // },
    {
      key: 6,
      name: "home.contactUs",
      path: appRoutes.CONTACT_US,
      isClick: true,
      handleNavLink: () => setIsComponentVisible(false),
    },
  ];

  // const handleLogin = () => {
  //   navigate(appRoutes.LOGIN);
  // };

  // const handleLogout = () => {
  //   dispatch(resetState());
  //   localStorage.clear();
  //   navigate(appRoutes.LOGIN);
  // };

  return (
    <div
      className={
        isComponentVisible
          ? classes.sidebar + " " + classes.sidebar__show
          : classes.sidebar + " " + classes.sidebar__hide
      }
    >
      <div className={classes.sidebar__navbar}>
        <Navbar navLinks={navLinks} flexDirection="column" />
        <ToggleButton
          handleChange={() => dispatch(toggleLanguage())}
          checked={selectedLanguage === "en"}
        />
        {/* {pathname !== appRoutes.LOGIN &&
          (token ? (
            pathname.includes(appRoutes.ADMIN.DEFAULT) ? (
              <Button
                label={<FormattedMessage id="home.logout" />}
                small
                onClick={handleLogout}
              />
            ) : (
              <Button
                label="Admin"
                small
                // dark
                backgroundColor="#fff"
                color="#000"
                onClick={() => navigate(appRoutes.ADMIN.DEFAULT)}
              />
            )
          ) : (
            <Button
              label={<FormattedMessage id="home.adminlogin" />}
              small
              onClick={handleLogin}
            />
          ))} */}
      </div>
    </div>
  );
};

// const ForwardedSidebar = React.forwardRef(Sidebar);
export default Sidebar;
