import Vue from "vue";
import VueRouter from "vue-router";

// Routes
import { canNavigate } from "@/libs/acl/routeProtection";
import {
  isUserLoggedIn,
  getUserData,
  getHomeRouteForLoggedInUser,
} from "@/auth/utils";
import main from "./routes/main";
import online from "./routes/online";
import pages from "./routes/pages";
import apps from './routes/apps'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    { path: "/", redirect: { name: "dashboard" } },
    ...main,
    ...online,
    ...pages,
    ...apps,

    {
      path: "*",
      redirect: "error-404",
    },
    
  ],
});
// hata burası Tamam burada atuh kontrolü yok mu yani bilmiyorum bu kısım o işe yarıyor ama burada hata var yani buradan hata veriyor kaldırınca normal
router.beforeEach((to, _, next) => {
  const isLoggedIn = isUserLoggedIn();

  if (!canNavigate(to)) {
    if (!isLoggedIn) return next({ name: "auth-login" });

    return next({ name: "misc-not-authorized" });
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    const userData = getUserData();
    next(getHomeRouteForLoggedInUser(userData ? userData.role : null));
  }

  return next();
});

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
