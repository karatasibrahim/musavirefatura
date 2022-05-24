<template>
  <div>
    <app-table2
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :trash="trash"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Giden E-Arşiv Sorgulama'"
      :columns="columns"
    />

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
import AppTable2 from "@core/components/app-table/AppTable2.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import {mapGetters,mapActions} from "vuex"
export default {
  components: {
    AppTable2,
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
    ...mapGetters(["reGidenArsiv","reMukellef"]),
    getGidenArsiv(){
      return this.reGidenArsiv
    },
    getMukellef(){
      return this.reMukellef
    }
  },
  data() {
    return {
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
      items:[],
      unvanlar: [],
      turler: ["Onaylandı","Onaylanmadı"],
      trash:"",
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "BelgeNumarasi",
          caption: "Belge Numarası",
        },
        {
          dataField: "AliciVknTckn",
          caption: "Alıcı VKN/TC",
        },
        {
          dataField: "AliciUnvan",
          caption: "Alıcı Ünvan",
        },
        {
          dataField: "BelgeTarihi",
          caption: "Belge Tarihi",
        },
        {
          dataField: "BelgeTuru",
          caption: "Belge Türü",
        },
        {
          dataField: "OnayDurumu",
          caption: "Onay Durumu",
        },
        {
          dataField: "Tutar",
          caption: "Tutar",
        },
        {
          dataField: "İçerik",
          caption: "İçerik",
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
    },
    ...mapActions(["fetchGidenEarsiv"]),
    fetchGidenars(){

    this.fetchGidenEarsiv([this.getMukellef.MukellefId]);
    this.setArr();
    },
    setArr(){ 
      let durumarr=[] 
      this.items=this.getGidenArsiv;
this.getGidenArsiv.forEach(data=>{
  durumarr.push(data.OnayDurumu)
})
console.log(durumarr);

    }
  },
  mounted(){
    this.fetchGidenars()
  }
};
</script>

<style></style>