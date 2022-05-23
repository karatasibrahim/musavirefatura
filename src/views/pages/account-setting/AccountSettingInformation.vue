<template>
 <b-card>

 <b-card>
   <b-form>
<h4>Sms Firma Ayarları </h4>
      <b-row>
        <!-- old password -->
        
        <b-col md="6">
          <b-form-group
            label="Sms Firma"
            label-for="account-old-password"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-old-password"
                v-model="passwordValueOld"
                name="old-password"
                :type="passwordFieldTypeOld"
                placeholder=""
              />
         
            </b-input-group>
          </b-form-group>
        </b-col>
             <b-col md="6">
          <b-form-group
            label-for="account-new-password"
            label="Sms Originatör"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-new-password"
                v-model="newPasswordValue"
                :type="passwordFieldTypeNew"
                name="new-password"
                placeholder=""
              />
           
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group
            label-for="account-retype-new-password"
            label="Kullanıcı Adı"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-retype-new-password"
                v-model="RetypePassword"
                :type="passwordFieldTypeRetype"
                name="retype-password"
                placeholder=""
              />
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconRetype"
                  class="cursor-pointer"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
           <b-col md="6">
          <b-form-group
            label-for="account-retype-new-password"
            label="Sms Şifre"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-retype-new-password"
                v-model="RetypePassword"
                :type="passwordFieldTypeRetype"
                name="retype-password"
                placeholder=""
              />
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconRetype"
                  class="cursor-pointer"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <!--/ old password -->
      </b-row>
   </b-form>
 </b-card>
 
  <b-card>
    <!-- form -->
    <b-form>
       
       <h4>Whatsapp Ayarları </h4>
      <b-row>
        <!-- old password -->
        
          <b-col md="6">
          <b-form-group
            label-for="phone"
            label="Telefon Numarası"
          >
            <cleave
              id="phone"
              v-model="localOptions.phone"
              class="form-control"
              :raw="false"
              :options="clevePhone"
              placeholder=""
            />
          </b-form-group>
        </b-col>
             <b-col md="6">
          <b-form-group
            label-for="account-new-password"
            label="Whatsapp Key"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-new-password"
                v-model="newPasswordValue"
                :type="passwordFieldTypeNew"
                name="new-password"
                placeholder=""
              />
             <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconRetype"
                  class="cursor-pointer"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        
           
        <!--/ old password -->
      </b-row>
       <h4>Telegram Ayarları </h4>
      <b-row>
        <!-- old password -->
        
        <b-col md="6">
          <b-form-group
            label-for="phone"
            label="Telefon Numarası"
          >
            <cleave
              id="phone"
              v-model="localOptions.phone"
              class="form-control"
              :raw="false"
              :options="clevePhone"
              placeholder=""
            />
          </b-form-group>
        </b-col>
             <b-col md="6">
          <b-form-group
            label-for="account-new-password"
            label="Telegram Key"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-new-password"
                v-model="newPasswordValue"
                :type="passwordFieldTypeNew"
                name="new-password"
                placeholder=""
              />
             <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconRetype"
                  class="cursor-pointer"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
   
      </b-row>
      <b-row>
        
        
          

        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-1 mr-1"
          >
            Kaydet
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            class="mt-1"
            variant="outline-secondary"
            @click.prevent="resetForm"
          >
            İptal
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
   </b-card>
 
</template>

<script>
import {
  BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BFormTextarea,BInputGroup,
    BInputGroupAppend
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import Ripple from 'vue-ripple-directive'
import Cleave from 'vue-cleave-component'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'cleave.js/dist/addons/cleave-phone.us'

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,
    BFormTextarea,
    BInputGroup,
    BInputGroupAppend,
    vSelect,
    flatPickr,
    Cleave,
  },
  directives: {
    Ripple,
  },
  props: {
    informationData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
       passwordValueOld: '',
      newPasswordValue: '',
      RetypePassword: '',
      passwordFieldTypeOld: 'password',
      passwordFieldTypeNew: 'password',
      passwordFieldTypeRetype: 'password',
      countryOption: ['USA', 'India', 'Canada'],
      localOptions:"",
      //  JSON.parse(JSON.stringify(this.informationData)),
      clevePhone: {
        phone: true,
        phoneRegionCode: 'US',

      },
    }
  },
    computed: {
    passwordToggleIconOld() {
      return this.passwordFieldTypeOld === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    passwordToggleIconNew() {
      return this.passwordFieldTypeNew === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    passwordToggleIconRetype() {
      return this.passwordFieldTypeRetype === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
  methods: {
    resetForm() {
      this.localOptions = JSON.parse(JSON.stringify(this.informationData))
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
