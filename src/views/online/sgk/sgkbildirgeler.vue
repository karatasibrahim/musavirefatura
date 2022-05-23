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

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Bildirge Sorgula"
      ok-title="Sorgula"
      no-close-on-backdrop
      cancel-title="Kapat"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group label="Ünvan" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="inquireRequest.title"
              :options="unvanlar"
              placeholder="Ünvan Seçiniz"
              label="Unvan"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
            style="
              margin-bottom: 0rem !important;
              margin-top: 0.5rem !important;
            "
            label="İlk Dönem"
            label-for="h-type"
            label-cols-md="4"
          ></b-form-group>
        </b-col>
      </b-row>
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
      <b-row>
        <b-col cols="12">
          <b-form-group
            style="
              margin-bottom: 0rem !important;
              margin-top: 0.5rem !important;
            "
            label="Son Dönem"
            label-for="h-type"
            label-cols-md="4"
          ></b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <v-select
            v-model="inquireRequest.endDate.month"
            :options="months"
            placeholder="Ay Seçiniz"
          />
        </b-col>
        <b-col cols="6">
          <v-select
            v-model="inquireRequest.endDate.year"
            :options="years"
            placeholder="Yıl Seçiniz"
          />
        </b-col>
      </b-row>
    </b-modal>

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

    <!-- Listele Popup -->
    <b-modal
      ref="listPopup"
      title="Listele"
      no-close-on-backdrop
      ok-title="Listele"
      cancel-title="Kapat"
      cancel-variant="outline-secondary"
      @ok="listRunClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group label="Ünvan" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.title"
              :options="unvanlar"
              multiple
              placeholder="Ünvan Seçiniz"
              label="Unvan"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
            style="
              margin-bottom: 0rem !important;
              margin-top: 0.5rem !important;
            "
            label="İlk Dönem"
            label-for="h-type"
            label-cols-md="4"
          ></b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <b-form-select
            v-model="listRequest.startDate.month"
            :options="months"
            placeholder="Ay Seçiniz"
          />
        </b-col>
        <b-col cols="6">
          <b-form-select
            v-model="listRequest.startDate.year"
            :options="years"
            placeholder="Yıl Seçiniz"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group
            style="
              margin-bottom: 0rem !important;
              margin-top: 0.5rem !important;
            "
            label="Son Dönem"
            label-for="h-type"
            label-cols-md="4"
          ></b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="6">
          <v-select
            v-model="listRequest.endDate.month"
            :options="months"
            placeholder="Ay Seçiniz"
          />
        </b-col>
        <b-col cols="6">
          <v-select
            v-model="listRequest.endDate.year"
            :options="years"
            placeholder="Yıl Seçiniz"
          />
        </b-col>
      </b-row>
      <br />
      <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="listRequest.selected"
        name="flavour-2"
        class="demo-inline-spacing"
      >
        <b-row>
          <b-col cols="4">
            <b-form-checkbox value="Asıl">Asıl</b-form-checkbox>
          </b-col>
          <b-col cols="4">
            <b-form-checkbox value="Ek">Ek</b-form-checkbox>
          </b-col>
          <b-col cols="4">
            <b-form-checkbox value="İptal">İptal</b-form-checkbox>
          </b-col>
        </b-row>
      </b-form-checkbox-group>
      {{ listRequest.selected }}
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
      this.items = [];
      console.log(this.listRequest.startDate);
      const datanDonem =
        this.listRequest.startDate.month +
        " " +
        "/" +
        " " +
        this.listRequest.startDate.year;
console.log(datanDonem);
      const filters = this.getSgkBildirgeData.filter((el) => {
        if (this.listRequest.title.length > 0) {
          console.log("1.if");
          return this.listRequest.title.includes(el.Unvan);
        }
        if (this.listRequest.selected.length > 0) {
          console.log("2.if");
          return this.listRequest.selected.includes(el.Durum);
        }
        if(this.listRequest.startDate.month != "" && this.listRequest.startDate.year != "") {
          console.log("3.if");
          console.log(el.Donem == datanDonem, el.Donem, datanDonem);
          return el.Donem.match(datanDonem);
        } else {
          console.log("else");
          return el
        }
      });

      console.log(filters);
      this.items = filters;
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
      for (let i = 0; i < this.getMukellefdata.length; i++) {
        const element = this.getMukellefdata[i];
dataunvan.push(element.Unvan)
        arr.forEach((id) => {
          console.log(id);

          if (id.mukID == element.MukellefId) {
            maindata.push({
              sube: id.sube,
              unvan: element.Unvan,
              sicilno: id.sicil,
            });
          }
        });
      }
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
