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
      :title="'BA/BS'"
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
</div>
</template>
<script>
import AppTable from "@core/components/app-table/İptalİtiraz.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker,BTabs, BTab } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import {mapGetters} from 'vuex'
export default {
  components: {
    AppTable,
    BTabs, BTab,
    BRow,
    vSelect,
    BCol,
    BFormGroup,
    BFormDatepicker,
  },
   data() {
    return {
      id:"",
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
      mükelellefler:[],
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
      items: [
        {BelgeNo:"GIB2021000000047",VKN:"0430373470",Unvan:"AKUZ MÜH. SAN. VE TİC. L..",TalepTarihi:"2021-11-27"
        ,BelgeTürü:"",İtirazYönt:"",İtirazBelgeNo:"",İtirazBelgeTarihi:"",İptalİtiraz:""},
              {BelgeNo:"GIB27",VKN:"0430373470",Unvan:"AKUZ MÜH. SAN. VE TİC. L..",TalepTarihi:"2021-11-27"
        ,BelgeTürü:"",İtirazYönt:"",İtirazBelgeNo:"",İtirazBelgeTarihi:"",İptalİtiraz:""}
      ],
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
          dataField: "BelgeNo",
          caption: "Belge Numarası",
        },
        {
          dataField: "Unvan",
          caption: "Alıcı Unvan/Ad Soyad",
        },
            {
          dataField: "VKN",
          caption: "VKN/TC",
        },
        {
          dataField: "TalepTarihi",
          caption: "Talep Tarihi",
        },
        {
          dataField: "BelgeTürü",
          caption: "Belge Türü",
        },
        {
          dataField: "İtirazYönt",
          caption: "İtiraz Yöntemi",
        },
        {
          dataField: "İtirazBelgeNo",
          caption: "İtiraz Belge Numarası",
        },
        {
          dataField: "İtirazBelgeTarihi",
          caption: "İtiraz Belge Tarihi",
        },
        {
          dataField: "İptalİtiraz",
          caption: "İptal/İtiraz Durumu",
          
        }
      ],
    };
  },
  computed: {
    ...mapGetters(['GetAllSelectedArray']),
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
getSelected(){
  return this.GetAllSelectedArray
}
  },
 
  methods: {
    trash(){},
    queryClick() {
      this.$refs.queryPopup.show();
    },
    inquireClick() {},
    showPdfPopup(pdfUrl) {
      //this.activePdfUrl=pdfUrl;
      this.$refs.pdfPopup.show();
    },
    downloadClick(e) {},
    printClick(e) {
            console.log(this.getSelected);
      this.getSelected.forEach(element => {
        element.forEach(el=>{
          console.log(el);
        el.İptalİtiraz="Reddildi"
        })
      });
    },
    sendClick(e) {
      console.log(this.getSelected);
      this.getSelected.forEach(element => {
        element.forEach(el=>{
          console.log(el);
        el.İptalİtiraz="Kabul Edildi"
        })
      });
    },
    listClick() {
      this.$refs.listPopup.show();
    },
    listRunClick() {
      console.log(this.listRequest.type);
    },


  },
  mounted(){

  }
};
</script>

<style></style>