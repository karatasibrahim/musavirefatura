<template>
<div>
<b-card>
  <b-form>
  <h4>Gelir İdaresi Başkanlığı </h4>
      <b-row>
        <!-- old password -->
        
        <b-col md="4">
          <b-form-group
            label="Gib Kodu"
            label-for="account-old-password"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-old-password"
                v-model="getSifre.GibKodu"
                name="old-password"
                :type="passwordFieldTypeOld"
                placeholder=""
              />
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconOld"
                  class="cursor-pointer"
                  @click="togglePasswordOld"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
             <b-col md="4">
          <b-form-group
            label-for="account-new-password"
            label="Gib Parola"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-new-password"
                v-model="getSifre.GibParola"
                :type="passwordFieldTypeNew"
                name="new-password"
                placeholder=""
              />
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconNew"
                  class="cursor-pointer"
                  @click="togglePasswordNew"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label-for="account-retype-new-password"
            label="Gib Şifre"
          >
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-retype-new-password"
                 v-model="getSifre.GibSifre"
                :type="passwordFieldTypeRetype"
                name="retype-password"
                placeholder=""
              />
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconRetype"
                  class="cursor-pointer"
                  @click="togglePasswordRetype"
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
  <b-form>
   <h4>Eko SMMM </h4>
      <b-row>
        <!-- old password -->
        
        <b-col md="4">
          <b-form-group
            label="Eko Smmm Url"
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
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconOld"
                  class="cursor-pointer"
                  @click="togglePasswordOld"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
             <b-col md="4">
          <b-form-group
            label-for="account-new-password"
            label="Eko Smmm Kullanıcı Adı"
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
                  :icon="passwordToggleIconNew"
                  class="cursor-pointer"
                  @click="togglePasswordNew"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="4">
          <b-form-group
            label-for="account-retype-new-password"
            label="Eko Smmm Şifre"
          > 
            <b-input-group class="input-group-merge">
              <b-form-input
                id="account-retype-new-password"
                v-model="getSifre.EkoSmmmSifre"
                :type="passwordFieldTypeRetype"
                name="retype-password"
                placeholder=""
              />
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconRetype"
                  class="cursor-pointer"
                  @click="togglePasswordRetype"
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
      
   
     
    </b-form>
     <b-form>
      <h4>TürMob Bilgileri </h4>
      <b-row>
        <!-- old password -->
        
        <b-col md="6">
          <b-form-group
            label="TürMob Kodu"
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
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconOld"
                  class="cursor-pointer"
                  @click="togglePasswordOld"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
         
        <b-col md="6">
          <b-form-group
            label-for="account-retype-new-password"
            label="TürMob Şifre"
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
                  @click="togglePasswordRetype"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <!--/ old password -->
      </b-row>
       <h4>EBirlik Bilgileri </h4>
      <b-row>
        <!-- old password -->
        
        <b-col md="6">
          <b-form-group
            label="EBirlik T.C"
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
              <b-input-group-append is-text>
                <feather-icon
                  :icon="passwordToggleIconOld"
                  class="cursor-pointer"
                  @click="togglePasswordOld"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
         
        <b-col md="6">
          <b-form-group
            label-for="account-retype-new-password"
            label="E-Birlik Şifre"
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
                  @click="togglePasswordRetype"
                />
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <!--/ old password -->
      </b-row>
      <b-row>
       
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-1 mr-1"
            @click="uptadedata"
          >
            Kaydet
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            type="reset"
            variant="outline-secondary"
            class="mt-1"
          >
            İptal
          </b-button>
        </b-col>
        <!--/ buttons -->
      </b-row>
    </b-form>
  </b-card>
  </div>
</template>

<script>
import {
  BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard, BInputGroup, BInputGroupAppend,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import {mapActions,mapGetters} from "vuex"
export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,
    BInputGroup,
    BInputGroupAppend,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
     
      newPasswordValue: '',
      RetypePassword: '',
      passwordFieldTypeOld: 'password',
      passwordFieldTypeNew: 'password',
      passwordFieldTypeRetype: 'password',
      data:{}
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
    ...mapGetters(["rePerson","resifre"]),
    getPersonData(){
      return this.rePerson
    },
    getSifre(){
return this.resifre
    }
  },
  methods: {
    togglePasswordOld() {
      this.passwordFieldTypeOld = this.passwordFieldTypeOld === 'password' ? 'text' : 'password'
    },
    togglePasswordNew() {
      this.passwordFieldTypeNew = this.passwordFieldTypeNew === 'password' ? 'text' : 'password'
    },
    togglePasswordRetype() {
      this.passwordFieldTypeRetype = this.passwordFieldTypeRetype === 'password' ? 'text' : 'password'
    },
    ...mapActions(["updatePersonData","fetchsifreler"]),
    fetchSifre(){
      console.log(this.getPersonData);
this.fetchsifreler([this.getPersonData.KullaniciId])
    },
    uptadedata(){
      console.log(this.getSifre)
      this.updatePersonData(this.getSifre)
    }
  },
  mounted(){
this.fetchSifre()

  }
}
</script>
