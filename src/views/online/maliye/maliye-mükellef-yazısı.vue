<template>
  <div>
    <app-table5
      :inquireClick="queryClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Mükellefiyet Yazısı'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Talep Gönder"
      ok-title="Talep Gönder"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-col style="display: flex; gap: 10px; flex-direction: column">
          <b-form-checkbox
            v-model="selected"
            class="custom-control-primary"
          >
            Mükellefiyet Yazısı
          </b-form-checkbox>

          <v-select
            placeholder="Seç"
            :disabled="selected ? disabled : ''"
          />

          <v-select
            :options="konular"
            placeholder="Seç"
            :disabled="selected ? disabled : ''"
          />

          <b-form-input
            id="basicInput"
            placeholder="Kurum Adı"
          />

          <v-select
            placeholder="Seç"
            :disabled="selected ? disabled : ''"
          />

          <v-select
            :options="info"
            placeholder="Seç"
            :disabled="selected ? disabled : ''"
          />

          <b-form-datepicker
            id="h-start-date"
            v-model="inquireRequest.startDate"
            :max="inquireMaxDate"
            v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
            :locale="dateTimeLanguage.locale"
            :disabled="selected ? disabled : ''"
          />
          
          <b-form-datepicker
            id="h-end-date"
            v-model="inquireRequest.endDate"
            :min="inquireMinDate"
            v-bind="dateTimeLanguage.labels[dateTimeLanguage.locale]"
            :locale="dateTimeLanguage.locale"
            :disabled="selected ? disabled : ''"
          /> 

          <b-form-input
            id="basicInput"
            placeholder="Email"
          />
          
      </b-col>
    </b-modal>
  </div>
</template>

<script>
import AppTable5 from "@core/components/app-table/AppTable5.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker, BFormInput, BFormCheckbox } from "bootstrap-vue";
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
    BFormInput,
    BFormCheckbox,
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
      selected: false,
      konular: [
        "Kredi Garanti Fonuna",
        "İlgili Belediye Başkanlığına",
        "KOSGEB’e",
        "Gıda Tarım ve Hayvancılık Bakanlığına",
        "Çevre ve Şehircilik Bakanlığına",
        "Orman ve Su İşleri Bakanlığına",
        "Emniyet Genel Müdürlüğüne",
        "Çalışma ve Sosyal Güvenlik Bakanlığına",
        "Enerji ve Tabi Kaynaklar Bakanlığına",
        "Diğer Kurum Kuruluşlara",
      ],
      info: [
          "Güncel",
          "Belirtilen Tarihten Önceki Borç Bilgisi",
          "Belirtilen Tarih Aralığındaki Borç Bilgisi"
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
          caption: "Tarih",
        },
        {
          dataField: "Kurum",
          caption: "Kurum",
        },
        {
          dataField: "Durum",
          caption: "Durum",
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
    inquireClick() {
        console.log(this.selected2);
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
      console.log(this.listRequest.type);
    },
  },
};
</script>

<style></style>