<template>
  <div style="width: 100%">
    <stats />
    <div class="respon">
    <home-table1
      :inquireClick="queryClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Beyanname'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Tarih Seç"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Tarih Seç"
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
      </b-row>
    </b-modal>

    <home-table2
      :inquireClick="queryClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Bildirge'"
      :columns="columns2"
    />
    </div>

    <home-chart> </home-chart>
  </div>
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