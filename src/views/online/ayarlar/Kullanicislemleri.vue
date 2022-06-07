<template>
  <div>
    <b-button variant="outline-primary" v-b-modal.person class="mb-1">
      Yeni Kişi Ekle
    </b-button>
    <app-table
      :showPdfPopupClick="showPdfPopup"
      :inquireClick="queryClick"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="id"
      :items="items"
      :UpdateData="UpdateData"
      :DeleteData="DeleteData"
      :totalRows="16"
      :title="'Kullanıcı Listesi'"
      :columns="columns"
    />
    <b-modal
      id="person"
      ref="person"
      title="Yeni Kişi Ekle"
      ok-only
      size="lg"
      ok-title="Kaydet"
      @ok="SaveUser"
    >
      <b-card>
        <b-row>
          <b-col>
            <b-row class="mb-1">
              <b-col cols="3">
                <label>Ad *</label>
              </b-col>
              <b-col cols="8">
                <b-form-input
                  id="basicInput"
                  v-model="person.Ad"
                  :state="person.Ad == '' ? false : true"
                />
              </b-col>
            </b-row>

            <b-row class="mb-1">
              <b-col cols="3">
                <label>Kullanıcı Adı *</label>
              </b-col>
              <b-col cols="8">
                <b-form-input
                  id="basicInput"
                  v-model="person.KullaniciAdi"
                  :state="person.KullaniciAdi == '' ? false : true"
                />
              </b-col>
            </b-row>
            <br />

            <b-row class="mb-1">
              <b-col cols="3">
                <label>Yetki Grubu</label>
              </b-col>
              <b-col cols="8">
                <b-form-select v-model="person.YetkiGrubu" :options="yetki" />
              </b-col>
            </b-row>

            <b-row class="mb-1">
              <b-col cols="3">
                <label>Taslak Filigranı Eklensin?</label>
              </b-col>
              <b-col cols="8">
                <b-form-checkbox v-model="person.FiligranEkleme" value="true">
                </b-form-checkbox>
              </b-col>
            </b-row>

            <b-row class="mb-1">
              <b-col cols="3">
                <label>Kendi Ön Eklerini Kullansın</label>
              </b-col>
              <b-col cols="8">
                <b-form-checkbox v-model="person. OnEkKullansin" value="true">
                </b-form-checkbox>
              </b-col>
            </b-row>

            <b-row class="mb-1">
              <b-col cols="3">
                <label>Kendi Dökümanlarını Görsün</label>
              </b-col>
              <b-col cols="8">
                <b-form-checkbox v-model="person.DokümanGoruntulesin" value="true">
                </b-form-checkbox>
              </b-col>
            </b-row>
          </b-col>

          <b-col>
            <b-row class="mb-1">
              <b-col cols="3">
                <label>Soyad *</label>
              </b-col>
              <b-col cols="8">
                <b-form-input
                  id="basicInput"
                  v-model="person.Soyad"
                  :state="person.Soyad == '' ? false : true"
                />
              </b-col>
            </b-row>

            <b-row class="mb-1">
              <b-col cols="3">
                <label>e-Posta *</label>
              </b-col>
              <b-col cols="8">
                <b-form-input
                  id="basicInput"
                  v-model="person.Eposta"
                  :state="person.Eposta == '' ? false : true"
                />
              </b-col>
            </b-row>
            <br />

            <b-row class="mb-1">
              <b-col cols="3">
                <label>Admin Kullanıcı </label>
              </b-col>
              <b-col cols="8">
                <b-form-checkbox v-model="person.AdminKullanici" value="true">
                </b-form-checkbox>
              </b-col>
            </b-row>

            <b-row class="mb-1">
              <b-col cols="3">
                <label>Aktif Kullanıcı</label>
              </b-col>
              <b-col cols="8">
                <b-form-checkbox v-model="person.aktifKullanıcı" value="true">
                </b-form-checkbox>
              </b-col>
            </b-row>

            <b-row class="mb-1">
              <b-col cols="3">
                <label>Kendi XSLT'lerini Kullansın</label>
              </b-col>
              <b-col cols="8">
                <b-form-checkbox v-model="person.KendixsltKullansin" value="true">
                </b-form-checkbox>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
      <b-tabs>
        <b-card>
          <b-tab title="Şube Bilgileri">
                <b-table responsive="sm" :items="person.Sube"/>
            <WithoutTool
              :pk="id"
              :items="Subeİtems"
              :totalRows="16"
              :title="'Kullanıcı İçİn şube(ler) seçİnİz'"
              :columns="columnsSube"
              @selectedvalue="getSelected"
            />
          </b-tab>
          <b-tab title="Etiket Bilgileri"> 
<h6>Kullanıcı için etiket(ler) seçiniz</h6>
<br>
                <v-select
    v-model="etiketBilgileriValue"
    multiple
    label="title"
    :options="etiketBilgileri"
  />
          </b-tab>
        </b-card>
      </b-tabs>
    </b-modal>
  </div>
</template>
<script>
import AppTable from "@/@core/components/app-table/cariTable.vue";
import WithoutTool from "@/@core/components/app-table/FirmaProfil.vue";

import {
  BRow,
  BCol,
  BFormGroup,
  BFormDatepicker,
  BTabs,
  BTab,
  BFormInput,
  BCard,
  BButton,
  BFormFile,
  BFormCheckbox,
  BModal,
  BTable ,
  BFormSelect,
} from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
const kullaniciId = JSON.parse(localStorage.getItem("userData")).userId;
import Repeater from "../../../@core/repeater/repeater.vue";
import {mapActions} from 'vuex'
export default {
  components: {
    Repeater,
    WithoutTool,
    BModal,
    AppTable,
    BFormInput,
    BFormCheckbox,
    BFormSelect,
    BCard,
    BFormFile,
    BTabs,
    BTab,
    BRow,
    vSelect,
    BCol,
    BButton,
    BTable ,
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
      yetki: [
        { value: null, text: "Please select an option" },
        { value: "admin", text: "Admin Kullanıcı" },
        { value: "Normal", text: "Normal Kullanıcı" },
      ],
      person: {
        Ad: "",
        Soyad: "",
        KullaniciAdi: "",
        YetkiGrubu: "",
        FiligranEkleme: "",
         OnEkKullansin: false,
        DokümanGoruntulesin: false,
        Eposta: "",
        AdminKullanici: false,
        aktifKullanıcı: false,
        KendixsltKullansin:false,
        kullaniciId:kullaniciId,
        Sube:[]
      },
      Subeİtems:[
{Adres_Adı:"Merkez",İlce:"Taşova",Şehir:"Amasya",Telefon:"05",Eposta:"@",Web_Sitesi:"www"}
      ],
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
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Ad",
          caption: "Ad",
        },
        {
          dataField: "Soyad",
          caption: "Soyad",
        },
        {
          dataField: "Kullanıcı Adı",
          caption: "Kullanıcı Adı",
        },
        {
          dataField: "E-posta",
          caption: "E-posta",
        },
        {
          dataField: "Rol",
          caption: "Rol",
        },
        {
          dataField: "İşlemler",
          caption: "İşlemler",
          cellTemplate: "AddAndDelete",
        },
      ],
      columnsSube:[{
               dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Adres_Adı",
          caption: "Adres Adı",
        },
        {
          dataField: "İlçe",
          caption: "İlçe",
        },
        {
          dataField: "Şehir",
          caption: "Şehir",
        },
        {
          dataField: "Telefon",
          caption: "Telefon",
        },
        {
          dataField: "E-posta",
          caption: "E-posta",
        },
        {
          dataField: "Web_Sitesi",
          caption: "Web Sitesi",
        }
      ],
      etiketBilgileri:[ { title: 'E-arşiv 5000/30000' },
        { title: 'Romboid' },],
        etiketBilgileriValue:""
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
      getSelected(value){
          this.person.Sube=value
          console.log(value);
      },
      ...mapActions(["AddAltKullanici","FecthAltKullanıcı","updateAltKullanıcı","DeleteAltKullanici"]),
UpdateData(e){
console.log(e);
this.person=e
this.$refs["person"].show()
},
DeleteData(e){
console.log(e);
this.DeleteAltKullanici(e.id)
let fin=  this.items.findIndex(el=>{
return el.id==e.id
  })
 this.items.splice(fin,1)

},
SaveUser(){
    if(this.person.hasOwnProperty("id")){
        const data={
            data:this.person,
            id:this.person.id
        }
        this.updateAltKullanıcı(data)
    }else{
 this.AddAltKullanici(this.person)
this.fetch()       
    }

},
fetch(){
this.FecthAltKullanıcı(kullaniciId).then(res=>{
    console.log(res);
    this.items=res
})
},
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
  },
  mounted() {
      this.fetch()
  },
};
</script>

<style>
table {
  width: 100%;
}
#mainbody {
  background-color: #ffffff;
  font-family: "Tahoma", "Times New Roman", Times, serif;
  font-size: 11px;
  color: #666666;
}
#mainbody h1,
#mainbody h2 {
  padding-bottom: 3px;
  padding-top: 3px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
}
#mainbody h1 {
  font-size: 1.4em;
  text-transform: none;
}
#mainbody h2 {
  font-size: 1em;
  color: brown;
}
#mainbody h3 {
  font-size: 1em;
  color: #333333;
  text-align: justify;
  margin: 0;
  padding: 0;
}
#mainbody h4 {
  font-size: 1.1em;
  font-style: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
  margin: 0;
  padding: 0;
}
#mainbody hr {
  height: 2px;
  color: #000000;
  background-color: #000000;
  border-bottom: 1px solid #000000;
}
#mainbody p,
#mainbody ul,
#mainbody ol {
  margin-top: 1.5em;
}
#mainbody ul,
#mainbody ol {
  margin-left: 3em;
}
#mainbody blockquote {
  margin-left: 3em;
  margin-right: 3em;
  font-style: italic;
}
#mainbody a {
  text-decoration: none;
  color: #70a300;
}
#mainbody a:hover {
  border: none;
  color: #70a300;
}
#despatchTable {
  border-collapse: collapse;
  font-size: 11px;
  float: right;
  border-color: gray;
}
#ettnTable {
  border-collapse: collapse;
  font-size: 11px;
  border-color: gray;
}
#customerPartyTable {
  border-width: 0px;

  border-style: inset;
  border-color: gray;
  border-collapse: collapse;
}
#customerIDTable {
  border-width: 2px;

  border-style: inset;
  border-color: gray;
  border-collapse: collapse;
}
#customerIDTableTd {
  border-width: 2px;

  border-style: inset;
  border-color: gray;
  border-collapse: collapse;
}
#lineTable {
  border-width: 2px;

  border-style: inset;
  border-color: black;
  border-collapse: collapse;
}
#mainbody td.lineTableTd {
  border-width: 1px;
  padding: 1px;
  border-style: inset;
  border-color: black;
  background-color: white;
}
#mainbody tr.lineTableTr {
  border-width: 1px;
  padding: 0px;
  border-style: inset;
  border-color: black;
  background-color: white;
}
#lineTableDummyTd {
  border-width: 1px;
  border-color: white;
  padding: 1px;
  border-style: inset;
  border-color: black;
  background-color: white;
}
#mainbody td.lineTableBudgetTd {
  border-width: 2px;
  border-spacing: 0px;
  padding: 1px;
  border-style: inset;
  border-color: black;
  background-color: white;
}
#notesTable {
  border-width: 2px;
  border-style: inset;
  border-color: black;
  border-collapse: collapse;
}
#notesTableTd {
  border-width: 0px;

  border-style: inset;
  border-color: black;
  border-collapse: collapse;
}
#mainbody table {
  border-spacing: 0px;
}
#budgetContainerTable {
  border-width: 0px;
  border-spacing: 0px;
  border-style: inset;
  border-color: black;
  border-collapse: collapse;
}
#mainbody td {
  border-color: gray;
}
</style>