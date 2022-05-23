<template>
  <div>
    <app-table4
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'İşe Giriş - Çıkış Sorgulama'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="İşe Giriş - Çıkış Sorgula"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group label="Mükellef Seçimi" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.title"
              :options="mükelellefler"
              placeholder="Mükellef Seçiniz"
              label="MükellefSeçimi"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="İlk Dönem"
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
        <b-col cols="12">
          <b-form-group
            label="Son Dönem"
            label-for="h-end-date"
            label-cols-md="4"
          >
            <b-form-datepicker
              id="h-end-date"
              v-model="inquireRequest.endDate"
              :min="inquireMinDate"
              v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
              :locale="dateTimeLanguage.locale"
              class="mb-1"
            />
          </b-form-group>
          </b-col>
      </b-row>
    </b-modal>

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
import AppTable4 from "@core/components/app-table/AppTable4.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";

export default {
  components: {
    AppTable4,
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
          dataField: "Ünvan",
          caption: "Ünvan",
        },
        {
          dataField: "ŞubeAdı",
          caption: "Şube Adı",
        },
        {
          dataField: "Tip",
          caption: "Tip",
        },
        {
          dataField: "TC",
          caption: "TC",
        },
        {
          dataField: "RefNo",
          caption: "Ref No",
        },
        {
          dataField: "TC",
          caption: "TC",
        },
        {
          dataField: "AdSoyad",
          caption: "Ad Soyad",
        },
        {
          dataField: "G/ÇTarihi",
          caption: "G/Ç Tarihi",
        },
        {
          dataField: "İşlemTarihi",
          caption: "İşlem Tarihi",
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