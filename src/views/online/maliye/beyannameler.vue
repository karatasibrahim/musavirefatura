<template>
  <div>
    <app-table
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="id"
      :items="beyannameData"
      :totalRows="16"
      :title="'Beyannameler'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->

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
    

  </div>
</template>

<script>
import AppTable from "@core/components/app-table/AppTable.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";

import { mapGetters , mapActions} from "vuex";
    let arr=[]
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

        ),
      },
      id:"",
      //#endregion
      listRequest: {
        startDate: new Date(),
        endDate: new Date( ),
        type: [],
        title: [],
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/0012167353%2FBEYANNAME%2F10l09o1t551oys.pdf?alt=media",
      items: [],
      unvanlar: [],
      turler: [],
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "unvan",
          caption: "Ünvan",
        },
        {
          dataField: "beyannameTuru",
          caption: "Kodu",
        },
        {
          dataField: "vergiDairesi",
          caption: "Vergi Dairesi",
        },
        {
          dataField: "tckn",
          caption: "T.C. Kimlik No",
        },
        {
          dataField: "yuklemezamani",
          caption: "Tarih",
        },
        {
          dataField: "beyannameTuru",
          caption: "Türü",
        },
        {
          dataField: "donem",
          caption: "Dönem",
        },
        {
          dataField: "FisNo",
          caption: "Fiş No",
        },
        {
          dataField: "beyan_pdf",
          caption: "Beyan Pdf",
          cellTemplate: "beyanColumnTemplate",
        },
        {
          dataField: "tahak_pdf",
          caption: "Tahakkuk Pdf",
          cellTemplate: "tahakkukColumnTemplate",
        },
        {
          dataField: "Toplam",
          caption: "Tutar",
        },
      ],
      mukellefid: "",
      userEmail: "",
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
    ...mapGetters(["rePerson", "reMukellef", "reBeyanname"]),
    beyannameData() {
      return this.reBeyanname;
    },
    mukelefData() {
      return this.reMukellef;
    },
    getPerson(){
     return this.rePerson.KullaniciId
      
    }
  },
  methods: {
    queryClick() {
      this.$refs.queryPopup.show();
    },
    inquireClick() {
      
 
    },
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
    /////////////////////////////////
    ...mapActions(["fetchBeyanname"]),
fetch(){
this.fetchBeyanname([this.mukelefData.Unvan])
}
  },
  mounted() {
    this.fetch();
    console.log(typeof this.listRequest.startDate);
  },
};
</script>

<style></style>
