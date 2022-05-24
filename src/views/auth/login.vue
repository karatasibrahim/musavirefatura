<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <vuexy-logo />
        <h2 class="brand-text text-primary ml-1">Müşavirim</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title class="mb-1 font-weight-bold" title-tag="h2">
            Mükellef Giriş Paneli!
          </b-card-title>
           

          <b-alert variant="primary" show>
            <!-- <div class="alert-body font-small-2">
              <p>
                <small class="mr-50"><span class="font-weight-bold">Admin:</span> admin@demo.com | admin</small>
              </p>
              <p>
                <small class="mr-50"><span class="font-weight-bold">Client:</span> client@demo.com | client</small>
              </p>
            </div> -->
            <!-- <feather-icon
              v-b-tooltip.hover.left="'This is just for ACL demo purpose'"
              icon="HelpCircleIcon"
              size="18"
              class="position-absolute"
              style="top: 10; right: 10;"
            /> -->
          </b-alert>

          <!-- form -->
          <validation-observer ref="loginForm" #default="{ invalid }">
            <b-form class="auth-login-form mt-2" @submit.prevent="login">
              <!-- email -->
              <b-form-group label="Mükellef Kodu" label-for="login-email">
              
                  <b-form-input
                    id="login-email"
                    v-model="userEmail"
                    
                    name="login-email"
                    placeholder="12345678"
                />
             
                
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Şifre</label>
                 
                </div>
                <validation-provider
                  #default="{ errors }"
                  name="Password"
                  vid="password"
                  rules="required"
                >
                  <b-input-group
                    class="input-group-merge"
                    :class="errors.length > 0 ? 'is-invalid' : null"
                  >
                    <b-form-input
                      id="login-password"
                      v-model="password"
                      :state="errors.length > 0 ? false : null"
                      class="form-control-merge"
                      :type="passwordFieldType"
                      name="login-password"
                      placeholder="Password"
                    />
                    <b-input-group-append is-text>
                      <feather-icon
                        class="cursor-pointer"
                        :icon="passwordToggleIcon"
                        @click="togglePasswordVisibility"
                      />
                    </b-input-group-append>
                  </b-input-group>
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>

              <!-- checkbox -->
            

              <!-- submit buttons -->
              <b-button
                type="submit"
                variant="primary"
                block
                :disabled="invalid"
              >
                Giriş
              </b-button>
            </b-form>
          </validation-observer>

         

          <!-- divider -->
          <div class="divider my-2">
            <div class="divider-text"></div>
          </div>

          <!-- social buttons -->
       
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import VuexyLogo from "@core/layouts/components/Logo.vue";
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BFormCheckbox,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BAlert,
  VBTooltip,
} from "bootstrap-vue";
import useJwt from "@/auth/jwt/useJwt";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import { getHomeRouteForLoggedInUser } from "@/auth/utils";

import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { mapActions } from 'vuex';

export default {
  directives: {
    "b-tooltip": VBTooltip,
  },
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BFormCheckbox,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    BAlert,
    VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      status: "",
      password: "159263",
      userEmail: "test@gmail.com",
      sideImg: require("@/assets/images/pages/login-v2.svg"),
      required,
      email,
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        this.sideImg = require("@/assets/images/pages/login-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  methods: {
    ...mapActions(['fetchMukellefaaa']),
    login() {
      let mukdata={}
      this.$refs.loginForm.validate().then((success) => {
             if (success) {
          const data = {
            Kod: this.userEmail,
            Sifre: this.password,
          };
          this.fetchMukellefaaa(data).then((el) => {
            console.log(Object.keys(el).length > 0);

            mukdata = el;
            console.log(mukdata);
            if (Object.keys(el).length > 0) {
              const userData = {
                MukellefId: mukdata.MukellefId,
                PanelKodu: mukdata.PanelKodu,
                PanelSifre: mukdata.PanelSifre,
              };

          localStorage.setItem("dataMuk", JSON.stringify(userData));

              this.$router
                .replace({
                  path: "/",
                  query: {
                    cid: mukdata.PanelKodu,
                    pwd: mukdata.PanelSifre,
                    asd: mukdata.MukellefId,
                  },
                })
                .then(() => {
                  this.$toast({
                    component: ToastificationContent,
                    position: "top-right",
                    props: {
                      title: `Hoş Geldin ${mukdata.Unvan}`,
                      icon: "CoffeeIcon",
                      variant: "success",
                      text: `Giriş başarılı.`,
                    },
                  });
                });
            } else {
              this.$toast({
                component: ToastificationContent,
                position: "top-right",
                props: {
                  title: `Uyarı`,
                  icon: "AlertTriangleIcon",
                  variant: "danger",
                  text: "Email veya parola hatalı",
                },
              });
            }
          });
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
