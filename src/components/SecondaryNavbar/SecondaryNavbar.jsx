import React from "react";
import ArrowRight from "../../assets/icons/Navbar/ArrowRight";
import { NavLink, useNavigate } from "react-router-dom";
import classes from "./SecondaryNavbar.module.scss";
import appRoutes from "../../utils/appRoutes";

const SecondaryNavbar = ({ navLinks }) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(appRoutes.BACK);
  };
  return (
    <ul className={classes.secondaryNavbar__list}>
      <li className={classes.secondaryNavbar__list__back} onClick={handleBack}>
        Back
      </li>
      {navLinks.map((link) => {
        return (
          <li key={link.key} className={classes.secondaryNavbar__list__item}>
            <ArrowRight />
            <NavLink
              to={link.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? classes.secondaryNavbar__list__item__link +
                    " " +
                    classes.secondaryNavbar__list__item__link__pending
                  : isActive
                  ? classes.secondaryNavbar__list__item__link +
                    " " +
                    classes.secondaryNavbar__list__item__link__active
                  : classes.secondaryNavbar__list__item__link
              }
            >
              {link.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SecondaryNavbar;
