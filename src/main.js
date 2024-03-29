import Vue from "vue";
import { ToastPlugin, ModalPlugin } from "bootstrap-vue";
import VueCompositionAPI from "@vue/composition-api";

import i18n from "@/libs/i18n";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import { initializeApp } from "firebase/app";
import Address from './@core/repeater/adress.vue'
import Irsaliye from './@core/repeater/irsaliye.vue'
import Iade from './@core/repeater/iade.vue'
import Notlar from './@core/repeater/Notlar.vue'
import Banka from './@core/repeater/Banka.vue'

import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)
// Global Components
import "./global-components";
Vue.component('test-address', Address)
Vue.component('Irsaliye',Irsaliye)
Vue.component('Iade',Iade)
Vue.component('Notlar',Notlar)
Vue.component('Banka',Banka)

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

// const firebaseConfig = {
//   apiKey: "AIzaSyAGYIjNuHfBgGGowOSyENhtcUGBEYRXd_Q",
//   authDomain: "authtestapp-68c8f.firebaseapp.com",
//   projectId: "authtestapp-68c8f",
//   storageBucket: "authtestapp-68c8f.appspot.com",
//   messagingSenderId: "585600464106",
//   appId: "1:585600464106:web:bd32eab3ddb626c0b4d393",
// };


new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
