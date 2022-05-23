<template>
  <div>
    <app-table8
      :listClick="listClick"
      :pk="'EbildId'"
      :items="items"
      :totalRows="16"
      :title="'Ödenen G-Geçici'"
      :columns="columns"
    />
    <!-- Listele Popup -->
    <b-modal
      ref="listPopup"
      title="Ödenen G-Geçici"
      no-close-on-backdrop
      ok-title="Listele"
      cancel-title="Kapat"
      cancel-variant="outline-secondary"
      @ok="listRunClick"
    >
      <b-row style="display: flex; justify-content: center">
          <v-select
            v-model="listRequest.startDate.month"
            placeholder="Seç"
            style="width: 70%"
          />
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import AppTable8 from "@core/components/app-table/AppTable8.vue";
import {
  BRow,
  BCol,
  BFormGroup,
  BFormDatepicker,
  BFormCheckbox,
} from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";

export default {
  components: {
    AppTable8,
    BRow,
    BFormCheckbox,
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
  },
  data() {
    return {
      //#region Sorgulama Popup
      dateTimeLanguage: lng.dateTimeLanguage,
      inquireRequest: {
        title: null,
        startDate: {
          month: "",
          year: "",
        },
        endDate: {
          month: "",
          year: "",
        },
      },
      //#endregion
      listRequest: {
        title: null,
        startDate: {
          month: "",
          year: "",
        },
        endDate: {
          month: "",
          year: "",
        },
        docType1: true,
        docType2: true,
        docType3: true,
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      items: mockData.bildirgeler,
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
      columns: [
        {
          dataField: "EbildId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Ünvan",
          caption: "Ünvan",
        },
        {
          dataField: "VergiNo",
          caption: "VergiNo",
        },
        {
          dataField: "VergiDairesi",
          caption: "VergiDairesi",
        },
        {
          dataField: "GİB",
          caption: "GİB'den Gelen Tutar",
        },
      ],
    };
  },
  methods: {
    //#region Ust Bar Butonları
    queryClick() {
      this.$refs.queryPopup.show();
    },
    inquireClick() {},
    downloadClick(e) {},
    printClick(e) {},
    sendClick(e) {},
    listClick() {
      this.$refs.listPopup.show();
    },
    listRunClick() {
      console.log(this.listRequest.type);
    },
    //#endregion

    //#region Boş Function
    emptyClick() {},
    //#endregion

    //#region SAYFA ICIN
    deleteInsuranceClick() {},
    showPdfPopup(pdfUrl) {
      //this.activePdfUrl=pdfUrl;
      this.$refs.pdfPopup.show();
    },
    //#endregion
  },
};
</script>

<style></style>