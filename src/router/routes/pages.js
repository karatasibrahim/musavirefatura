export default [
  {
    path: '/pages/account-setting',
    name: 'pages-account-setting',
    component: () => import('@/views/pages/account-setting/AccountSetting.vue'),
    meta: {
      //pageTitle: 'Account Settings',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          //text: 'Account Settings',
          active: true,
        },
      ],
    },
  },
  {
    path: '/pages/faq',
    name: 'pages-faq',
    component: () => import('@/views/pages/faq/Faq.vue'),
    meta: {
      layout:"vertical",
      pageTitle: 'FAQ',
      breadcrumb: [
        {
          text: 'Pages',
        },
        {
          text: 'FAQ',
          active: true,
        },
      ],
    },
  },
  {
    path: "/error-404",
    name: "error-404",
    component: () => import("@/views/error/Error404.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
      action: "read",
    },
  },
  {
    path: "/login",
    name: "auth-login",
    component: () => import("@/views/auth/login.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/register",
    name: "auth-register",
    component: () => import("@/views/auth/register.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/forgot-password",
    name: "auth-forgot-password",
    component: () => import("@/views/auth/forgotPassword.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
      redirectIfLoggedIn: true,
    },
  },
  {
    path: "/reset-password",
    name: "auth-reset-password",
    component: () => import("@/views/auth/resetPassword.vue"),
    meta: {
      layout: "full",
    },
  },
  {
    path: "/pages/miscellaneous/coming-soon",
    name: "misc-coming-soon",
    component: () => import("@/views/error/comingSoon.vue"),
    meta: {
      layout: "full",
    },
  },
  {
    path: "/pages/miscellaneous/not-authorized",
    name: "misc-not-authorized",
    component: () => import("@/views/error/notAuthorized.vue"),
    meta: {
      layout: "full",
      resource: "Auth",
    },
  },
  {
    path: "/pages/miscellaneous/under-maintenance",
    name: "misc-under-maintenance",
    component: () => import("@/views/error/underMaintenance.vue"),
    meta: {
      layout: "full",
    },
  },
  {
    path: "/pages/miscellaneous/error",
    name: "misc-error",
    component: () => import("@/views/error/error.vue"),
    meta: {
      layout: "full",
    },
  },
  {
    path: '/pages/pricing',
    name: 'pages-pricing',
    component: () => import('@/views/pages/pricing/Pricing.vue'),
   meta:{
    layout:"horizontal"
   },
  },
];
