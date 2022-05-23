<template>
  <div>
    <app-table5
      :inquireClick="queryClick"
      :pk="'id'"
      :items="GetBeyan"
      :totalRows="16"
      :title="'Kalan Beyannameler'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Kalan Beyannameler"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-row>
        <b-col cols="6">
          <v-select
            v-model="inquireRequest.startDate.month"
            :options="months"
            placeholder="Ay Seçiniz"
          />
        </b-col>
        <b-col cols="6">
          <v-select
            v-model="inquireRequest.startDate.year"
            :options="years"
            placeholder="Yıl Seçiniz"
          />
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import AppTable5 from "@core/components/app-table/AppTable5.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    AppTable5,
    BRow,
    vSelect,
    BCol,
    BFormGroup,
    BFormDatepicker,
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
    ...mapGetters(['reMukellef','reKalanBeyanname']),
    GetMükellef(){
      return this.reMukellef
    },
    GetBeyan(){
      return this.reKalanBeyanname
    }
  },
  data() {
    return {
      months: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
      ],
      years: ["2018", "2019", "2020", "2021", "2022"],
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
          dataField: "GrupId",
          caption: "Grup Kodu",
        },
        {
          dataField: "MukellefKodu",
          caption: "Mükellef Kodu",
        },
        {
          dataField: "Unvan",
          caption: "Ünvan",
        },
        {
          dataField: "KDV1",
          caption: "KDV1",
        },
        {
          dataField: "MUHSGK",
          caption: "MUHSGK",
        },
        {
          dataField: "POSET",
          caption: "POSET",
        },
        {
          dataField: "KURUMLAR",
          caption: "KURUMLAR",
        },
        {
          dataField: "DAMGA",
          caption: "DAMGA",
        },
        {
          dataField: "KDV2",
          caption: "KDV2",
        },
        {
          dataField: "KDV4",
          caption: "KDV4",
        },
        {
          dataField: "FORMBA",
          caption: "FORMBA",
        },
        {
          dataField: "FORMBS",
          caption: "FORMBS",
        },
        {
          dataField: "TURIZM",
          caption: "TURIZM",
        },
        {
          dataField: "OIV",
          caption: "OIV",
        },
        {
          dataField: "OTV",
          caption: "OTV",
        },
      ],
    };
  },
  methods: {
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
    ...mapActions(['fetchKalanBeyanname']),
    fetchdata(){
console.log(this.GetBeyan);
let mükellefid=[]
this.GetMükellef.forEach(num=>{
  mükellefid.push(num.MukellefId) 
})
this.fetchKalanBeyanname(mükellefid)
      setTimeout(()=>{
// let data=this.GetBeyan.map(a => Object.assign(a,this.GetMükellef.find(b => b.MukellefId == a.MukellefId))) 
// console.log(data); 
// this.items=data.map(a=>{return {TurPropId:a.TurPropId,Unvan:a.Unvan,GrupId:a.GrupId,MukellefKodu:a.MukellefKodu,MukellefId:a.MukellefId}})

      },1000)
    }
  },
  mounted(){
    this.fetchdata()
  }
};
</script>

<style></style>