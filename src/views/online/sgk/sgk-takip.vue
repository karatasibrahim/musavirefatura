<template>
  <div>
    <app-table5
      :inquireClick="queryClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'SGK Takip'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="SGK Takip"
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
          dataField: "GrupKodu",
          caption: "Grup Kodu",
        },
        {
          dataField: "MükellefKodu",
          caption: "Mükellef Kodu",
        },
        {
          dataField: "Ünvan",
          caption: "Ünvan",
        },
        {
          dataField: "ŞubeAdı",
          caption: "Şube Adı",
        },
        {
          dataField: "05510",
          caption: "05510",
        },
        {
          dataField: "00000",
          caption: "00000",
        },
        {
          dataField: "06111",
          caption: "06111",
        },
        {
          dataField: "17103",
          caption: "17103",
        },
        {
          dataField: "06486",
          caption: "06486",
        },
        {
          dataField: "27256",
          caption: "27256",
        },
        {
          dataField: "27103",
          caption: "27103",
        },
        {
          dataField: "46486",
          caption: "46486",
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