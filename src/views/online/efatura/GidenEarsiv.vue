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
      :items="items"
      :totalRows="16"
      :title="'Gelen Faturalar'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Beyanname Sorgula"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Başlangıç Tarihi"
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
            label="Bitiş Tarihi"
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

    <b-modal
      ref="listPopup"
      title="Listele"
      ok-title="Listele"
      cancel-title="İptal"
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
        <b-col cols="12">
          <b-form-group label="Tür" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.type"
              :options="turler"
              multiple
              placeholder="Tür Seçiniz"
              label="BeyanTuru"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Başlangıç Tarihi"
            label-for="h-start-date"
            label-cols-md="4"
          >
            <b-form-datepicker
              id="h-start-date"
              v-model="listRequest.startDate"
              :max="listMaxDate"
              v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
              :locale="dateTimeLanguage.locale"
              class="mb-1"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Bitiş Tarihi"
            label-for="h-end-date"
            label-cols-md="4"
          >
            <b-form-datepicker
              id="h-end-date"
              v-model="listRequest.endDate"
              :min="listMinDate"
              v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
              :locale="dateTimeLanguage.locale"
              class="mb-1"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>
    <div>
      <b-card >
        <b-row>
          <b-col><b>Toplam Matrah:</b>  ₺ {{ toplamMatrah }}</b-col>
          <b-col><b>Vergi Toplamı:</b>  ₺ {{ vergiToplam }}</b-col>
          <b-col><b>Ödencek Tutar: </b>  ₺ {{ odenecekToplam }}</b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
import AppTable from "@/@core/components/app-table/Faturalar.vue";
import {
  BRow,
  BCol,
  BFormGroup,
  BFormDatepicker,
  BTabs,
  BTab,
  BCard,
} from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import { mapActions, mapGetters } from "vuex";
const kullaniciId = JSON.parse(localStorage.getItem("userData")).userId;

export default {
  components: {
    AppTable,
    BCard,
    BTabs,
    BTab,
    BRow,
    vSelect,
    BCol,
    BFormGroup,
    BFormDatepicker,
  },
  data() {
    return {
      id: "",
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
      mükelellefler: [],
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
      items: [],
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
      toplamMatrah: 0,
      vergiToplam: 0,
      odenecekToplam: 0,
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "AliciUnvan",
          caption: "Unvan",
        },
        {
          dataField: "AliciVknTckn",
          caption: "Alici Vkn/Tckn",
        },
        {
          dataField: "BelgeTarihi",
          caption: "Belge Tarihi",
        },
        {
          dataField: "FaturaNo",
          caption: "FaturaNo",
        },
        {
            dataField: "Ettn",
          caption: "Ettn",
        },
        {
            dataField: "Kdv8Matrah",
          caption: "Kdv8",
        },
        {
            dataField: "Kdv1Matrah",
          caption: "Kdv1",
        },
        {
          dataField: "Kdv0Matrah",
          caption: "Kdv0",
        },
        {
            dataField: "Tutar",
          caption: "Tutar",
        },
            {
              dataField: "OnayDurumu",
              caption: "Onay Durumu",
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
  },

  methods: {
    trash() {},
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
    ...mapActions(["FecthGidenFaturalar"]),
    fetch() {
      this.FecthGidenFaturalar(kullaniciId).then((res) => {
        console.log(res);
        this.items = res;
        this.items.forEach((element) => {
          console.log(element);
          this.toplamMatrah += element.Tutar;
          this.vergiToplam += element.Kdv8Matrah + element.Kdv1Matrah + element.Kdv0Matrah ;
        });
      });
    },
  },
  mounted() {
    this.fetch();
  },
};
</script>

<style></style>