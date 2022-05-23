<template>
  <div>
    <app-table
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Gelen E-Arşiv Sorgulama'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Gelen E-Arşiv Sorgula"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Mükellef Seçimi"
            label-for="h-type"
            label-cols-md="4"
          >
            <v-select
              v-model="listRequest.title"
              :options="mukelellefler"
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
      title="Gelen E-Arşiv Listele"
      ok-title="Listele"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="listRunClick"
    >
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Mükellef Seçimi"
            label-for="h-type"
            label-cols-md="4"
          >
            <v-select
              v-model="listRequest.title"
              :options="mukelellefler"
              multiple
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
              v-model="listRequest.startDate"
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
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import AppTable from "@core/components/app-table/AppTable.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import {mapGetters,mapActions} from 'vuex'
export default {
  components: {
    AppTable,
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
        title: [],
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      items:[],
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
      mukelellefler:[],
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Unvan",
          caption: "Gelen Unvan",
        },
        {
          dataField: "FaturaNo",
          caption: "Fatura No",
        },
        {
          dataField: "Vergiler",
          caption: "Vergiler",
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
          dataField: "Odenecek",
          caption: "Ödenecek",
        },
        {
          dataField: "Doviz",
          caption: "Döviz",
        },
        {
          dataField: "Aciklama",
          caption: "Açıklama",
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
      let now=new Date(this.listRequest.startDate)
     let time2=new Date(this.listRequest.startDate)
const fil=this.GelenearsivDataGet.filter(el=>{
      const time=new Date(el.Tarih.slice(0,10).split(".").reverse().join("/"))
    console.log(this.listRequest.title);
 if(this.listRequest.title.length>0){
   console.log("1.if");
   return this.listRequest.title.includes(el.Unvan)
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


    },
    ...mapActions(["fecthGelenEarsivFat"]),
    fecthGelenFat(){
       this.items=[]
  let arr=[]
  this.Mukellefdataget.forEach(element => {
this.mukelellefler.push(element.Unvan)
arr.push(element.MukellefId)
  
  });  

  this.fecthGelenEarsivFat(arr)
this.setList()
    },
    setList(){
   let arr=[]
   this.items=this.GelenearsivDataGet
   this.GelenearsivDataGet.forEach(el=>{
   arr.push(el.Unvan)
 })
 this.mukelellefler=[...new Set(arr)]
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
        ...mapGetters(['reMukellef',"reGelenArsiv"]),
    Mukellefdataget(){
      return this.reMukellef
    },
GelenearsivDataGet(){
  return this.reGelenArsiv
}
  },
  mounted(){
    console.log(this.items);
    this.fecthGelenFat();
  }
};
</script>

<style></style>