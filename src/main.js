import Vue from "vue";
import { ToastPlugin, ModalPlugin } from "bootstrap-vue";
import VueCompositionAPI from "@vue/composition-api";

import i18n from "@/libs/i18n";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { initializeApp } from "firebase/app";

// Global Components
import "./global-components";

// 3rd party plugins
import "@axios";
import "@/libs/acl";
import "@/libs/portal-vue";
import "@/libs/clipboard";
import "@/libs/toastification";
import "@/libs/sweet-alerts";
import "@/libs/vue-select";
import "@/libs/tour";

import "devextreme/dist/css/dx.common.css";
import "devextreme/dist/css/dx.light.css";
//import "devextreme/dist/css/dx.dark.css";

// Axios Mock Adapter

// BSV Plugin Registration
Vue.use(ToastPlugin);
Vue.use(ModalPlugin);

// Composition API
Vue.use(VueCompositionAPI);
 
 

// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require("@core/assets/fonts/feather/iconfont.css"); // For form-wizard

// import core styles
require("@core/scss/core.scss");

// import assets styles
require("@/assets/scss/style.scss");

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyDn3x_-3uQT3e_u4EFIMqXKy40iKgvUf8c",
  authDomain: "emusavirim-3c193.firebaseapp.com",
  databaseURL: "https://emusavirim-3c193-default-rtdb.firebaseio.com",
  projectId: "emusavirim-3c193",
  storageBucket: "emusavirim-3c193.appspot.com",
  messagingSenderId: "112360446427",
  appId: "1:112360446427:web:af06b497a6a34ed47aaffe",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAGYIjNuHfBgGGowOSyENhtcUGBEYRXd_Q",
//   authDomain: "authtestapp-68c8f.firebaseapp.com",
//   projectId: "authtestapp-68c8f",
//   storageBucket: "authtestapp-68c8f.appspot.com",
//   messagingSenderId: "585600464106",
//   appId: "1:585600464106:web:bd32eab3ddb626c0b4d393",
// };

Vue.prototype.$app =initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
