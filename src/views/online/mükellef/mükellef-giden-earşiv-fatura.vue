<template>
  <div>
    <app-table2
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :trash="trash"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Giden E-Arşiv Sorgulama'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Giden E-Arşiv Sorgula"
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
    
              placeholder="Mükellef Seçiniz"
              label="MükellefSeçimi"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Ay Seçimi"
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
        <b-col cols="12">
          <b-form-group label="Durum" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.title"
            
              placeholder="Durum Seçiniz"
              label="DurumSeçiniz"
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
      title="Giden E-Arşiv Listele"
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
              :options="unvanlar"
              placeholder="Mükellef Seçiniz"
              label="MükellefSeçimi"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Ay Seçimi"
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
        <b-col cols="12">
          <b-form-group label="Durum" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.type"
              :options="turler"
              placeholder="Durum Seçiniz"
              label="DurumSeçiniz"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import AppTable2 from "@core/components/app-table/AppTable2.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import {mapGetters,mapActions} from "vuex"
export default {
  components: {
    AppTable2,
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
    ...mapGetters(["reGidenArsiv","reMukellef"]),
    getGidenArsiv(){
      return this.reGidenArsiv
    },
    getMukellef(){
      return this.reMukellef
    }
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
      items:[],
      unvanlar: [],
      turler: ["Onaylandı","Onaylanmadı"],
      trash:"",
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "BelgeNumarasi",
          caption: "Belge Numarası",
        },
        {
          dataField: "AliciVknTckn",
          caption: "Alıcı VKN/TC",
        },
        {
          dataField: "AliciUnvan",
          caption: "Alıcı Ünvan",
        },
        {
          dataField: "BelgeTarihi",
          caption: "Belge Tarihi",
        },
        {
          dataField: "BelgeTuru",
          caption: "Belge Türü",
        },
        {
          dataField: "OnayDurumu",
          caption: "Onay Durumu",
        },
        {
          dataField: "Tutar",
          caption: "Tutar",
        },
        {
          dataField: "İçerik",
          caption: "İçerik",
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
        console.log(this.listRequest);

      let now=new Date(this.listRequest.startDate)
     let time2=new Date(this.listRequest.startDate)
const fil=this.getGidenArsiv.filter(el=>{
      const time=new Date(el.BelgeTarihi.slice(0,10).split(".").reverse().join("/"))
    console.log(this.listRequest.title);
 if(this.listRequest.title!=null){
   console.log("1.if");
   return this.listRequest.title==el.AliciUnvan
 }
 if(this.listRequest.type!=null){
   console.log("1.if");
   return this.listRequest.type==el.OnayDurumu
 }
//   if(  time2.getTime()<=now.getTime()){
//     console.log("3.if",this.listRequest.startDate!=this.listRequest.endDate, this.listRequest.startDate,this.listRequest.endDate);
//       return time2.getTime()<time.getTime()
//  }
 else{
   console.log("else");
   return el
 }
})
this.items=fil



// let time2=new Date(this.listRequest.startDate)
// for (let index = 0; index < this.items.length; index++) {
//   const el = this.items[index];
//       const time=new Date(el.Tarih.split("-").join("/"))
// console.log(this.listRequest.title==el.Unvan);
// if(this.listRequest.title==el.Unvan || time2.getTime()<time.getTime() || listRequest.type==el.OnayDurumu){
//   this.items=[]
// this.items.push(el)
// console.log("if");
// }
// else{
//   console.log("else");
//   this.items=this.getGidenArsiv
// }
    },
    ...mapActions(["fetchGidenEarsiv"]),
    fetchGidenars(){
      let mainarr=[];
this.getMukellef.forEach(el => {
 mainarr.push(el.MukellefId)
});  
    this.fetchGidenEarsiv(mainarr);
    this.setArr();
    },
    setArr(){ 
      let arr=[];
      let durumarr=[] 
      this.items=this.getGidenArsiv;
this.getGidenArsiv.forEach(data=>{
  durumarr.push(data.OnayDurumu)
  arr.push(data.AliciUnvan)
})
console.log(arr,durumarr);
this.unvanlar=[...new Set(arr)]

    }
  },
  mounted(){
    this.fetchGidenars()
  }
};
</script>

<style></style>