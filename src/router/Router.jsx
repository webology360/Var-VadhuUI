import React from "react";
import Home from "../features/Home/Home";
import { Navigate, useRoutes } from "react-router";
import ProfileInfo from "../features/Home/ProfileInfo/ProfileInfo";
import Login from "../features/Admin/Login/Login";
import appRoutes from "../utils/appRoutes";
import Admin from "../features/Admin/Admin";
import { useDispatch } from "react-redux";
import AccountSettings from "../features/Admin/AccountSettings/AccountSettings";
import { handleToken } from "../utils/handleToken";
import ManageUserForm from "../features/Admin/ManageUserForm/ManageUserForm";
import ResetPassword from "../features/Admin/ResetPassword/ResetPassword";
import ManageUser from "../features/Admin/ManageUser/ManageUser";
import Profile from "../features/Admin/AccountSettings/Profile/Profile";
import ChangePassword from "../features/Admin/AccountSettings/ChangePassword/ChangePassword";
import AdminForm from "../features/Admin/AccountSettings/AdminForm/AdminForm";
import ContactUs from "../components/ContactUs/ContactUs";
import AboutUs from "../components/AboutUs/AboutUs";
import Blogs from "../components/Blogs/Blogs";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

const Router = () => {
  const dispatch = useDispatch();
  const token = handleToken(dispatch);

  const routes = [
    { path: appRoutes.ROOT, element: <Navigate to={appRoutes.HOME} replace /> },
    {
      path: appRoutes.HOME,
      element: <Home />,
    },
    {
      path: appRoutes.BLOGS,
      element: <Blogs />,
    },
    {
      path: appRoutes.CONTACT_US,
      element: <ContactUs />,
    },
    {
      path: appRoutes.ABOUT_US,
      element: <AboutUs />,
    },
    {
      path: appRoutes.PRIVACY_POLICY,
      element: <PrivacyPolicy />,
    },
    {
      path: appRoutes.PROFILE.DEFAULT,
      element: <ProfileInfo />,
    },
    {
      path: appRoutes.LOGIN,
      element: <Login />,
    },
    {
      path: appRoutes.RESET_PASSWORD.DEFAULT,
      element: <ResetPassword />,
    },
    {
      path: appRoutes.ADMIN.DEFAULT,
      element: token ? <Admin /> : <Navigate to={appRoutes.LOGIN} replace />,
      children: [
        {
          path: appRoutes.ADMIN.MANAGE_BRIDE,
          element: <ManageUser />,
        },
        {
          path: appRoutes.ADMIN.MANAGE_GROOM,
          element: <ManageUser />,
        },
        {
          path: appRoutes.ADMIN.MANAGE_USER.ADD,
          element: <ManageUserForm />,
        },
        {
          path: appRoutes.ADMIN.MANAGE_USER.UPDATE.DEFAULT,
          element: <ManageUserForm />,
        },
        {
          path: appRoutes.ADMIN.ACCOUNT_SETTINGS.DEFAULT,
          element: <AccountSettings />,
          children: [
            {
              path: appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.DEFAULT,
              element: <Profile />,
            },
            {
              path: appRoutes.ADMIN.ACCOUNT_SETTINGS.CHANGE_PASSWORD,
              element: <ChangePassword />,
            },
            {
              path: appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.ADD_ADMIN,
              element: <AdminForm />,
            },
            {
              path: appRoutes.ADMIN.ACCOUNT_SETTINGS.PROFILE.UPDATE.DEFAULT,
              element: <AdminForm />,
            },
          ],
        },
      ],
    },
    { path: "*", element: <h1>No Match Found</h1> },
  ];

  let element = useRoutes(routes);
  return element;
};

export default Router;
