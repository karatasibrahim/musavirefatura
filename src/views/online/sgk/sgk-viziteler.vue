<template>
  <div>
    <app-table3
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :trash="trash"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Vizite Sorgulama'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Vizite Sorgula"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Mükellef Seçimi"
            label-for="h-type"
            label-cols-md="4"
          >
            <v-select
              v-model="listRequest.title"
              :options="mükelellefler"
              placeholder="Mükellef Seçiniz"
              label="MükellefSeçimi"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="İlk Dönem"
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
            label="Son Dönem"
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
      title="Görüntüle"
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
  </div>
</template>

<script>
import AppTable3 from "@core/components/app-table/AppTable3.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    AppTable3,
    BRow,
    vSelect,
    BCol,
    BFormGroup,
    BFormDatepicker,
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
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "TakipNo",
          caption: "Takip No",
        },
        {
          dataField: "SiraNo",
          caption: "Sıra No",
        },
        {
          dataField: "Vaka",
          caption: "Vaka",
        },
        {
          dataField: "TC",
          caption: "TC",
        },
        {
          dataField: "Unvan",
          caption: "Ad Soyad",
        },
        {
          dataField: "RaporBaşlangıç",
          caption: "Rapor Başlangıç",
        },
        {
          dataField: "Kontrol",
          caption: "Kontrol",
        },
        {
          dataField: "Durum",
          caption: "Durum",
          
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
    ...mapGetters(['reMukellef','reSgkFirmalar','reCalisan','reSgkVizite']),
    getfirma(){
      return this.reSgkFirmalar
    },
    getCalisan(){
      return this.reCalisan
    },
    getVizite(){
      return this.reSgkVizite
    },
    getMükellef(){
      return this.reMukellef
    }
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
    ...mapActions(['fetchCalisan','fetchSgkVizite']),
    fetchdata(){
      let arr =[]
    this.getfirma.forEach(element => {
    arr.push(element.SubeId) 
      });
      this.fetchCalisan(arr);
      setTimeout(()=>{
     let caalisanİd=[]
     this.getCalisan.forEach(data=>{
       caalisanİd.push(data.CalisanID) 
     })
     console.log(caalisanİd);
     this.fetchSgkVizite(caalisanİd)
      },800)
      setTimeout(()=>{
        console.log("Vizite",this.getCalisan);
let unvan=[]
var expected = this.getfirma.map(a => Object.assign(a,this.getMükellef.find(b => b.MukellefId == a.MukellefId)));
var expected2 = this.getCalisan.map(a => Object.assign(a,expected.find(b => b.SubeId == a.SubeId)));
var expected3 = this.getVizite.map(a => Object.assign(a,expected2.find(b => b.CalisanID == a.CalisanId)));
expected3.forEach(a=>{ this.items.push({Munvan:a.Unvan,Unvan:a.CalisanUnvan, TC:a.TC, TakipNo:a.TakipNo, SiraNo:a.SiraNo,Vaka:a.Vaka,KontrolTarihi:a.KontrolTarihi,OnayDurumu:a.OnayDurumu})})
console.log(this.items,expected3);
this.mükelellefler=[...new Set(unvan)]
      },2000)
    }
  },
  mounted(){
    this.fetchdata()
  }
};
</script>

<style></style>