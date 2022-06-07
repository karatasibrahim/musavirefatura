<template>
    <div class="address">
                <!-- Optional default data cell scoped slot -->
                <div >
                  <label >Notlar</label>
                  <input type="text" v-model="localAddress.not" />
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
  name: 'Irsaliye',
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
        { value: "Kg-Metre kare", text: "Kg-Metre kare" },
        { value: "Adet(Unit)", text: "Adet(Unit)" },
        {
          value: "Ton Başına Taşıma Kapasite",
          text: "Ton Başına Taşıma Kapasite",
        },
        { value: "Çift", text: "Çift" },
        { value: "Brüt Kalori Değer", text: "Brüt Kalori Değer" },
        { value: "Bin Litre", text: "Bin Litre" },
        { value: "Fıssıle İzotop Gramı", text: "Fıssıle İzotop Gramı" },
        { value: "Gram", text: "Gram" },
        { value: "Groos Ton", text: "Groos Ton" },
        { value: "Yüz Adet", text: "Yüz Adet" },
        { value: "Kilogram Potasyum Oksit", text: "Kilogram Potasyum Oksit" },
        {
          value: "KURUTULMUŞ NET AĞIRLIKLI KİLOGRAMI",
          text: "KURUTULMUŞ NET AĞIRLIKLI KİLOGRAMI",
        },
        { value: "Kilogram-Adet", text: "Kilogram-Adet" },
        {
          value: "DİFOSFOR PENTAOKSİT KİLOGRAMI",
          text: "DİFOSFOR PENTAOKSİT KİLOGRAMI",
        },
        { value: "KİLOGRAM", text: "KİLOGRAM" },
        {
          value: "HİDROJEN PEROKSİT KİLOGRAMI",
          text: "HİDROJEN PEROKSİT KİLOGRAMI",
        },
        {
          value: "METİL AMİNLERİN KİLOGRAMI",
          text: "METİL AMİNLERİN KİLOGRAMI",
        },
        { value: "AZOTUN KİLOGRAMI", text: "AZOTUN KİLOGRAMI" },
        {
          value: "KİLOGRAM POTASYUM HİDROKSİT",
          text: "KİLOGRAM POTASYUM HİDROKSİT",
        },
        { value: "%90 KURU ÜRÜN KİLOGRAMI", text: "%90 KURU ÜRÜN KİLOGRAMI" },
        {
          value: "SODYUM HİDROKSİT KİLOGRAMI",
          text: "SODYUM HİDROKSİT KİLOGRAMI",
        },
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