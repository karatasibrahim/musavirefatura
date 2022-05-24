<template>
  <div>
    <app-table
      :showPdfPopupClick="showPdfPopup"
      :deleteInsuranceClick="deleteInsuranceClick"
      :inquireClick="queryClick"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="'SubeId'"
      :items="items"
      :totalRows="16"
      :title="'Sgk Bildirge Listesi'"
      :columns="columns"
    />


    <!-- Pdf Görüntüle Popup -->
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
import {
  BRow,
  BCol,
  BFormGroup,
  BFormDatepicker,
  BFormCheckbox,
  BFormCheckboxGroup,
  BFormSelect,
} from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    AppTable,
    BRow,
    BFormCheckbox,
    vSelect,
    BCol,
    BFormGroup,
    BFormDatepicker,
    BFormCheckboxGroup,
    BFormSelect,
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
        title: [],
        startDate: {
          month: "",
          year: "",
        },
        endDate: {
          month: "",
          year: "",
        },
        selected: [],
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      months: [
        { value: "", text: "" },
        { value: "01", text: "Ocak" },
        { value: "02", text: "Şubat" },
        { value: "03", text: "Mart" },
        { value: "04", text: "Nisan" },
        { value: "05", text: "Mayıs" },
        { value: "06", text: "Haziran" },
        { value: "07", text: "Temmuz" },
        { value: "08", text: "Ağustos" },
        { value: "09", text: "Eylül" },
        { value: "10", text: "Ekim" },
        { value: "11", text: "Kasım" },
        { value: "12", text: "Aralık" },
      ],
      years: ["","2018", "2019", "2020", "2021", "2022"],
      items: [],
      unvanlar: [],
      turler: mockData.turler,
      columns: [
        {
          dataField: "SubeId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Gonderim",
          caption: "Gönderim",
        },
        {
          dataField: "Unvan",
          caption: "Ünvan",
        },
        {
          dataField: "SubeAdi",
          caption: "Şube",
        },
        {
          dataField: "Donem",
          caption: "Dönem",
        },
        {
          dataField: "SicilNo",
          caption: "Sicil No",
        },
        {
          dataField: "BelgeCesidi",
          caption: "Belge Çeşidi",
        },
        {
          dataField: "Kanun",
          caption: "Kanun",
        },
        {
          dataField: "Durum",
          caption: "Durum",
        },
        {
          dataField: "Vade",
          dataType: "date",
          caption: "Vade",
        },
        {
          dataField: "Tutar",
          caption: "Tutar",
        },
        {
          dataField: "Goster",
          caption: "Goster",
          cellTemplate: "sgkGosterimColumnTemplate",
        },
      ],
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
    ...mapGetters(["reSgkBildirge", "reSgkFirmalar", "reMukellef"]),
    getFirmadata() {
      return this.reSgkFirmalar;
    },
    getSgkBildirgeData() {
      return this.reSgkBildirge;
    },
    getMukellefdata() {
      return this.reMukellef;
    },
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
    ...mapActions(["fetchSgkBildirge"]),
    fetchVergi() {
      let arr = [];
      let mukellfIdarr = [];
      for (let i = 0; i < this.getFirmadata.length; i++) {
        const element = this.getFirmadata[i];
        arr.push(element.SubeId);
        mukellfIdarr.push({
          sube: element.SubeId,
          mukID: element.MukellefId,
          sicil: element.SicilNo,
        });
      }
      this.fetchSgkBildirge(arr);
      setTimeout(() => {
        this.setUnvan(mukellfIdarr);
      }, 2000);
    },
    setUnvan(arr, arrsubeid) {
      let dataunvan = [];
      let maindata = [];

dataunvan.push(this.getMukellefdata.Unvan)
        arr.forEach((id) => {
          console.log(id);

          if (id.mukID == this.getMukellefdata.MukellefId) {
            maindata.push({
              sube: id.sube,
              unvan: this.getMukellefdata.Unvan,
              sicilno: id.sicil,
            });
          }
        });
      console.log(maindata);
      for (let index = 0; index < this.getSgkBildirgeData.length; index++) {
        const fin = this.getSgkBildirgeData[index];

        maindata.forEach((main) => {
          if (main.sube == fin.SubeId) {
            fin.Unvan = main.unvan;
            fin.SicilNo = main.sicilno;
          }
        });
      }
      this.items = this.getSgkBildirgeData;
      this.unvanlar=[...new Set(dataunvan)]
      console.log(this.getSgkBildirgeData, maindata);
    },
  },
  mounted() {
    this.fetchVergi();
  },
};
</script>

<style></style>
