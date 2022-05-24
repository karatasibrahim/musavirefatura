<template>
  <div>
    <pos-table
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="id"
      :items="items"
      :totalRows="16"
      :title="'Pos Sorgulama'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->

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
import PosTable from "@core/components/app-table/PosTable.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";

import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    PosTable,
    BRow,
    vSelect,
    BCol,
    BFormGroup,
    BFormDatepicker,
  },
 
  data() {
    return {
      //#region Sorgulama Popup
      dateTimeLanguage: lng.dateTimeLanguage,
      id:"",
      inquireRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
      },
      focusdate:false,
      //#endregion
      listRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
        type: null,
        title: [],
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      items: [],
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
      detaylar:[],
      poslar:["Pos Tutarı olanlar","Pos Tutarı Olmayanlar"],
      mukelellefler:[],
      columns: [
        {
          dataField:"PosId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "BankaAdi",
          caption: "Banka Adı",
        },
        {
          dataField: "VergiNo",
          caption: "Vergi No",
        },
        {
          dataField: "Tarih",
          caption: "Tarih",
        },
        {
          dataField: "VergiKimlikNo",
          caption: "Vergi Kimlik No",
        },
        {
          dataField: "Tutar",
          caption: "Tutar",
        },
        {
          dataField: "SorguTarihi",
          caption: "Sorgu Tarihi",
        },
      ],
    };
  },
  watch:{
    'listRequest.startDate'(){
this.focusdate=true
    }
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
    },
...mapActions(["fetchPosSorgu"]),
postDataGet(){  
  this.fetchPosSorgu([this.Mukellefdataget.MukellefId])
  this.setOption()
},
setOption(){
  let bankarr=[];
  let pos=[];
  let detayArr=[]
console.log(this.PosSorguDataGet);
this.items=this.PosSorguDataGet;
this.PosSorguDataGet.forEach(el=>{
  bankarr.push(el.BankaAdi);
  detayArr.push(el.BankaAdi);
this.mukelellefler=[...new Set(bankarr)]
})
}
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
    ...mapGetters(['reMukellef',"rePosSorgu"]),
    Mukellefdataget(){
      return this.reMukellef
    },
PosSorguDataGet(){
  return this.rePosSorgu
}
  },
  mounted(){
this.postDataGet();

  }
};
</script>

<style></style>