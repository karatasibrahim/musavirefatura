<template>
  <div>
    <pos-table
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="id"
      :items="items"
      :totalRows="16"
      :title="'Pos Sorgulama'"
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
          <b-form-group label="Mükellef Seçimi" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.title"
             :options="mukelellefler"
              placeholder="Mükellef Seçiniz"
              label="MükellefSeçimi"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Pos Bilgisi" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.type"
             :options="poslar"
              placeholder="Pos Bilgisi Seçiniz"
              label="PosBilgisi"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Tarih Seçiniz"
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
          <b-form-group label="Detay" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.type"
               :options="detaylar"
              placeholder="Detay Seçiniz"
              label="DetayBilgisi"
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
          <b-form-group label="Mükellef Seçimi" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.title"
              :options="mukelellefler"
              placeholder="Mükellef Seçiniz"
              multiple
              label="MükellefSeçimi"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Pos Bilgisi" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.type"
            :options="poslar"
              placeholder="Pos Bilgisi Seçiniz"
              label="PosBilgisi"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Tarih Seçiniz"
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
          <b-form-group label="Detay" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.type"
             :options="detaylar"
              placeholder="Detay Seçiniz"
              label="DetayBilgisi"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import PosTable from "@core/components/app-table/PosTable.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";

import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    PosTable,
    BRow,
    vSelect,
    BCol,
    BFormGroup,
    BFormDatepicker,
  },
 
  data() {
    return {
      //#region Sorgulama Popup
      dateTimeLanguage: lng.dateTimeLanguage,
      id:"",
      inquireRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
      },
      focusdate:false,
      //#endregion
      listRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
        type: null,
        title: [],
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      items: [],
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
      detaylar:[],
      poslar:["Pos Tutarı olanlar","Pos Tutarı Olmayanlar"],
      mukelellefler:[],
      columns: [
        {
          dataField:"PosId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "BankaAdi",
          caption: "Banka Adı",
        },
        {
          dataField: "VergiNo",
          caption: "Vergi No",
        },
        {
          dataField: "Tarih",
          caption: "Tarih",
        },
        {
          dataField: "VergiKimlikNo",
          caption: "Vergi Kimlik No",
        },
        {
          dataField: "Tutar",
          caption: "Tutar",
        },
        {
          dataField: "SorguTarihi",
          caption: "Sorgu Tarihi",
        },
      ],
    };
  },
  watch:{
    'listRequest.startDate'(){
this.focusdate=true
    }
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
      console.log(this.focusdate);
      let copytime=this.listRequest.startDate
      console.log(this.listRequest.startDate);
     let time2=new Date(this.listRequest.startDate)
const fil=this.PosSorguDataGet.filter(el=>{
    const time=new Date(el.SorguTarihi)
    console.log(time);
 if(this.listRequest.title.length>0){
   return this.listRequest.title.includes(el.BankaAdi)
 }
 else if(this.listRequest.type !="Pos Tutarı olanlar" ){
      return el.Tutar==""
 }
 else if(this.focusdate){
   console.log(time2.getTime()<time.getTime());
return time2.getTime()<time.getTime()
 }
  else{
   console.log("else");
   return el
 }
})
this.items=fil
    },
...mapActions(["fetchPosSorgu"]),
postDataGet(){  
  let arr=[]
  this.Mukellefdataget.forEach(element => {
    console.log("pos",element.MukellefId);
arr.push(element.MukellefId)
  
  });  

  this.fetchPosSorgu(arr)
  this.setOption()
},
setOption(){
  let bankarr=[];
  let pos=[];
  let detayArr=[]
console.log(this.PosSorguDataGet);
this.items=this.PosSorguDataGet;
this.PosSorguDataGet.forEach(el=>{
  bankarr.push(el.BankaAdi);
  detayArr.push(el.BankaAdi);
this.mukelellefler=[...new Set(bankarr)]
})
}
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
    ...mapGetters(['reMukellef',"rePosSorgu"]),
    Mukellefdataget(){
      return this.reMukellef
    },
PosSorguDataGet(){
  return this.rePosSorgu
}
  },
  mounted(){
this.postDataGet();

  }
};
</script>

<style></style>