import { resetState, toggleLanguage } from "../../features/Home/homeSlice";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../common/Logo/Logo";
import Button from "../common/Button/Button";
import classes from "./Header.module.scss";
import { FormattedMessage } from "react-intl";
import { useLocation, useNavigate } from "react-router";
import appRoutes from "../../utils/appRoutes";
import Navbar from "../Navbar/Navbar";
import ToggleButton from "../common/ToggleButton/ToggleButton";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "../Sidebar/Sidebar";
import useComponentVisible from "../../hooks/useComponentVisible";
import { useEffect, useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const adminState = useSelector((state) => state.admin);
  const { selectedLanguage } = useSelector((state) => state.home);
  const { token } = adminState;

  const [isHeaderColor, setIsHeaderColor] = useState(false);

  const [reference, isComponentVisible, setIsComponentVisible] =
    useComponentVisible();

  const listenScrollEvent = (event) => {
    if (window.scrollY < 60) {
      setIsHeaderColor(false);
    } else if (window.scrollY > 60) {
      setIsHeaderColor(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const navLinks = [
    {
      key: 1,
      name: "home.home",
      path: appRoutes.HOME,
    },
    {
      key: 2,
      name: "home.blogs",
      path: appRoutes.BLOGS,
    },
    {
      key: 3,
      name: "home.aboutUs",
      path: appRoutes.ABOUT_US,
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
      key: 4,
      name: "home.contactUs",
      path: appRoutes.CONTACT_US,
    },
    {
      key: 5,
      name: "home.privacyPolicy",
      path: appRoutes.PRIVACY_POLICY,
    },
  ];

  const handleLogin = () => {
    navigate(appRoutes.LOGIN);
  };

  const handleLogout = () => {
    dispatch(resetState());
    localStorage.clear();
    navigate(appRoutes.LOGIN);
  };

  return (
    <div><div>
      <marquee width="100%" bgcolor="red" height="60px" fontSize= "2.5rem"> Teli-Sahu Matrimonial Website || तेली-साहू वैवाहिक वेबसाइट </marquee>
    </div>
      <div
        className={classes.header}
        style={{ backgroundColor: isHeaderColor ? "#fff" : "transparent" }}
      >

        <div className={classes.header__logo}>
          <div
            className={classes.header__logo__menuLogo}
            onClick={() => setIsComponentVisible(true)}
            ref={reference}
          >
            <Sidebar
              isComponentVisible={isComponentVisible}
              setIsComponentVisible={setIsComponentVisible}
            />
            <RxHamburgerMenu />
          </div>
          <div
            onClick={() => navigate(appRoutes.HOME)}
            className={classes.header__logo__mainLogo}
          >
            <Logo />
          </div>
        </div>
        <div className={classes.header__navbar}>
          <Navbar navLinks={navLinks} />
          <ToggleButton
            handleChange={() => dispatch(toggleLanguage())}
            checked={selectedLanguage === "en"}
          />
          {pathname !== appRoutes.LOGIN &&
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
                  dark
                  onClick={() => navigate(appRoutes.ADMIN.DEFAULT)}
                />
              )
            ) : (
              <Button
                label={<FormattedMessage id="home.adminlogin" />}
                small
                onClick={handleLogin}
              />
            ))}
        </div>

      </div>

    </div>
  );
};

export default Header;
