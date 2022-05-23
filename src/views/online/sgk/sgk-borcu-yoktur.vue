<template>
  <div>
    <app-table5
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Borcu Yoktur'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="SGK'dan sorgula"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
        <div style="width: 100%; display: flex; justify-content: center; align-items: center; flex-direction: column; gap: 10px">
            <v-select
               style="width: 70%"
             />
            <v-select
               style="width: 70%"
             />
             <v-select
               :options="konular"
               placeholder="Konu Seçiniz"
               style="width: 70%"
             />
            <b-form-datepicker
              id="h-start-date"
              v-model="inquireRequest.startDate"
              :max="inquireMaxDate"
              v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
              :locale="dateTimeLanguage.locale"
               style="width: 70%"
            />
         </div>
    </b-modal>
  </div>
</template>

<script>
import AppTable5 from "@core/components/app-table/AppTable5.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";

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
  },
  data() {
    return {
        konular: [
            "İHALE KONUSU İŞLERLE İLGİLİ",
            "İHALE KONUSU OLMAYAN İŞLERLE İLGİLİ",
            "KOSGEB'E VERİLMEK ÜZERE",
            "TÜBİTAK'a VERİLMEK ÜZERE",
            "T.C. HAZİNE MÜSTEŞARLIĞI'na VERİLMEK ÜZERE",
            "KREDİ GARANTİ FONUNA VERİLMEK ÜZERE",
        ],
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
          dataField: "Tarih",
          caption: "Şube Adı",
        },
        {
          dataField: "Tarih",
          caption: "Tarih",
        },
        {
          dataField: "Kurum",
          caption: "Kurum",
        },
        {
          dataField: "Göster",
          caption: "Göster",
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
};
</script>

<style></style>