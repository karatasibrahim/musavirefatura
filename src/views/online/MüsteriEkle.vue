<template>
       <b-card
      ref="modal-1"
      title="Müşteri Bilgileri"
      ok-only
      size="lg"
      ok-title="Kaydet"

  
    >
      <b-card>
        <div class="m-flex-row">
          <div class="m-input">
            <div class="m-input-c">
              <label>VKN/TCKN *</label>
              <input type="text"  v-model="senderReceiver.vkn " />
            </div>
            <div class="m-input-c">
              <label>Ad</label>
              <input type="text" v-model="senderReceiver.name" />
            </div>
            <div class="m-input-c">
              <label>Soyad</label>
              <input type="text" v-model="senderReceiver.surname" />
            </div>
            <div class="m-input-c">
              <label>Vergi D. Şehir</label>
              <input type="text" v-model="senderReceiver.vergiDSehir" />
            </div>
            <div class="m-input-c">
              <label>Mersis No</label>
              <input type="text" v-model="senderReceiver.MersisNo" />
            </div>
          </div>
          <div class="m-input">
            <div class="m-input-c">
              <label>Unvan *</label>
              <input type="text" v-model="senderReceiver.Unvan" />
            </div>
            <div class="m-input-c">
              <label>Orta Adı</label>
              <input type="text" v-model="senderReceiver.ortaAdi" />
            </div>
            <div class="m-input-c">
              <label>Ticaret Odası</label>
              <input type="text" v-model="senderReceiver.TicOdasi" />
            </div>
            <div class="m-input-c">
              <label>Vergi D.</label>
              <input type="text" v-model="senderReceiver.VergiD" />
            </div>
            <div class="m-input-c">
              <label>Tic. Sic. No</label>
              <input type="text" v-model="senderReceiver.TicSicNo" />
            </div>
          </div>
        </div>
      </b-card>
      <b-tabs>
        <b-tab title="Adres Bilgileri">
          <b-card-text>
              {{ida}}
            <b-button
              class="mb-2"
              type="submit"
              v-b-modal.adressadd
              variant="success"
              :style="[ida==''?{'display':'none'}:{'display':'inline'}]"
            >
              <span class="align-middle">Yeni Adres Ekle</span>
              <feather-icon icon="ArrowRightIcon" class="ml-50" />
            </b-button>
            <app-table
      :pk="id"
      :items="items"
      :totalRows="16"
      :title="'Adres'"
      :columns="columns"
            :showTaxPayerInfoClick="showPdfPopup"

            />
          </b-card-text>
          <b-modal
          ref="adressadd"
            id="adressadd"
            title="Müşteri Bilgileri"
            ok-only
            size="lg"
            ok-title="Accept"
         @ok="AddSenderPersonAdress"
          >
              <div class="m-flex-row">
          <div class="m-input">
            <div class="m-input-c">
              <label>Adres Adı:</label>
              <input type="text" v-model="senderReceiverAdress.adress" />
            </div>
            <div class="m-input-c">
              <label>e-Fatura Alıcı Etiketi:</label>
              <input type="text" v-model="senderReceiverAdress.eFatura" />
            </div>
            <div class="m-input-c">
              <label>Şehir *</label>
              <input type="text" v-model="senderReceiverAdress.city" />
            </div>
            <div class="m-input-c">
              <label>Ülke *</label>
              <input type="text" v-model="senderReceiverAdress.country" />
            </div>
            <div class="m-input-c">
              <label>E-Posta</label>
              <input type="text" v-model="senderReceiverAdress.EPosta" />
            </div>
                    <div class="m-input-c">
              <label>Faks</label>
              <input type="text" v-model="senderReceiverAdress.Faks" />
            </div>
                    <div class="m-input-c">
              <label>Bina Adı</label>
              <input type="text" v-model="senderReceiverAdress.BinaAdi" />
            </div>
                                <div class="m-input-c">
              <label>Daire No </label>
              <input type="text" v-model="senderReceiverAdress.DaireNo " />
            </div>
          </div>
          <div class="m-input">
            <div class="m-input-c">
              <label>Yetkili Kişi:</label>
              <input type="text" v-model="senderReceiverAdress.YetkiliKişi" />
            </div>
            <div class="m-input-c">
              <label>e-İrsaliye Alıcı Etiketi</label>
              <input type="text" v-model="senderReceiverAdress.eirsaliye" />
            </div>
            <div class="m-input-c">
              <label>İlçe *</label>
              <input type="text" v-model="senderReceiverAdress.İlce" />
            </div>
            <div class="m-input-c">
              <label>Web Sitesi</label>
              <input type="text" v-model="senderReceiverAdress.Website" />
            </div>
            <div class="m-input-c">
              <label>Telefon</label>
              <input type="text" v-model="senderReceiverAdress.Telefon" />
            </div>
                       <div class="m-input-c">
              <label>Mahalle/Cadde</label>
              <input type="text" v-model="senderReceiverAdress.MahalleCadde" />
            </div>
                       <div class="m-input-c">
              <label>Bina No </label>
              <input type="text" v-model="senderReceiverAdress.BinaNo " />
            </div>
                       <div class="m-input-c">
              <label>Posta Kodu </label>
              <input type="text" v-model="senderReceiverAdress.PostaKodu " />
            </div>

                    <div class="m-input-c">
              <label>Bayi No </label>
              <input type="text" v-model="senderReceiverAdress.BayiNo" />
            </div>
          </div>
        </div>
          </b-modal>
        </b-tab>
        <b-tab title="Banka Bilgileri">
          <b-button
            class="mb-2"
            type="submit"
            v-b-modal.bankaadd
            variant="success"
             @ok="AddBank"
             :style="[ida==''?{'display':'none'}:{'display':'inline'}]"
          >
            <span class="align-middle">Yeni Banka Ekle</span>
            <feather-icon icon="ArrowRightIcon" class="ml-50" />
          </b-button>
          <b-modal
            id="bankaadd"
            title="Yeni Hesap Bilgisi"
            ok-only
            ok-title="Ekle"
          >
            <div class="m-flex-row">
              <b-row class="m-input">
                <label>Banka Adı</label>
                <input type="text" v-model="bank.Name" />

                <label>IBAN *</label>
                <input type="text" v-model="bank.iban" />
              </b-row>
            </div>
          </b-modal>
          <b-card-text>
            <app-table
              :pk="id"
              :mukellefid="id"
              :items="BankData"
              :selectable="'none'"
              :totalRows="16"
              :title="' '"
              :columns="columnsk"
            />
          </b-card-text>
        </b-tab>
      </b-tabs>
<b-button variant="outline-primary" @click="SetData"> Kaydet  </b-button>
    </b-card>
</template>
<script>
import AppTable from "@core/components/app-table/cariTable.vue";
import mockData from "../../services/online/finance/service";
const kullaniciId = JSON.parse(localStorage.getItem("userData")).userId;

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
  BFormGroup,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import vSelect from "vue-select";
import { mapActions, mapGetters } from "vuex";
import { documentId } from '@firebase/firestore';
export default {
  components: {
    AppTable,
    BRow,
    BTable,
    BFormCheckbox,
    BContainer,
    BTabs,
    BTab,
    BCol,
    BCardGroup,
    BFormSelect,
    BFormGroup,
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
   data() {
    return {
      ida:"",
      id:"",
      //#region Sorgulama Popup
      inquireRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
      },
      bank:{},
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
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "adress",
          caption: "Adres Adı",
        },
        {
          dataField: "İlce",
          caption: "İlçe",
        },
        {
          dataField: "city",
          caption: "Şehir",
        },
        {
          dataField: "Telefon",
          caption: "Telefon",
        },
        {
          dataField: "EPosta",
          caption: "E-posta",
        },
        {
          dataField: "Müşteri Tipi",
          caption: "Website",
        },
        {
          dataField: "İşlemler",
          cellTemplate: "AddAndDelete",
        },

      ],
          columnsk: [
        {
          dataField: "UserId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Name",
          caption: "Banka Adi",
        },
        {
          dataField: "iban",
          caption: "IBAN",
        },
      ],
            senderReceiver: {
        vkn: "",
        name: "",
        surname: "",
        vergiDSehir: "",
        vergiD: "",
        MersisNo: "",
        Unvan: "",
        ortaAdi: "",
        TicOdasi: "",
        VergiD: "",
        TicSicNo: "",
        kullaniciId: kullaniciId,
      },
      senderReceiverAdress:{
        adress:"",
eFatura:"",
city:"",
country:"",
EPosta:"",
Faks:"",
BinaAdi:"",
DaireNo:"",
BayiNo:"",
PostaKodu:"",
BinaNo:"",
MahalleCadde:"",
Telefon:"",
İlce:"",
Website:"",
eirsaliye:"",
YetkiliKişi:"",
kullaniciId:kullaniciId,
path:""
},
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
 watch:{
'senderReceiverAdress.path'(){
    console.log(this.senderReceiverAdress);
}
 },
  methods: {
    ...mapActions(['FetchAllPerson','UpdateNewAlici','UptadeAdressa','AddNewPersonAdress','AddNewBank']),
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
    fetchdata(){
      this.FetchAllPerson()
    },
UpdateData(e){
  console.log(e);
},
DeleteData(e){
  console.log(e);
},
SetData(){
    let datas;
   if(this.$route.params.data!=undefined){
   let documentId=this.senderReceiver.id;
   delete this.senderReceiver.id;
   delete this.senderReceiver.adress;
    console.log({...this.senderReceiver,CariAdres:""});
    datas={data:{...this.senderReceiver,CariAdres:""},id:documentId}
}else{
datas={data:{...this.senderReceiver,CariAdres:""}}
}
console.log(datas);
    this.UpdateNewAlici(datas);
},
   AddSenderPersonAdress(){
      if(this.senderReceiverAdress.hasOwnProperty("path")){
        let id=this.senderReceiverAdress.path.split("/")[1]
    delete this.senderReceiverAdress.path
    console.log(id,this.senderReceiverAdress);
this.UptadeAdressa({data:this.senderReceiverAdress,id:id})
      }else{
        this.AddNewPersonAdress(this.senderReceiverAdress)
     }
    },
       AddBank() {
      this.AddNewBank(this.bank);
    },
  },
  mounted() {
      console.log(this.$route.params.data);
         if(this.$route.params.data!=undefined){
   this.senderReceiver= this.$route.params.data;
  this.ida=this.$route.params.data.id
   this.items.push(this.$route.params.data.adress)
   console.log(  this.senderReceiverAdress);
         }
  },
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
  justify-content: space-between;
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
  width: 90%;
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
.m-flex-row > .m-input input {
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
  padding: 4px 8px;
  width: 67%;
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