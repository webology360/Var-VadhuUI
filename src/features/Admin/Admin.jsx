import React, { useEffect } from "react";
import classes from "./Admin.module.scss";
import SidePanel from "./SidePanel/SidePanel";
import { Outlet, useLocation, useNavigate } from "react-router";
import appRoutes from "../../utils/appRoutes";

const Admin = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === appRoutes.ADMIN.DEFAULT) {
      navigate(appRoutes.ADMIN.MANAGE_BRIDE);
    }
  }, [navigate, pathname]);

  return (
    <div className={classes.admin}>
      <div className={classes.admin__leftPanel}>
        <div className={classes.admin__leftPanel__sidePanel}>
          <SidePanel />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Admin;
