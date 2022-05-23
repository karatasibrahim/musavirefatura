<template>
  <b-card>
 
    <b-form class="mt-2">
      <b-row>
        <b-col sm="4">
          <b-form-group
            label="Ünvan"
            label-for="account-username"
          >
            <b-form-input
              v-model="getPersonData.Unvan"
              placeholder=""
              name="username"
            />
          </b-form-group>
        </b-col>
        <b-col sm="4">
          <b-form-group
            label="T.c.No"
            label-for="account-name"
          >
            <b-form-input
              v-model="getPersonData.TcNo"
              name="name"
              placeholder=""
            />
          </b-form-group>
        </b-col>
        
        <b-col sm="4">
          <b-form-group
            label="Doğum Tarihi"
            label-for="account-e-mail"
          >
            <b-form-input
              v-model="getPersonData.DogumTarihi"
              name="email"
              placeholder=""
            />

          </b-form-group>
        </b-col>

        
             <b-col sm="4">
               
          <b-form-group
            label="İl"
            label-for="account-e-mail"
          >
             <b-form-select
     v-model="selectedil"
      :options="sortİl"
    />
          </b-form-group>
        </b-col>
             <b-col sm="4">
          <b-form-group
            label="İlçe"
            label-for="account-e-mail"
          >
                <b-form-select
              v-model="selectedilce"
      :options="getIlce"
    />
         

          </b-form-group>
        </b-col>
        
             <b-col sm="4">
          <b-form-group
            label="Telefon"
            label-for="account-e-mail"
          >
            <b-form-input
              v-model="getPersonData.Telefon"
              name="telefon"
              placeholder=""
            />

          </b-form-group>
        </b-col> 

             <b-col sm="4">
          <b-form-group
            label="E-posta"
            label-for="account-e-mail"
          >
            <b-form-input
              v-model="getPersonData.Mail"
              name="eposta"
              placeholder=""
            />

          </b-form-group>
        </b-col>
        <b-col sm="8">
          <b-form-group
            label="Adres"
            label-for="account-company"
          >
            <b-form-input
            id="textarea"
              v-model="getPersonData.Adres"
              name="adres"
              placeholder=""
               
              rows="2"
              
            />
          </b-form-group>
        </b-col>
 

        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-2 mr-1"
            @click="updateData"
          >
            Kaydet
          </b-button>
          <b-button
            v-ripple.400="'rgba(186, 191, 199, 0.15)'"
            variant="outline-secondary"
            type="reset"
            class="mt-2"
            @click.prevent="resetForm"
          >
            İptal
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BFormFile, BButton, BForm, BFormGroup,BFormSelect , BFormInput, BRow, BCol, BAlert, BCard, BCardText, BMedia, BMediaAside, BMediaBody, BLink, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
import '@core/scss/vue/libs/vue-select.scss'
import {mapActions,mapGetters} from "vuex"

export default {
  components: {
    BButton,
    BForm,
    BImg,
    BFormFile,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BAlert,
    BCard,
    BCardText,
    BMedia,
    BMediaAside,
    BMediaBody,
    BFormSelect ,
    BLink,
  },
  directives: {
    Ripple,
  },
  props: {
    generalData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      optionsLocal:"",
      //  JSON.parse(JSON.stringify(this.generalData)),
      profileFile: null,
      selectedil:"",
      selectedilce:""
    }
  },
  methods: {
    ...mapActions(["fetchİlce","fetchİller","updateProfileDate"]),
    resetForm() {
      this.optionsLocal = JSON.parse(JSON.stringify(this.generalData))
    },
    updateData(){
this.getPersonData.il=this.selectedil;
this.getPersonData.ilce=this.selectedilce
console.log(this.getPersonData);
this.updateProfileDate(this.getPersonData)
    },
    fetchil(){
      this.fetchİller()
    },
       
  },
  computed:
  {
...mapGetters(["rePerson","reil","reilce"]),
getPersonData()
{
  return this.rePerson
},
   getİl(){
      return this.reil.map(el=>{
     return {value:el.SehirId,text:el.SehirAdi}
    })
      },
      sortİl(){
return this.getİl.sort()
      },
            getIlce(){
        return this.reilce.map(el=>{
          return {value:el.IlceId,text:el.IlceAdi}
        })
      },
  },
  watch:{
selectedil(){
      this.fetchİlce([this.selectedil])
  console.log(this.selectedil);
}
  },
  setup() {
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, previewEl)

    return {
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },
  mounted(){
    this.fetchil()
  }
}
</script>
