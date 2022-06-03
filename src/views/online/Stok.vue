<template>
<div>
                      <b-button
                   variant="outline-primary"
                   v-b-modal.AddStok
                  >
                  
                    Yeni Müşteri Ekle 
                
                  </b-button>
        <app-table
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
        :UpdateData="UpdateData"
      :DeleteData="DeleteData"
      :pk="id"
      :items="items"
      :totalRows="16"
      :title="'Stok'"
      :columns="columns"
    />
    <b-modal
      id="AddStok"
      ref="AddStok"
      title="Stok Ekle"
      ok-title="Kaydet"
      cancel-title="İptal"
      size="lg"
      cancel-variant="outline-secondary"
      @ok="SaveStok"
    >
   <b-card
                ref="taxPayerPopup"
                title="Müşteri Bilgileri"
                size="lg"
                centered
                no-close-on-backdrop
              >
              
                <b-card-text>
                <div class="m-flex-row">
                    <div class="m-input">
                      <div class="m-input-c">
                        
                         <label class="col-5 pl-0">Satıcı Ürün Kodu*</label>
                        <b-form-input
                          type="text"
                          v-model="stok.SaticiKod"
                           :state="stok.SaticiKod==''?false:true"
                          
                        />
                      </div>
                      <div class="m-input-c">
                         <label class="col-5 pl-0">Alıcı Ürün Kodu</label>
                        <b-form-input
                          type="text"
                          v-model="stok.AliciKodu"
                        />
                      </div>
                      <div class="m-input-c">
                         <label class="col-5 pl-0" >Ürün/Hizmet Birimi*</label>
                                  <b-form-select
                :options="Unit"
                size="sm"
                v-model="stok.unit"
                                           :state="stok.unit==''?false:true"

              />
                      </div>
                    <div class="m-input-c">
                         <label class="col-5 pl-0">Birim Fiyat Alış</label>
                        <b-form-input
                          type="text"
                          v-model="stok.BirimFiyat"
                        />
                      </div>
                         <div class="m-input-c">
                         <label class="col-5 pl-0">KDV Alış*(%)</label>
                        <b-form-input
                          type="text"
                          v-model="stok.KdvAlis"
                          required
                                                     :state="stok.KdvAlis==''?false:true"

                        />
                      </div>
                           <div class="m-input-c">
                         <label class="col-5 pl-0">Ürün/Hizmet Etiket</label>
                        <b-form-input
                          type="text"
                          v-model="stok.Etiket"
                        />
                      </div>
                      <div class="m-input-c">
                         <label class="col-5 pl-0">GTİP Numarası</label>
                        <b-form-input
                          type="text"
                          v-model="stok.GtipNo"
                        />
                      </div>
                    </div>
                    <div class="m-input">
                      <div class="m-input-c">
                         <label class="col-5 pl-0">Ürün/Hizmet Adı*</label>
                        <b-form-input
                          type="text"
                          v-model="stok.UrunAd"
                                                     :state="stok.UrunAd==''?false:true"

                          required
                        />
                      </div>
                      <div class="m-input-c">
                         <label class="col-5 pl-0">Üretici Ürün Kodu</label>
                        <b-form-input
                          type="text"
                          v-model="stok.UreticiKod"
                        />
                      </div>
                      <div class="m-input-c">
                         <label class="col-5 pl-0">Para Birimi*</label>
                       <b-form-select
                          v-model="stok.ParaBirimi"
                          :options="money"
                          size="sm"
                                :state="stok.ParaBirimi === null ? false : true"
                        />
                      </div>
                      <div class="m-input-c">
                         <label class="col-5 pl-0">Birim Fiyat Satış</label>
                        <b-form-input
                          type="text"
                          v-model="stok.BrmFiyatSatis"
                        />
                      </div>
                         <div class="m-input-c">
                         <label class="col-5 pl-0">KDV Satış*</label>
                        <b-form-input
                          type="text"
                          v-model="stok.KdvSatis"
                                                     :state="stok.KdvSatis==''?false:true"

                        />
                      </div>
                         <div class="m-input-c">
                         <label class="col-5 pl-0">Ürün/Hizmet Açıklaması</label>
                        <b-form-input
                          type="text"
                          v-model="stok.UrunAciklama"
                        />
                      </div>
                         <div class="m-input-c">
                         <label class="col-5 pl-0">KDV Tevkifatı</label>
                        <b-form-input
                          type="text"
                          v-model="stok.KdvTevkifat"
                        />
                      </div>
                    </div>
                  </div>
                </b-card-text>
              </b-card>
    </b-modal>

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Beyanname Sorgula"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Başlangıç Tarihi"
            label-for="h-start-date"
            label-cols-md="4"
          >
            <b-form-datepicker
              id="h-start-date"
              v-model="inquireRequest.startDate"
              :max="inquireMaxDate"
              v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
              :locale="dateTimeLanguage.locale"
              class="mb-1"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Bitiş Tarihi"
            label-for="h-end-date"
            label-cols-md="4"
          >
            <b-form-datepicker
              id="h-end-date"
              v-model="inquireRequest.endDate"
              :min="inquireMinDate"
              v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
              :locale="dateTimeLanguage.locale"
              class="mb-1"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>

    <b-modal
      ref="pdfPopup"
      title="Beyanname Görüntüle"
      size="xl"
      scrollable
      ok-only
      ok-title="Kapat"
      no-stacking
    >
      <iframe
        :src="this.activePdfUrl"
        width="100%"
        height="700"
        frameborder="0"
      >
      </iframe>
    </b-modal>
    

    <b-modal
      ref="listPopup"
      title="Listele"
      ok-title="Listele"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="listRunClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group label="Ünvan" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.title"
              :options="unvanlar"
              multiple
              placeholder="Ünvan Seçiniz"
              label="Unvan"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Tür" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.type"
              :options="turler"
              multiple
              placeholder="Tür Seçiniz"
              label="BeyanTuru"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Başlangıç Tarihi"
            label-for="h-start-date"
            label-cols-md="4"
          >
            <b-form-datepicker
              id="h-start-date"
              v-model="listRequest.startDate"
              :max="listMaxDate"
              v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
              :locale="dateTimeLanguage.locale"
              class="mb-1"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Bitiş Tarihi"
            label-for="h-end-date"
            label-cols-md="4"
          >
            <b-form-datepicker
              id="h-end-date"
              v-model="listRequest.endDate"
              :min="listMinDate"
              v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
              :locale="dateTimeLanguage.locale"
              class="mb-1"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>
</div>
</template>
<script>
import AppTable from "@core/components/app-table/cariTable.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker,BTabs, BTab,    BFormSelect,
    BButton,  BCard,  BFormInput,
    BCardText, } from "bootstrap-vue";
import lng from "../utils/strings";
import mockData from "../../services/online/finance/service";
import vSelect from "vue-select";
const kullaniciId = JSON.parse(localStorage.getItem("userData")).userId;
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import {mapActions} from 'vuex'
export default {
  components: {
    AppTable,
      BCard,
    BCardText,
    BTabs, BTab,
    BRow,
    vSelect,
    BCol,
      BFormInput,
    BFormGroup,
    BFormDatepicker,
        BFormSelect,
    BButton,
  },
   data() {
    return {
      id:"",
      //#region Sorgulama Popup
      dateTimeLanguage: lng.dateTimeLanguage,
      inquireRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
      },
      mükelellefler:[],
      //#endregion
      listRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
        type: null,
        title: null,
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      items: [],
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
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
      money: [
        { value: "Türk Lirasi", text: "Türk Lirasi" },
        { value: "Euro", text: "Euro" },
        { value: "US Dolar", text: "US Dolar" },
        { value: "İngiliz Sterlini", text: "İngiliz Sterlini" },
      ],
      stok:{
        SaticiKod:"",
AliciKodu:"",
KdvAlis:"",
BirimFiyat:"",
Etiket:"",
GtipNo:"",
UrunAd:"",
UreticiKod:"",
ParaBirimi:"",
BrmFiyatSatis:"",
KdvSatis:"",
UrunAciklama:"",
KdvTevkifat:"",
kullaniciId:kullaniciId
      },
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "UreticiKod",
          caption: "Ürün/Hizmet Kodu",
        },
        {
          dataField: "UrunAd",
          caption: "Ürün/Hizmet Adı",
        },
        {
          dataField: "GtipNo",
          caption: "GTİP Numarası",
        },
        {
          dataField: "KdvAlis",
          caption: "KDV Alış (%)",
        },
        {
          dataField: "KdvSatis",
          caption: "KDV Satış (%)",
        },
        {
          dataField: "BirimFiyat",
          caption: "Birim Fiyat Alış",
        },
        {
          dataField: "BrmFiyatSatis",
          caption: "Birim Fiyat Satış",
        },
        {
          dataField: "unit",
          caption: "Birim",
          
        },
       {
          dataField: "Durum",
          caption: "İşlemler",
          cellTemplate:"AddAndDelete"
        }
      ],
    };
  },
  computed: {
    inquireMinDate() {
      return this.inquireRequest.startDate;
    },
    inquireMaxDate() {
      return this.inquireRequest.endDate;
    },
    listMinDate() {
      return this.listRequest.startDate;
    },
    listMaxDate() {
      return this.listRequest.endDate;
    },

  },
 
  methods: {
    trash(){},
    queryClick() {
      this.$refs.queryPopup.show();
    },
    inquireClick() {},
    showPdfPopup(pdfUrl) {
      //this.activePdfUrl=pdfUrl;
      this.$refs.pdfPopup.show();
    },
    downloadClick(e) {},
    printClick(e) {},
    sendClick(e) {},
    listClick() {
      this.$refs.listPopup.show();
    },
    listRunClick() {
      console.log(this.listRequest.type);
    },
    ...mapActions(["AddStok","FecthStok","UptadeStok","DeleteStok"]),
SaveStok(){
console.log(this.stok);
if(this.stok.id && this.stok.KdvSatis!="" && this.stok.UrunAd!="" && this.stok.KdvAlis!=""&& this.stok.unit!="" && this.stok.SaticiKod!=""){
  console.log("güncelle");
  const data={
    data:this.stok,
    id:this.stok.id
  }
  delete this.stok.id
  this.UptadeStok(data)
}else{
  if(this.stok.KdvSatis!="" && this.stok.UrunAd!="" && this.stok.KdvAlis!=""&& this.stok.unit!="" && this.stok.SaticiKod!=""){
  this.AddStok(this.stok)
  this.fetch(kullaniciId)
}else {
        this.$toast({
          component: ToastificationContent,
          position: "top-right",
          props: {
            title: `Uyarı`,
            icon: "AlertTriangleIcon",
            variant: "danger",
            text: `Değerleri Kontrol Ediniz`,
          },
        });
      }
}


},
fetch(){
this.FecthStok(kullaniciId).then(res=>{
  console.log(res);
  this.items=res
})
},
UpdateData(e){
  this.$refs["AddStok"].show()
  this.stok=e
},

DeleteData(e){
  console.log(e.id);
  this.DeleteStok(e.id)
let fin=  this.items.findIndex(el=>{
return el.id==e.id
})
 this.items.splice(fin,1)

}
  },
  mounted(){
this.fetch()
  }
};
</script>


<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
.tabs {
  width: 100%;
}
.modal-header {
  background: #ff503c !important;
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 71%;
  }
  [dir="ltr"] .modal-xl {
    margin-left: 11%;
    margin-right: 11%;
  }
}

.feather-trash-2 {
  color: #ff4e4f;
  width: 16px;
  height: 16px;
}
.m-popup {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}
.m-popup-nav {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 35px;
  margin: 0;
  padding: 0;
  user-select: none;
  cursor: pointer;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.39);
  margin-bottom: 5px;
}
.m-popup-nav > li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 7px;
  border-radius: 5px;
}
.m-popup-nav > li.active {
  background: rgb(236, 236, 236);
}
.m-popup-nav > li > i[class="gg-key"] {
  margin-left: 3px;
  margin-right: 10px;
}
.m-flex-row {
  width: 100%;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
}
.button-table {
  justify-content: flex-end !important;
  gap: 5px;
}
.button-table > .btn {
  width: 33px;
  height: 26px;
  padding: 0px;
}
.button-row {
  justify-content: space-evenly !important;
}
.button-row > button {
  background: #ffff;
  border: none;
  box-shadow: 1px 6px 8px 0px #918989;
}
.button-row > button > img {
  width: 100px;
}

.m-flex-row > .m-input {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.m-input > .m-input-c {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.d-non {
  display: none;
}
h2 {
  margin-bottom: 0px !important;
}
h2 + hr {
  margin-top: 0px !important;
}
.button-wit {
  width: 235px;
}
.w-65 {
  width: 65%;
}
.product-card {
  padding-inline: 10px;
  input,
  select {
    width: 80%;
  }
}
.m-flex-row > .m-input-c label,
.m-flex-row > .m-input label {
  font-size: 13px;
  color: black;
  font-weight: 400;
}
.m-flex-row input,
.tbody-tr td input,
.m-flex-row > .m-input-c input,
.m-flex-row > .m-input input,
.m-flex-row > .m-input select {
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
  padding: 4px 8px;
  width: 100%;
}

.m-flex-row > table > tr > td > input {
  border: none;
}
.m-flex-row > .m-input-c input:focus,
.m-flex-row > .m-input input:focus,
.m-flex-row > table > tr > td > input:focus {
  outline: none;
}
.m-flex-row#m-table {
  max-height: 150px;
  overflow: auto;
}
.m-flex-row table {
  width: 100%;
  border: 1px solid #d8d6de;
}
.m-popup .m-flex-row:nth-child(3) table tr {
  height: 35px;
}
.m-flex-row table tr:nth-child(1) td {
  background-color: rgb(228, 228, 228);
  color: black;
  font-weight: 500;
}
.m-flex-row table tr td:nth-child(1) {
  width: 150px;
}
.m-flex-row table tr td {
  padding: 0 10px;
}
.declaration {
  width: 320px;
  height: 400px;
  background: white;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  border-radius: 0.357rem;
  filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.125));
  padding: 8px;
  overflow-y: scroll;
}
.declaration ul {
  font-weight: 800;
  color: black;
  padding: 0;
  list-style-type: none;
  font-size: 15px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.39);
  padding-bottom: 7px;
  margin: 0;
  margin-bottom: 7px;
}
.declaration ul li {
  display: flex;
  align-items: center;
  gap: 5px;
  color: gray;
  font-size: 13px;
  margin-left: 10px;
}
.v-select {
  width: 90%;
}
.thead-tr th {
  padding: 10px 10px 4px 10px;
}

.tbody-tr td {
  padding: 10px 10px 4px 10px;
}
.tbody-tr td input {
  width: 100%;
}
@media (max-width: 768px) {
  .m-popup-nav {
    gap: 5px;
  }
  .m-flex-row {
    flex-wrap: wrap;
  }
  .m-popup-nav > li {
    padding: 0 5px;
  }
  .m-popup-nav > li > i {
    transform: scale(0.8);
  }
}
/** ICONS */
.gg-info {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: 40px;
}
.gg-info::after,
.gg-info::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 3px;
  width: 2px;
  background: currentColor;
  left: 7px;
}
.gg-info::after {
  bottom: 2px;
  height: 8px;
}
.gg-info::before {
  height: 2px;
  top: 2px;
}
.gg-key {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 6px;
  height: 8px;
  border: 2px solid;
  border-radius: 100px;
  margin-left: -12px;
}
.gg-key::after,
.gg-key::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  right: -12px;
}
.gg-key::before {
  background: currentColor;
  width: 12px;
  height: 2px;
  top: 1px;
}
.gg-key::after {
  width: 5px;
  height: 3px;
  top: 2px;
  border-left: 2px solid;
  border-right: 2px solid;
}
.gg-briefcase {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 16px;
  border: 2px solid;
  border-radius: 2px;
  margin-top: 1px;
}
.gg-briefcase::after,
.gg-briefcase::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
}
.gg-briefcase::before {
  border: 2px solid;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  left: 4px;
  width: 10px;
  height: 4px;
  border-bottom: 0;
  top: -5px;
}
.gg-briefcase::after {
  width: 18px;
  height: 3px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 1px solid transparent;
  box-shadow: 0 2px 0, inset 16px 74px 0;
  top: 4px;
}
.gg-track {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 10px;
  height: 10px;
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px, inset 0 0 0 10px;
  border-radius: 100px;
}
.gg-track::after,
.gg-track::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 3px;
}
.gg-track::before {
  border-left: 4px solid;
  border-right: 4px solid;
  width: 18px;
  height: 2px;
  left: -6px;
  top: 2px;
}
.gg-track::after {
  width: 2px;
  height: 18px;
  border-top: 4px solid;
  border-bottom: 4px solid;
  left: 2px;
  top: -6px;
}
.gg-trash {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 10px;
  height: 12px;
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px, inset -2px 0 0, inset 2px 0 0;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  margin-top: 4px;
}
.gg-trash::after,
.gg-trash::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
}
.gg-trash::after {
  background: currentColor;
  border-radius: 3px;
  width: 16px;
  height: 2px;
  top: -4px;
  left: -5px;
}
.gg-trash::before {
  width: 10px;
  height: 4px;
  border: 2px solid;
  border-bottom: transparent;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  top: -7px;
  left: -2px;
}
.gg-list {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 20px;
  border: 2px solid;
  border-radius: 3px;
}
.gg-list::after,
.gg-list::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 2px;
  height: 2px;
  background: currentColor;
  top: 3px;
  left: 3px;
  box-shadow: 0 4px 0, 0 8px 0;
}
.gg-list::after {
  border-radius: 3px;
  width: 8px;
  left: 7px;
}
.gg-close {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;
}
.gg-close::after,
.gg-close::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 1px;
}
.gg-close::after {
  transform: rotate(-45deg);
}
.table-responsive-sm {
  width: 100%;
  font-size: 15px;
}
hr {
  width: 100%;
  border: 0.3px solid !important;
}
.main-row-style th:nth-child(3) {
  width: 23px;
  padding-inline: 10px;
}
.faaliyetaciklama input {
  width: 100%;
}
.text-nowrap input {
  border-radius: 5px;
  border: none;
  box-shadow: 0px 1px 3px 0px #717070;
  padding: 5px;
  margin: 5px;
}
.text-nowrap input:focus-visible {
  border: 1px solid #28c76f !important;
  outline: none;
}
.main-row-style-hitap th:nth-child(3) {
  width: 31%;
}
.row-style-hitap td:nth-child(3) span input {
  width: 100%;
}
.main-row-style-hitap th:nth-child(4) {
  padding-inline: 2px;
}
</style>