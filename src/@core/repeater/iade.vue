<template>
    <div class="address">

                <!-- Optional default data cell scoped slot -->
                <div >
                  <label >Fatura No</label>
                  <input type="text" v-model="localAddress.FaturaNo" />
                </div>

                <div >
                  <label >Düzenlenme Tarihi</label>
                          <flat-pickr
           v-model.number="localAddress.irsTarih"
          class="form-control"
        />
                </div>
    </div>
</template>
<script>
import {
  BRow,
  BFormCheckbox,
  BTable,
  BContainer,
  BCol,
  BButton,
  BModal,
  BCardGroup,
  BInputGroup,
  BFormSelect,
  BCard,
  BCardText,
  BFormInput,
  BDropdown,
  BDropdownItem,
  BInputGroupPrepend,
  BFormTextarea,
  BTabs,
  BTab,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";

import vSelect from "vue-select";
export default {
  name: 'iade',
    components: {
    BRow,
    BTable,
    BFormCheckbox,
    BContainer,
    BTabs,
    BTab,
    BCol,
    BCardGroup,
    BFormSelect,
    BDropdown,
    BFormTextarea,
    BDropdownItem,
    BCard,
    BButton,
    BCardText,
    BInputGroupPrepend,
    BFormInput,
    vSelect,
    BInputGroup,
    flatPickr,
    BModal,
  },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data(){
    return{
       Unit: [
      { value:"DAY",text:"Gün" },
        { value:"MON",text:"Ay" },
        { value:"ANN",text:"Yıl" },
        { value:"HUR",text:"Saat" },
        { value:"D61",text:"Dakika" },
        { value:"D62",text:"Saniye" },
        { value:"C62" ,text:"Adet" },
        { value:"PA",text:"Paket" },
        { value:"BX",text:"Kutu" },
        { value:"MGM",text:"mg" },
        { value:"GRM",text:"g" },
        { value:"KGM",text:"kg" },
        { value:"LTR",text:"lt" },
        { value:"TNE",text:"ton" },
        { value:"NT",text:"Net Ton" },
        { value:"GT",text:"Gross ton" },
        { value:"MMT",text:"mm" },
        { value:"CMT",text:"cm" },
        { value:"MTR",text:"m" },
        { value:"KTM",text:"km" },
        { value:"MLT",text:"ml" },
        { value:"MMQ",text:"mm3" },
        { value:"CMK",text:"cm2" },
        { value:"CMQ",text:"cm3" },
        { value:"MTK",text:"m2" },
        { value:"MTQ",text:"m3" },
        { value:"KJO",text:"kJ" },
        { value:"CLT",text:"cl" },
        { value:"CT", text:"KARAT" },
        { value:"KWH", text:"KWH" },
        { value:"CCT", text:"Ton baş.taşıma kap." },
        { value:"D30", text:"Brüt kalori" },
        { value:"D40", text:"1000 lt" },
        { value:"LPA", text:"Saf alkol lt" },
        { value:"B32", text:"kg.m2" },
        { value:"NCL", text:"Hücre adet" },
        { value:"PR", text:"Çift" },
        { value:"R9", text:"1000 m3" },
        { value:"SET", text:"Set" },
        { value:"T3", text:"1000 adet" },
      ],
            fields: [
        "#",
        "Ürün-Hizmet",
        "Miktar",
        "Birim",
        "BirimFiyati",
        "İskonto-yüzde",
        "İskonto",
        "KDV",
        "ToplamFiyat",
        "İşlemler",
      ],
    }
  },
  methods:{
          calculation(field) 
      {console.log(field);
      let cal = field.quantity * field.unitPrice;

      //İskonto değeri hesaplanmasi
      let YüzdeIskonto = field.discounty / 100;
      field.discountt = YüzdeIskonto;

      let iskonto = cal - cal * YüzdeIskonto;
      console.log(iskonto);
      //KDV hesaplanması
      let Brüt;
      let KdvHesaplama;
      if (field.KDV != 0) {
        if (field.discounty != 0) {
          Brüt = iskonto;
        } else {
          Brüt = cal;
        }
        console.log(Brüt);
        KdvHesaplama = Brüt * (field.KDV / 100) + Brüt;
        console.log(KdvHesaplama);
        field.total = KdvHesaplama;
      } else {
        if (field.discounty != 0) {
          field.total = iskonto;
        } else {
          field.total = cal;
        }
      }
    },
  },
  computed: {
    localAddress: {
      get () { return this.value },
      set (localAddress) { this.$emit('input', localAddress) }
    }
  }
}
</script>

<style scoped lang="scss">

.address{
        display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}
.address div{
  padding-inline: 10px;
}
.address div input{
  width: 100%;
  border: 1px solid #d8d6de;
    border-radius: 0.357rem;
    padding: 4px 8px;
}
.row{
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label{
  text-align: left;
  margin-bottom: 4px;
}

input{
  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--def-border-base);
}
</style>