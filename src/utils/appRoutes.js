const appRoutes = {
  BACK: -1,
  ROOT: "/",
  HOME: "/home",
  ABOUT_US: "/aboutUs",
  CONTACT_US: "/contactUs",
  LOGIN: "/login",
  RESET_PASSWORD: {
    DEFAULT: "/resetPassword/:adminId",
    DYNAMIC: (adminId) => `/resetPassword/${adminId}`,
  },
  PROFILE: {
    DEFAULT: "/home/:userId",
    DYNAMIC: (profileId) => `/home/${profileId}`,
  },
  ADMIN: {
    DEFAULT: "/admin",
    MANAGE_BRIDE: "/admin/manageBride",
    MANAGE_GROOM: "/admin/manageGroom",
    MANAGE_USER: {
      ADD: "/admin/manageUser",
      UPDATE: {
        DEFAULT: "/admin/manageUser/:userId",
        DYNAMIC: (userId) => `/admin/manageUser/${userId}`,
      },
    },
    PAID_PROFILES: "/admin/paidProfiles",
    ACCOUNT_SETTINGS: {
      DEFAULT: "/admin/accountSettings",
      PROFILE: {
        DEFAULT: "/admin/accountSettings/profile",
        ADD_ADMIN: "/admin/accountSettings/addAdmin",
        UPDATE: {
          DEFAULT: "/admin/accountSettings/:adminId",
          DYNAMIC: (adminId) => `/admin/accountSettings/${adminId}`,
        },
      },
      CHANGE_PASSWORD: "/admin/accountSettings/changePassword",
    },
    RECENT_MATCHES: "/admin/recentMatches",
    TOP_TENS: "/admin/topTens",
  },
};

export default appRoutes;
