import { FormattedMessage } from "react-intl";
import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar = ({ navLinks, flexDirection = "row" }) => {
  return (
    <div className={classes.navbar} style={{ flexDirection: flexDirection }}>
      {navLinks.map((navItem) => {
        return (
          <div
            key={navItem.key}
            onClick={(e) => {
              if (navItem?.isClick) {
                e.stopPropagation();
                navItem?.handleNavLink();
              }
            }}
          >
            <NavLink
              to={navItem.path}
              className={({ isActive, isPending }) =>
                isPending
                  ? classes.navbar__item + " " + classes.navbar__item__pending
                  : isActive
                  ? classes.navbar__item + " " + classes.navbar__item__active
                  : classes.navbar__item
              }
            >
              <FormattedMessage id={navItem.name} />
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
