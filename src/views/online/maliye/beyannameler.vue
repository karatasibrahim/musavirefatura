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
      :items="beyannameData"
      :totalRows="16"
      :title="'Beyannameler'"
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
import AppTable from "@core/components/app-table/AppTable.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";

import { mapGetters , mapActions} from "vuex";
    let arr=[]
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

        ),
      },
      id:"",
      //#endregion
      listRequest: {
        startDate: new Date(),
        endDate: new Date( ),
        type: [],
        title: [],
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/0012167353%2FBEYANNAME%2F10l09o1t551oys.pdf?alt=media",
      items: [],
      unvanlar: [],
      turler: [],
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "unvan",
          caption: "Ünvan",
        },
        {
          dataField: "beyannameTuru",
          caption: "Kodu",
        },
        {
          dataField: "vergiDairesi",
          caption: "Vergi Dairesi",
        },
        {
          dataField: "tckn",
          caption: "T.C. Kimlik No",
        },
        {
          dataField: "yuklemezamani",
          caption: "Tarih",
        },
        {
          dataField: "beyannameTuru",
          caption: "Türü",
        },
        {
          dataField: "donem",
          caption: "Dönem",
        },
        {
          dataField: "FisNo",
          caption: "Fiş No",
        },
        {
          dataField: "beyan_pdf",
          caption: "Beyan Pdf",
          cellTemplate: "beyanColumnTemplate",
        },
        {
          dataField: "tahak_pdf",
          caption: "Tahakkuk Pdf",
          cellTemplate: "tahakkukColumnTemplate",
        },
        {
          dataField: "Toplam",
          caption: "Tutar",
        },
      ],
      mukellefid: "",
      userEmail: "",
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
    ...mapGetters(["rePerson", "reMukellef", "reBeyanname"]),
    beyannameData() {
      return this.reBeyanname;
    },
    mukelefData() {
      return this.reMukellef;
    },
    getPerson(){
     return this.rePerson.KullaniciId
      
    }
  },
  methods: {
    queryClick() {
      this.$refs.queryPopup.show();
    },
    inquireClick() {
      
 
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
      let now=new Date(this.listRequest.startDate)
     let time2=new Date(this.listRequest.startDate)
const fil=this.beyannameData.filter(el=>{
      const time=new Date(el.beyan_yukleme_tarihi.slice(0,10).split(".").reverse().join("/"))
    console.log(this.listRequest.title);
 if(this.listRequest.title.length>0){
   console.log("1.if");
   return this.listRequest.title.includes(el.unvan)
 }
 else if(this.listRequest.type.length>0){
   console.log("2.if");
      return this.listRequest.type.includes(el.beyan_turu) 
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
console.log(now);
// let time2=new Date(this.listRequest.startDate)
// for (let el = 0; el < this.items.length; el++) {
//   const element = this.items[el];
//      const time=new Date(element.beyan_yukleme_tarihi.slice(0,10).split(".").reverse().join("/"))
//   if(this.listRequest.title==element.unvan || this.listRequest.type==element.beyan_turu || time2.getTime()<time.getTime() ){
//    this.items=[]
// this.items.push(element)
// }else{
//   this.items=arr
// }
// }
//   this.items.forEach(el=>{

// if(this.listRequest.title==el.unvan || this.listRequest.type==el.beyan_turu || time2.getTime()<time.getTime() ){
//    this.items=[]
// this.items.push(el)
// }else{
//   console.log("else");
// }

// })
    },
    /////////////////////////////////
    ...mapActions(["fetchBeyanname"]),
fetch(){
this.fetchBeyanname([this.getPerson])
//setTimeout(()=>{
  //console.log(this.beyannameData);
// this.setünvan
//},800)
},
//     setünvan() {
//   let arrUnvan=[];
//       let arrtype=[]
//       this.beyannameData.forEach((els) => {
//         arr.push(els)
//         arrtype.push(els.beyan_turu)
//          });
//          arr.forEach(el=>{
//                 this.mukelefData.forEach((data) => {
//           if (el.MukellefID == data.MukellefId) {
//             el.unvan = data.Unvan;
//             console.log(el.unvan);
//             arrUnvan.push(data.Unvan);
//             this.items.push(el)
//           }
        
//         });
//          })
   
//      this.unvanlar=[...new Set(arrUnvan)]
//       console.log(this.items);
//       this.setType(arrtype)
//     },
//     setType(arr){

//        arr.filter((item, index) => {
// console.log(arr.indexOf(item)=== index);
//         // Eğer mevcut öğenin indeksi aynı ise, yeni diziye dön.
//         if(arr.indexOf(item) === index){
//           console.log(item);
//           this.turler.push(item)
//         }
        
 
//     });
//     }
  },
  mounted() {
    this.fetch();
    console.log(typeof this.listRequest.startDate);
  },
};
</script>

<style></style>
