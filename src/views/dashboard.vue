<template>
 
</template>

<script>
import stats from "./stats.vue";
import HomeTable1 from "@core/components/app-table/HomeTable1.vue";
import HomeTable2 from "@core/components/app-table/HomeTable2.vue";

import HomeChart from "@/@core/components/charts/HomeChart.vue";

import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import mockData from "./../services/online/finance/service";
import lng from "./utils/strings";

export default {
    components: {
        stats,
        HomeTable1,
        HomeTable2,
        HomeChart,
        BRow,
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
        title: null,
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      items: mockData.beyannameDatasi,
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
          dataField: "Beyanname",
          caption: "Beyanname",
        },
        {
          dataField: "Toplam",
          caption: "Toplam",
        },
        {
          dataField: "Onaylı",
          caption: "Onaylı",
        },
        {
          dataField: "Kalan",
          caption: "Kalan",
        },
        {
          dataField: "Durum",
          caption: "Durum",
        },
      ],
      columns2: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Bildirgeler",
          caption: "Bildirgeler",
        },
        {
          dataField: "Toplam",
          caption: "Toplam",
        },
        {
          dataField: "Onaylı",
          caption: "Onaylı",
        },
        {
          dataField: "Kalan",
          caption: "Kalan",
        },
        {
          dataField: "Durum",
          caption: "Durum",
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
  },
}
</script>

<style>
.respon {
  width: 100%;
  display: flex; 
  gap: 15px;
}
@media (max-width: 1280px) {
  .respon {
    flex-wrap: wrap;
  }
}
</style>