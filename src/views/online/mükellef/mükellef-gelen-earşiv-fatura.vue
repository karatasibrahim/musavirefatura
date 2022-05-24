<template>
  <div>
    <app-table
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Gelen E-Arşiv Sorgulama'"
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
import AppTable from "@core/components/app-table/AppTable.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    AppTable,
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
        title: [],
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      items:[],
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
      mukelellefler:[],
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Unvan",
          caption: "Gelen Unvan",
        },
        {
          dataField: "FaturaNo",
          caption: "Fatura No",
        },
        {
          dataField: "Vergiler",
          caption: "Vergiler",
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
          dataField: "Odenecek",
          caption: "Ödenecek",
        },
        {
          dataField: "Doviz",
          caption: "Döviz",
        },
        {
          dataField: "Aciklama",
          caption: "Açıklama",
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
    ...mapActions(["fecthGelenEarsivFat"]),
    fecthGelenFat(){
       this.items=[]
  this.fecthGelenEarsivFat([this.Mukellefdataget.MukellefId])
this.setList()
    },
    setList(){
   this.items=this.GelenearsivDataGet
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
        ...mapGetters(['reMukellef',"reGelenArsiv"]),
    Mukellefdataget(){
      return this.reMukellef
    },
GelenearsivDataGet(){
  return this.reGelenArsiv
}
  },
  mounted(){
    console.log(this.items);
    this.fecthGelenFat();
  }
};
</script>

<style></style>