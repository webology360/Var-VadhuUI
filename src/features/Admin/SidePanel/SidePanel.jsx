import React from "react";
import classes from "./SidePanel.module.scss";
import ArrowRight from "../../../assets/icons/Navbar/ArrowRight";
import { useLocation, useNavigate } from "react-router";
import appRoutes from "../../../utils/appRoutes";
import ManageBrideIcon from "../../../assets/icons/Admin/SidePanel/ManageBrideIcon";
import ManageGroomIcon from "../../../assets/icons/Admin/SidePanel/ManageGroomIcon";
import AccountSettingsIcon from "../../../assets/icons/Admin/SidePanel/AccountSettingsIcon";

const SidePanel = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const sidePanelList = [
    {
      key: 1,
      name: "Manage Bride",
      icon: <ManageBrideIcon />,
      isActive: pathname.includes(appRoutes.ADMIN.MANAGE_BRIDE),
      path: appRoutes.ADMIN.MANAGE_BRIDE,
    },
    {
      key: 2,
      name: "Manage Groom",
      icon: <ManageGroomIcon />,
      isActive: pathname.includes(appRoutes.ADMIN.MANAGE_GROOM),
      path: appRoutes.ADMIN.MANAGE_GROOM,
    },
    {
      key: 3,
      name: "Account Settings",
      icon: <AccountSettingsIcon />,
      isActive: pathname.includes(appRoutes.ADMIN.ACCOUNT_SETTINGS.DEFAULT),
      path: appRoutes.ADMIN.ACCOUNT_SETTINGS.DEFAULT,
    },
    // {
    //   key: 4,
    //   name: "Paid Profiles",
    //   icon: <PaidProfilesIcon />,
    //   isActive: pathname === appRoutes.ADMIN.PAID_PROFILES,
    //   path: appRoutes.ADMIN.PAID_PROFILES,
    // },
    // {
    //   key: 6,
    //   name: "Recent Matches",
    //   icon: <RecentMatchesIcon />,
    //   isActive: pathname === appRoutes.ADMIN.RECENT_MATCHES,
    //   path: appRoutes.ADMIN.RECENT_MATCHES,
    // },
    // {
    //   key: 7,
    //   name: "Top 10s",
    //   icon: <Top10Icon />,
    //   isActive: pathname === appRoutes.ADMIN.TOP_TENS,
    //   path: appRoutes.ADMIN.TOP_TENS,
    // },
  ];

  const handleClickSidePanelItem = (path) => {
    navigate(path);
  };
  return (
    <ul className={classes.sidePanel__list}>
      {sidePanelList?.map((sidePanelListItem) => {
        return (
          <li
            key={sidePanelListItem?.key}
            className={classes.sidePanel__list__item}
            onClick={() => handleClickSidePanelItem(sidePanelListItem.path)}
          >
            {sidePanelListItem.icon}
            {sidePanelListItem.name}
            <div className={classes.sidePanel__list__item__active}>
              {sidePanelListItem.isActive && <ArrowRight fill={"white"} />}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SidePanel;
