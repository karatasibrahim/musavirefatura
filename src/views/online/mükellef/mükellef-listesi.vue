<template>
  <div>
    <app-table
      :showPdfPopupClick="emptyClick"
      :deleteInsuranceClick="emptyClick"
      :inquireClick="queryClick"
      :showPanelClick="showPanelClick"
      :showTaxPayerInfoClick="showTaxPayerInfoClicks"
      :downloadClick="downloadClick"
      :listClick="listClick"
      :printClick="printClick"
      :sendClick="sendClick"
      :pk="id"
      :mukellefid="id"
      :items="getMukellefData"
      :selectable="'none'"
      :totalRows="16"
      :title="'Mükellef Listesi'"
      :columns="columns"
    />

  

    <b-modal
      ref="taxPayerPopup"
      title="Mükellef Kartı"
      size="lg"
      centered
      no-close-on-backdrop
       ok-title="Kaydet"
         ok-only
      @ok.prevent="inquireClick"
    >
      <template>
        <ul class="m-popup-nav">
          <li
            :class="popupSection == 'info' ? 'active' : 'false'"
            @click="popupSection = 'info'"
          >
            <i class="gg-info"> </i>
            Bilgiler
          </li>
          <li
            :class="popupSection == 'passwords' ? 'active' : 'false'"
            @click="popupSection = 'passwords'"
          >
            <i class="gg-key"> </i>
            Gelir İdaresi Başkanlığı
          </li>
          <li
            :class="popupSection == 'branch' ? 'active' : 'false'"
            @click="popupSection = 'branch'"
          >
            <i class="gg-track"> </i>
            Sgk
          </li>
  <li
            :class="popupSection == 'hızlı' ? 'active' : 'false'"
            @click="popupSection = 'hızlı'"
          >
            <i class="gg-track"> </i>
            Hızlı Girişler
          </li>
        </ul>

        <!-- SECTION INFO -->
        <div
          class="m-popup"
          :style="[
            popupSection == 'info' ? { display: 'flex' } : { display: 'none' },
          ]"
        >
          <h2>{{ popup.Unvan }}</h2>
          <hr>

          <div class="m-flex-row">
            <div class="m-input">
              <label>Adres</label>
              <b-form-textarea
                id="textarea-no-resize"
                rows="2"
                no-resize
                v-model="popup.adres"
              />
            </div>

            <div class="s-input">
              <label><b>İl</b> </label>
                          <b-form-select  
                          v-model="selectedil"
             :options="getIl" 
            
             />
              <label><b>İlçe</b> </label>
                          <b-form-select  
             :options="getIlce" 
            
             />
            </div>
          </div>

          <div class="m-flex-row">
            <div class="m-input">
              <label>Vergi Dairesi</label>
              <input type="text"   v-model="popup.VergiDairesi" />
              <label>Vergi No</label>
              <input type="text"   v-model="popup.VergiNo" />
              <label>Vergi T.c.</label>
              <input type="text"   v-model="popup.MukellefKimlik" />
            </div>
            <div class="m-input">
              <label>Durumu</label>
              <div style="display: flex; align-items: center; gap: 5px; height: 30px;">
                <input type="checkbox" v-model="popup.Durum" />
                <label>Kart Aktif</label>
              </div>
                <label>Mük. Tip</label>
                <input type="text"   />
                <label>Mük. Kodu</label>
                <input type="text"   v-model="popup.MukellefKodu" />
            </div>
          </div>
      <div class="m-flex-row button-table" id="m-table">

  <b-table responsive="sm" thead-tr-class="main-row-style" tbody-tr-class="row-style" :bordered=true :items="faaliyetdata" :fields="fields">
     <template #cell(FaaliyetKodu)=data>
      <span class="text-nowrap">
     <input type="text" v-model="data.item.FaaliyetKodu"  @keyup.enter="faaliyetget"  />
      </span>
    </template>
 <template #cell(FaaliyetAciklama)=data >
      <span class="text-nowrap faaliyetaciklama" >
        <input type="text" v-model="data.item.FaaliyetAciklama">
      </span>
    </template>
    <template  #cell(Sil)=data>
      <span  class="text-nowrap" @click="getFaaliyetData(data)">
<feather-icon icon="Trash2Icon"/>
      </span>
    </template>
  </b-table>

   <b-button variant="gradient-success" @click="AddNewFaaliyet">
            <feather-icon icon="PlusCircleIcon"/>
          </b-button>
          </div> 

          <div class="m-flex-row button-table"  id="m-table">
 <b-table responsive="sm" style="overflow-x: hidden;" thead-tr-class="main-row-style-hitap" tbody-tr-class="row-style-hitap"  :bordered=true :items="iletisimdata" :fields="hitapField">
     <template #cell(HitapŞekli)=data>
      <span class="text-nowrap">
     <input type="text" @focusout="iletisimget($event.target,data.item.id)" class="hitap" v-model="data.item.HitapŞekli"/>
      </span>
    </template>
 <template #cell(Telefon)=data >
      <span class="text-nowrap faaliyetaciklama" >
        <input type="tel"  @focusout="iletisimget($event.target,data.item.id)" class="tel" size="20" minlength="9"  inputmode="numaratic" maxlength="10" v-model="data.item.Telefon" name="" id="">
      </span>
    </template>
    <template  #cell(Mail)=data>
      <span  class="text-nowrap" >
<input type="text" class="mail" @focusout="iletisimget($event.target,data.item.id)"  v-model="data.item.Mail"/>
      </span>
    </template>
     <template #cell(GönderimYapılsın)=data >
      <span class="text-nowrap faaliyetaciklama" >
      <b-form-checkbox
      v-model="data.item.GönderimYapılsın"
      class="mailgnderim"
      @focusout="iletisimget($event.target,data.item.id)"
    >
    </b-form-checkbox>
      </span>
    </template>
        <template  #cell(Sil)=data>
      <span  class="text-nowrap" @click="deletedata(data)">
<feather-icon icon="Trash2Icon"/>
      </span>
    </template>
  </b-table>

            <b-button variant="gradient-success" @click="AddNewhitap">
            <feather-icon icon="PlusCircleIcon"/>
          </b-button>
          </div>

        </div>

        <!-- SECTION PASSWORDS -->
         <div
          class="m-popup"
          :style="[
            popupSection == 'passwords'
              ? { display: 'flex' }
              : { display: 'none' },
          ]"
        >
          <h2>{{ popup.Unvan }}</h2>
          <hr />
          <div class="m-flex-row">
            <div class="m-input">
              <label>GİB Kodu</label>
              <input type="text" v-model="popup.GibKodu" />
            </div>

            <div class="m-input">
              <label>GİB Parola</label>
              <input type="text" v-model="popup.GibParola" />
            </div>

            <div class="m-input">
              <label>GİB Şifre</label>
              <input type="text" v-model="popup.GibSifre" />
            </div>
          </div>
          <h4>Beyan Takibi</h4>
          <hr />
          <div style="width: 100%" v-if="popupSection == 'passwords'">
            <div class="m-flex-row">
              <div class="m-input">
                <label>Kdv 1</label>
                <b-form-select
                  v-focus
                  :options="beyandata.aylık"
                  v-model="beyanDataValue.KDV1"
                  @change="setBeyan('KDV1','1', $event)"
                />
              </div>

              <div class="m-input">
                <label>Kdv 2 </label>
                <b-form-select
                  @change="setBeyan('KDV2','2', $event)"
                  v-focus
                  v-model="beyanDataValue.KDV2"
                  :options="beyandata.aylık"
                />
              </div>

              <div class="m-input">
                <label>Kdv 4 </label>
                <b-form-select
                  @change="setBeyan('KDV4','4', $event)"
                  v-model="beyanDataValue.KDV4"
                  v-focus
                  :options="beyandata.aylık"
                />
              </div>

              <div class="m-input">
                <label>GGeçici </label>
                <b-form-select
                  @change="setBeyan('GGECICI','5', $event)"
                  v-focus
                  :options="beyandata.üçaylık"
                  v-model="beyanDataValue.GGECICI"
                />
              </div>
              <div class="m-input">
                <label>KGeçici </label>
                <b-form-select
                  @change="setBeyan('KGECICI','6', $event)"
                  value="false"
                  v-model="beyanDataValue.KGECICI"
                  v-focus
                  :options="beyandata.üçaylık"
                />
              </div>
            </div>

            <div class="m-flex-row">
              <div class="m-input">
                <label>Muhsgk </label>
                <b-form-select
                  @change="setBeyan('MUHSGK','7', $event)"
                  v-model="beyanDataValue.MUHSGK"
                  v-focus
                  :options="beyandata.aylıkÜçaylık"
                />
              </div>

              <div class="m-input">
                <label>Ba </label>
                <b-form-select
                  @change="setBeyan('FORMBA','8', $event)"
                  v-model="beyanDataValue.FORMBA"
                  v-focus
                  :options="beyandata.aylık"
                />
              </div>

              <div class="m-input">
                <label>Bs </label>
                <b-form-select
                  @change="setBeyan('FORMBS','9', $event)"
                  v-model="beyanDataValue.FORMBS"
                  v-focus
                  :options="beyandata.aylık"
                />
              </div>

              <div class="m-input">
                <label>Poşet </label>
                <b-form-select
                  @change="setBeyan('POSET','10', $event)"
                  v-model="beyanDataValue.POSET"
                  v-focus
                  :options="beyandata.üçaylık"
                />
              </div>

              <div class="m-input">
                <label>Turizm </label>
                <b-form-select
                  @change="setBeyan('TURIZM','11', $event)"
                  v-model="beyanDataValue.TURIZM"
                  v-focus
                  :options="beyandata.aylık"
                />
              </div>
            </div>

            <div class="m-flex-row">
              <div class="m-input">
                <label>Yıllık Gelir </label>
                <b-form-select
                  @change="setBeyan('GELIR','13', $event)"
                  v-model="beyanDataValue.GELIR"
                  v-focus
                  :options="beyandata.yıllık"
                />
              </div>

              <div class="m-input">
                <label>Gelir 1001E</label>
                <b-form-select
                  @change="setBeyan('GELIR1001E','14', $event)"
                  v-model="beyanDataValue.GELIR1001E"
                  v-focus
                  :options="beyandata.yıllık"
                />
              </div>

              <div class="m-input">
                <label>Kurumlar </label>
                <b-form-select
                  @change="setBeyan('KURUMLAR','15', $event)"
                  v-focus
                  :options="beyandata.yıllık"
                />
              </div>

              <div class="m-input">
                <label>Basit Usül </label>
                <b-form-select
                  @change="setBeyan('BASIT','16', $event)"
                  v-focus
                  :options="beyandata.yıllık"
                />
              </div>

              <div class="m-input">
                <label>Öiv </label>
                <b-form-select
                  @change="setBeyan('OIV','17', $event)"
                  v-focus
                  :options="beyandata.aylık"
                />
              </div>
            </div>

            <div class="m-flex-row">
              <div class="m-input">
                <label>Ötv </label>
                <b-form-select
                  @change="setBeyan('OTV','18', $event)"
                  v-focus
                  :options="beyandata.aylık"
                />
              </div>

              <div class="m-input">
                <label>Gmsi </label>
                <b-form-select
                  @change="setBeyan('GMSI','19', $event)"
                  v-focus
                  :options="beyandata.yıllık"
                />
              </div>

              <div class="m-input">
                <label>Damga </label>
                <b-form-select
                  @change="setBeyan('DAMGA','20', $event)"
                  v-focus
                  :options="beyandata.aylık"
                />
              </div>
            </div>
          </div>
         </div>

 
        <div
v-if="uptadeActive"
          class="m-popup"
          :style="[
            popupSection == 'branch'
              ? { display: 'flex' }
              : { display: 'none' },
          ]"
        >
        <h2>{{popup.Unvan}}</h2>
        <hr>

          <b-button variant="gradient-success">
            <feather-icon icon="PlusCircleIcon" class="mr-50" />
            <span class="align-middle" @click="AddNewSube">Yeni Şube Ekle</span>
          </b-button>
          <div class="m-flex-row">
            <table border="1">
              <tr>
                <td>Şube</td>
                <td>Sicil No</td>
                <td>Durum</td>
                <td>Düzenle</td>
                <td>Sil</td>
              </tr>

              <tr v-for="i in sgk" :key="i.id">
                <td>{{ i.SubeAdi }}</td>
                <td>{{ i.SicilNo }}</td>
                <td><b-form-checkbox v-model="i.Durum"></b-form-checkbox></td>
                <td @click="getsgkdata(i)">Düzenle</td>
                <td @click="sgkdelete(i)">Sil</td>
              </tr>
            </table>
          </div>
        </div>

        <div
          class="m-popup"
          v-else
          :style="[
            popupSection == 'branch'
              ? { display: 'flex' }
              : { display: 'none' },
          ]"
        >
           
             <b-button class="btn-icon rounded-circle" variant="gradient-success" @click="uptadeActive=!uptadeActive">
            <feather-icon icon="ArrowLeftIcon"  style="font-size:50px"/>
          </b-button>
       
          <div class="m-flex-row">
            <div class="m-input">
              <label>SicilNo </label>
              <input type="text"   v-model="sgkPerson.SicilNo" />
            </div>

            <div class="m-input">
              <label>Durumu </label>
              <b-form-select v-model="sgkPerson.Durum" :options="İnputDurum" />
            </div>
               <div class="m-input">
              <label>Şube Adi</label>
              <input type="text"   v-model="sgkPerson.SubeAdi" />
            </div>
          </div>

            <div class="m-flex-row">
         

            <div class="m-input">
              <label>Kullanıcı Adi </label>
              <input type="text"   v-model="sgkPerson.SubeKullanicAdi" />
            </div>
                <div class="m-input">
              <label>Kullanıcı Kodu </label>
              <input type="text"   v-model="sgk.SubeKullaniciKodu" />
            </div>
          </div>

             <div class="m-flex-row">
            <div class="m-input">
              <label>Sistem Şifresi </label>
              <input type="text"   v-model="sgkPerson.SistemSifresi" />
            </div>

            <div class="m-input">
              <label>İş Yeri Şifresi </label>
              <input type="text"   v-model="sgkPerson.İsyeriSifresi" />
            </div>
          </div>

                <div class="m-flex-row">
            <div class="m-input">
              <label>MetreKare </label>
              <input type="text"   v-model="sgkPerson.MetreKare" />
            </div>

            <div class="m-input">
              <label>Birim Maliyet </label>
              <input type="text"   v-model="sgkPerson.BirimMaliyet" />
            </div>
          </div>

               <div class="m-flex-row">
            <div class="m-input">
              <label>Şube Açilişi </label>
              <input type="text"   v-model="sgkPerson.SubeAcilis" />
            </div>

            <div class="m-input">
              <label>Şube Kapanışı </label>
              <input type="text"   v-model="sgkPerson.SubeKapanis" />
            </div>
          </div>
            <div class="m-flex-row">
            <div class="m-input">
              <label>Şube Notu </label>
              <input type="text"   v-model="sgkPerson.SubeNot" />
            </div>
          </div>
<b-button variant="gradient-success" @click="sgkuptade">
            <feather-icon icon="PlusCircleIcon" class="mr-50" />
            <span class="align-middle" >Kaydet</span>
          </b-button>
        </div>


<!------FAALİYET TABLOSU------->
    <div
          class="m-popup"
          :style="[
            popupSection == 'hızlı'
              ? { display: 'flex' }
              : { display: 'none' },
          ]"
        >
             <h2>{{popup.Unvan}}</h2>
<hr>
  <div class="m-flex-row button-row"> 
<button class="m-btn"><img src="../../../images/internet-vergi-dairesi.jpeg" alt=""></button>
<button class="m-btn"><img src="../../../images/vergi-dairesi.jpeg" alt=""></button>
   <button class="m-btn"><img src="../../../images/e-beyanname.jpeg" alt=""></button>

 </div>
          <div class="m-flex-row button-row">
<button class="m-btn"><img src="../../../images/sgk-ise-giris.jpeg" alt=""></button>
<button class="m-btn"><img src="../../../images/ise-çıkıs.jpeg" alt=""></button>
<button class="m-btn"><img src="../../../images/e-bildrige.jpeg" alt=""></button>

          </div>
 <div class="m-flex-row button-row"> 
<button class="m-btn"><img src="../../../images/e-portal.jpeg" alt=""></button>
<button class="m-btn"><img src="../../../images/tsg.jpeg" alt=""></button>
<button class="m-btn"><img src="../../../images/e-birlik.jpeg" alt=""></button>
 </div>
    </div>


               
      </template>
    </b-modal>
  </div>
</template>

<script>
import AppTable from "@core/components/app-table/mukellefTable.vue";
import {
  BRow,
  BCol,
  BFormGroup,
  BFormDatepicker,
  BFormCheckbox,
  BFormRadio,
  BButton,
  BFormSelect,
  BFormTextarea,
  BTable ,
    BFormInput,
        BForm,
         BInputGroupPrepend, BInputGroup,
} from "bootstrap-vue";
import Cleave from 'vue-cleave-component'
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import vSelect from "vue-select";
import 'cleave.js/dist/addons/cleave-phone.us'
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AppTable,
    BRow,
    BTable ,
    BFormCheckbox,
    vSelect,
    BCol,
    BFormSelect,
    BFormGroup,
    BButton,
    BFormDatepicker,
    BFormRadio,
    BFormTextarea,
       BFormInput,
        BForm,
         BInputGroupPrepend, BInputGroup,
         Cleave
  },

  data() {
    return {
      options: {
              phone: {
          phone: true,
          phoneRegionCode: 'TR',
        },
      },
      dateTimeLanguage: lng.dateTimeLanguage,
      id: "",
      popupSection: "info",
      declaration: false,
      selected2: [],
      İnputDurum: [
        { value: false, text: "Pasif" },
        { value: true, text: "Aktif" },
      ],
iletisimdata:[],
      İnputDurumdata: null,
      popup: {},
      sgk: [],
      sgkPerson:{},
      beyannameler: [
        { title: "KDV1", icon: "null" },
        { title: "KDV2", icon: "null" },
        { title: "KDV3", icon: "null" },
        { title: "KDV4", icon: "null" },
        { title: "KDV 3 Aylık", icon: "null" },
        { title: "Damga", icon: "null" },
        { title: "Muhtasar", icon: "null" },
        { title: "Muhtasar 3 Aylık", icon: "null" },
        { title: "MUHSGK Aylık", icon: "null" },
        { title: "MUHSGK 3 Aylık", icon: "null" },
        { title: "POSET Aylık", icon: "null" },
        { title: "POSET 3 Aylık", icon: "null" },
        { title: "BA-BS", icon: "null" },
        { title: "Gelir Geçici", icon: "null" },
        { title: "Kurum Geçici", icon: "null" },
        { title: "Yıllık Gelir", icon: "null" },
        { title: "Kurumlar", icon: "null" },
        { title: "Basit Usül", icon: "null" },
        { title: "ÖİV", icon: "null" },
      ],
      inquireRequest: {
        startDate: new Date(),
        endDate: new Date(),
      },
      listRequest: {
        title: null,
        by: "0",
        active: true,
        passive: false,
      },
      faaliyetkodu:"",
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      months: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık",
      ],
      years: ["2018", "2019", "2020", "2021", "2022"],
      items: [ ],
      il:[],
      selectedil:"",
      ilce:[],
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
      columns: [
        {
          dataField: "UserId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "panel",
          caption: "",
          width: "50",
          cellTemplate: "mukellefColumnTemplate",
        },
        {
          dataField: "Unvan",
          caption: "Ünvan",
        },
        {
          dataField: "VergiDairesi",
          caption: "Vergi Dairesi",
        },
        {
          dataField: "VergiNo",
          caption: "Vergi No",
        },
        {
          dataField: "MukellefId",
          caption: "TC No",
        },
        {
          dataField: "Grup",
          caption: "Grup",
        },
        {
          dataField: "MukellefKodu",
          caption: "Muk Kodu",
        },
        {
          dataField: "Durum",
          caption: "Nace Kodu",
        },
        {
          dataField: "Vade",
          caption: "Telefon",
        },
        {
          dataField: "Tutar",
          caption: "Mail",
        },
        {
          dataField: "AdresIlce1",
          caption: "İlçe",
        },
        {
          dataField: "AdresIl1",
          caption: "İl",
        },
        {
          dataField: "panel",
          caption: "Panel",
          width: "100",
          cellTemplate: "panelColumnTemplate",
        },
      ],
      person: [],
      uptadeActive:true,
      beyandata:{
        aylık:[{value:true,text:"Aylık"},{value:false,text:' '}],
        yıllık:[{value:true,text:"Yıllık"},{value:false,text:' '}],
        üçaylık:[{value:true,text:"Üç Aylık"},{value:false,text:' '}],
        aylıkÜçaylık:[{value:false,text:"Üç Aylık"},{value:true,text:'Aylık'}]
      },
            beyanDataValue:{
KDV1:null,
KDV2:null,
KDV4:null,
GGECICI:null,
KGECICI:null,
MUHSGK:null,
FORMBA:null,
FORMBS:null,
POSET:null,
TURIZM:null,
GELIR:null,
GELIR1001E:null,
KURUMLAR:null,
BASIT:null,
OIV:null,
OTV:null,
GMSI:null,
DAMGA:null,
      },
      beyanalldata:{},
       fields: ['FaaliyetKodu', 'FaaliyetAciklama', 'Sil'],
   faaliyetdata:[],
   hitapField:['HitapŞekli','Telefon','Mail','GönderimYapılsın',"Sil"]
    };
  },
  directives: {
  focus: {
    componentUpdated: function (el, binding, vnode) {
      console.log(el.value);
       if(el.value=="true"){
    el.style.background="#28c76f7d"
  }else{
        el.style.background="#ea5455ab"

  }
document.addEventListener("change",()=>{
  el.style.color="#ffffffe6"
  if(el.value=="true"){
    el.style.background="#28c76f7d"
  }else{
        el.style.background="#ea5455ab"

  }
})

    }
  },
  input:{
inserted:function (el,) {
  document.addEventListener('focusout',()=>{
 let space=el.value;
faaliyetget(space)
  })
}
  }
},
  methods: {
    //#region Ust Bar Butonları
    queryClick() {
      this.$refs.queryPopup.show();
    },

    downloadClick(e) {},
    printClick(e) {},
    sendClick(e) {},
    listClick() {
      this.$refs.queryPopup.show();
    },
    listRunClick() {
      console.log(this.listRequest.type);
    },
    //#endregion

    //#region Boş Function
    emptyClick() {},
    //#endregion

    //#region SAYFA ICIN
    showPanelClick() {
      window.open("", "_blank");
    },
    showTaxPayerInfoClicks(e, v, y) {
      this.$refs.taxPayerPopup.show();
      this.person = this.getMukellefData.filter((el) => {
        return el.MukellefId == v;
      });

  this.popup=this.person[0]
 
  console.log(this.popup.FaaliyetAlani, this.faaliyetdata);
    },
    ...mapActions(["AddNewBeyanTakip","AddNewMükellef","DeleteSgkData","fetchİlce","fetchİller","fetchFaaliyet","fetchKalanBeyanname","fetchBeyanTakipProperties","uptadeSgkFirma","fetchSgkFirmaalar", "AddNewSgkData"]),
        inquireClick() {
      this.popup.iletisim=this.iletisimdata
      this.popup.FaaliyetAlani=this.faaliyetdata
console.log(this.popup);
this.AddNewMükellef(this.popup)
    },
    fetch(data) {
       
      let arr = [];
      console.log(this.sgk=[]);
      let subeıd = [];
      for (let i = 0; i < this.getMukellefData.length; i++) {
        const element = this.getMukellefData[i];
        arr.push(element.MukellefId);
      }
    
     console.log(subeıd);
      //* Sgk Tab
      if (data == "branch") {
  this.sgk=[]

        console.log(this.getFirmadata.length);
this.fetchSgkFirmaalar(arr)


        console.log(data);
        setTimeout(() => {
          const sgk = this.getFirmadata.filter((fil) => {
            console.log("filter in", data);
            return this.person[0].MukellefId == fil.MukellefId;
          });
          this.sgk = [];
          this.sgk = sgk;
        }, 400);
      }

      //* Beyan Takip Tab
    else if(data=="passwords"){
this.fetchKalanBeyanname([this.person[0].MukellefId]);

setTimeout(()=>{

  this.getKalanBeyanname.forEach(el=>{
    console.log(el)
    if(el.TurPropId==1){
this.beyanDataValue.KDV1=el.beyantakip
    }
     if(el.TurPropId==10){
this.beyanDataValue.POSET=el.beyantakip
    }
     if(el.TurPropId==11){
this.beyanDataValue.TURIZM=el.beyantakip
    }
     if(el.TurPropId==13){
this.beyanDataValue.GELIR=el.beyantakip
    }
     if(el.TurPropId==14){
this.beyanDataValue.GELIR1001E=el.beyantakip
    }
     if(el.TurPropId==15){
this.beyanDataValue.KURUMLAR=el.beyantakip
    }
     if(el.TurPropId==16){
this.beyanDataValue.BASIT=el.beyantakip
    }
     if(el.TurPropId==17){
this.beyanDataValue.OIV=el.beyantakip
    }
     if(el.TurPropId==18){
this.beyanDataValue.OTV=el.beyantakip
    }
      if(el.TurPropId==19){
this.beyanDataValue.GMSI=el.beyantakip
    }
      if(el.TurPropId==2){
this.beyanDataValue.KDV2=el.beyantakip
    }
      if(el.TurPropId==20){
this.beyanDataValue.DAMGA=el.beyantakip
    }
      if(el.TurPropId==4){
this.beyanDataValue.KDV4=el.beyantakip
    }
      if(el.TurPropId==5){
this.beyanDataValue.GGECICI=el.beyantakip
    }
      if(el.TurPropId==6){
this.beyanDataValue.KGECICI=el.beyantakip
    }
      if(el.TurPropId==7){
        console.log(el);
this.beyanDataValue.MUHSGK=el.beyantakip
    }
     if(el.TurPropId==8){
this.beyanDataValue.FORMBA=el.beyantakip
    }
     if(el.TurPropId==9){
this.beyanDataValue.FORMBS=el.beyantakip
    }
  })
  console.log(this.beyanDataValue);
},400)
       }

    },
    //#endregion
   getsgkdata(data){
     console.log(data);
this.sgkPerson=data;
this.uptadeActive=false
    },
    sgkuptade(){
      console.log(this.sgkPerson);
this.uptadeSgkFirma(this.sgkPerson)
    },
    sgkdelete(e){
console.log(e);
this.DeleteSgkData(e.SubeId)
let dat=this.sgk.indexOf(e);
this.sgk.splice(dat,1)
    },
    AddNewhitap(){
      let id=Math.floor((Math.random() * 100) + 1)
    let obj={
 HitapŞekli:"" , Telefon: '', Mail: '', GönderimYapılsın: true,id:id
    }
 console.log(this.iletisimdata);
    this.iletisimdata.push(obj)
    },
        AddNewSube() {
     const data=  this.getFirmadata.sort((a,b)=>{return a.SubeId - b.SubeId})
     console.log(data);
          let obj = {
            BirimMaliyet: "",
            Durum: false,
            MetreKare: "",
            MukellefId: this.person[0].MukellefId,
            SicilNo: "",
            SistemSifresi: "081491",
            SubeAcilis: null,
            SubeAdi: "ökk",
            SubeId:Math.floor((Math.random() * 10000) + 559),
            SubeKapanis: null,
            SubeKodu: null,
            SubeKullanicAdi: "",
            SubeKullaniciKodu: "",
            SubeNot: null,
            İsyeriSifresi: "",
          };
         this.AddNewSgkData(obj)
         console.log(this.getFirmadata);
         this.sgk.push(obj)
        },
  AddNewFaaliyet(){
     let obj={      
FaaliyetAciklama :"",
      };
      console.log(this.faaliyetdata);
      this.faaliyetdata.push(obj)
  },
fetchIlAndIlce(){
this.fetchİller()
},
faaliyetget(){
let arr=document.querySelectorAll('.row-style') 
let elİnput=arr[arr.length-1].children[0].children[0].children[0].value;
let elİnpust=arr[arr.length-1];
  let space=`${elİnput+"              "}`
  console.log(space);
this.fetchFaaliyet(space)
setTimeout(()=>{
 
console.log( this.filterfaaliyet);
this.faaliyetdata.push(this.filterfaaliyet)

console.log(this.faaliyetdata);

},400)
setTimeout(()=>{


let index = this.faaliyetdata.findIndex(el=>{
 return el.FaaliyetAciklama==''
})
this.faaliyetdata.splice(index,1)
console.log(this.faaliyetdata);
},500)
},
iletisimget(e,id){
let index=this.iletisimdata.findIndex(el=>{
 return id==el.id
})
console.log(index,id);
let obj=this.iletisimdata[index]
if(e.classList.value=="hitap"){
  console.log(e.value);
  obj.HitapŞekli=e.value
}
if(e.classList.value=="mail"){
  console.log(e.value);
  obj.Mail=e.value
}
if(e.classList.value=="mailgnderim"){
  console.log(e.value);
  obj.GönderimYapılsın=e.value
}
if(e.classList.value=="tel"){
  console.log(e.value);
  obj.Telefon=e.value
}
console.log(obj);
},
getFaaliyetData(e){
  console.log(e);
  let deleteitem=this.faaliyetdata.indexOf(e.item);
  this.faaliyetdata.splice(deleteitem,1)
},
deletedata(e){
  let deleteitem=this.iletisimdata.indexOf(e.item);
  this.iletisimdata.splice(deleteitem,1)
},
  setBeyan(name,tur, value,) {
       
       console.log(name);
   let dataa= this.getKalanBeyanname.filter(el=>{
return el.TurPropId==tur
     })
  
let id = dataa.length==0?Math.floor(Math.random() * 10000 + 1):dataa[0].KalanId
console.log(dataa);
      let obj = {
        KalanId: id,
        KontrolAraligi: 0,
        MukellefId: this.person[0].MukellefId,
        TurPropId: Number(tur),
        beyandurumu: false,
        beyantakip: value,
      };
      console.log(obj,this.beyanDataValue);
     this.AddNewBeyanTakip(obj);
    },
  },

  watch: {
    popupSection() {
      console.log(this.popupSection == "branch");
      if (this.popupSection == "branch") {
        this.fetch("branch");
      }
      if (this.popupSection == "beyan") {
        this.fetch("beyan");
      }
      if(this.popupSection=="passwords"){
        this.fetch("passwords")
      }
    },
    person(newValue,OldValue){
if(newValue[0]!=OldValue[0]){
   this.beyanDataValue={
KDV1:null,
KDV2:null,
KDV4:null,
GGECICI:null,
KGECICI:null,
MUHSGK:null,
FORMBA:null,
FORMBS:null,
POSET:null,
TURIZM:null,
GELIR:null,
GELIR1001E:null,
KURUMLAR:null,
BASIT:null,
OIV:null,
OTV:null,
GMSI:null,
DAMGA:null,
      };
  this.faaliyetdata=[]
   this.fetchFaaliyet([this.person[0].MukellefId]);
   this.iletisimdata=[]
   this.popup.hasOwnProperty("iletisim")?this.iletisimdata=this.popup.iletisim: console.log("data yok")
this.popup.hasOwnProperty("FaaliyetAlani")?this.faaliyetdata=this.popup.FaaliyetAlani: console.log("data yok")

    

}
   
    },
    selectedil(){
      this.fetchİlce([this.selectedil])
    },
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
    ...mapGetters(["reilce","reil","reFaaliyet","reKalanBeyanname","reBeyanTakipProperties","reMukellef", "reSgkFirmalar", "reTicaretSicilGazetesi"]),
      getIl(){
      return this.reil.map(el=>{
     return {value:el.SehirId,text:el.SehirAdi}
    })
      },
      getIlce(){
        return this.reilce.map(el=>{
          return {value:el.IlceId,text:el.IlceAdi}
        })
      },
    getMukellefData() {
      return this.reMukellef;
    },
    getFirmadata() {
      return this.reSgkFirmalar;
    },
    getFaaliyet() {
      return this.reFaaliyet;
    },
    getKalanBeyanname() {
      return this.reKalanBeyanname;
    },
    getBeyanTakipProperties() {
      return this.reBeyanTakipProperties;
    },
    filterfaaliyet(){
return this.reFaaliyet
    },
  },
  mounted(){
    this.fetchIlAndIlce()
  }
};
</script>

<style>
.modal-header{
  background: #ff503c!important;
}
.feather-trash-2{
  color: #ff4e4f;
  width: 16px;
height: 16px;
}
.m-popup {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 15px;
}

.m-popup-nav {
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 35px;
  margin: 0;
  padding: 0;
  user-select: none;
  cursor: pointer;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.39);
  margin-bottom: 5px;
}

.m-popup-nav > li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 7px;
  border-radius: 5px;
}

.m-popup-nav > li.active {
  background: rgb(236, 236, 236);
}

.m-popup-nav > li > i[class="gg-key"] {
  margin-left: 3px;
  margin-right: 10px;
}
.m-flex-row {
  width: 100%;
  display: flex;
  gap: 35px;
  overflow-x: auto;
  justify-content: space-between;
}

  .button-table{
  justify-content: flex-end!important;
  gap:5px
  }
  .button-table > .btn{
  width: 33px;
height: 26px;
padding: 0px;
  }
  .button-row{
    justify-content: space-evenly!important;
  }
.button-row > button{
background: #ffff;
border: none;
box-shadow: 1px 6px 8px 0px #918989;
}
.button-row > button >img{
 width: 100px;
}
.m-flex-row > .m-input {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 80%;
}
h2{
  margin-bottom: 0px!important;
}
h2 + hr{
  margin-top: 0px!important;
}
.m-flex-row > .m-input > label {
  font-size: 15px;
  color: black;
  font-weight: 500;
}

.m-flex-row > .m-input > input {
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
  
  padding: 4px 8px;
}

.m-flex-row > table > tr > td > input {
  border: none;
}

.m-flex-row > .m-input input:focus,
.m-flex-row > table > tr > td > input:focus {
  outline: none;
}

.m-flex-row#m-table {
  max-height: 150px;
  overflow: auto;
}

.m-flex-row table {
  width: 100%;
  border: 1px solid #d8d6de;
}

.m-popup .m-flex-row:nth-child(3) table tr {
  height: 35px;
}

.m-flex-row table tr:nth-child(1) td {
  background-color: rgb(228, 228, 228);
  color: black;
  font-weight: 500;
}

.m-flex-row table tr td:nth-child(1) {
  width: 150px;
}

.m-flex-row table tr td {
  padding: 0 10px;
}

.declaration {
  width: 320px;
  height: 400px;
  background: white;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  border-radius: 0.357rem;
  filter: drop-shadow(0 0 15px rgba(0, 0, 0, 0.125));
  padding: 8px;
  overflow-y: scroll;
}

.declaration ul {
  font-weight: 800;
  color: black;
  padding: 0;
  list-style-type: none;
  font-size: 15px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.39);
  padding-bottom: 7px;
  margin: 0;
  margin-bottom: 7px;
}

.declaration ul li {
  display: flex;
  align-items: center;
  gap: 5px;
  color: gray;
  font-size: 13px;
  margin-left: 10px;
}

@media (max-width: 768px) {
  .m-popup-nav {
    gap: 5px;
  }
  .m-popup-nav > li {
    padding: 0 5px;
  }

  .m-popup-nav > li > i {
    transform: scale(0.8);
  }
}

/** ICONS */
.gg-info {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 20px;
  height: 20px;
  border: 2px solid;
  border-radius: 40px;
}
.gg-info::after,
.gg-info::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 3px;
  width: 2px;
  background: currentColor;
  left: 7px;
}
.gg-info::after {
  bottom: 2px;
  height: 8px;
}
.gg-info::before {
  height: 2px;
  top: 2px;
}

.gg-key {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 6px;
  height: 8px;
  border: 2px solid;
  border-radius: 100px;
  margin-left: -12px;
}
.gg-key::after,
.gg-key::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  right: -12px;
}
.gg-key::before {
  background: currentColor;
  width: 12px;
  height: 2px;
  top: 1px;
}
.gg-key::after {
  width: 5px;
  height: 3px;
  top: 2px;
  border-left: 2px solid;
  border-right: 2px solid;
}

.gg-briefcase {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 16px;
  border: 2px solid;
  border-radius: 2px;
  margin-top: 1px;
}
.gg-briefcase::after,
.gg-briefcase::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
}
.gg-briefcase::before {
  border: 2px solid;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  left: 4px;
  width: 10px;
  height: 4px;
  border-bottom: 0;
  top: -5px;
}
.gg-briefcase::after {
  width: 18px;
  height: 3px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 1px solid transparent;
  box-shadow: 0 2px 0, inset 16px 74px 0;
  top: 4px;
}

.gg-track {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 10px;
  height: 10px;
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px, inset 0 0 0 10px;
  border-radius: 100px;
}
.gg-track::after,
.gg-track::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  border-radius: 3px;
}
.gg-track::before {
  border-left: 4px solid;
  border-right: 4px solid;
  width: 18px;
  height: 2px;
  left: -6px;
  top: 2px;
}
.gg-track::after {
  width: 2px;
  height: 18px;
  border-top: 4px solid;
  border-bottom: 4px solid;
  left: 2px;
  top: -6px;
}

.gg-trash {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 10px;
  height: 12px;
  border: 2px solid transparent;
  box-shadow: 0 0 0 2px, inset -2px 0 0, inset 2px 0 0;
  border-bottom-left-radius: 1px;
  border-bottom-right-radius: 1px;
  margin-top: 4px;
}
.gg-trash::after,
.gg-trash::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
}
.gg-trash::after {
  background: currentColor;
  border-radius: 3px;
  width: 16px;
  height: 2px;
  top: -4px;
  left: -5px;
}
.gg-trash::before {
  width: 10px;
  height: 4px;
  border: 2px solid;
  border-bottom: transparent;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  top: -7px;
  left: -2px;
}

.gg-list {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 20px;
  border: 2px solid;
  border-radius: 3px;
}
.gg-list::after,
.gg-list::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 2px;
  height: 2px;
  background: currentColor;
  top: 3px;
  left: 3px;
  box-shadow: 0 4px 0, 0 8px 0;
}
.gg-list::after {
  border-radius: 3px;
  width: 8px;
  left: 7px;
}

.gg-close {
  box-sizing: border-box;
  position: relative;
  display: block;
  transform: scale(var(--ggs, 1));
  width: 22px;
  height: 22px;
  border: 2px solid transparent;
  border-radius: 40px;
}
.gg-close::after,
.gg-close::before {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 16px;
  height: 2px;
  background: currentColor;
  transform: rotate(45deg);
  border-radius: 5px;
  top: 8px;
  left: 1px;
}
.gg-close::after {
  transform: rotate(-45deg);
}
.table-responsive-sm{
  width: 100%;
  font-size: 15px;
}
hr{
  width: 100%;
  border: 0.3px solid!important;
}
.main-row-style th:nth-child(3){
  width: 23px;
  padding-inline:10px;

}
.faaliyetaciklama input{
  width: 100%;
}
.text-nowrap input{
border-radius: 5px;
border: none;
box-shadow: 0px 1px 3px 0px #717070;
padding: 5px;
margin: 5px;
}
.text-nowrap input:focus-visible{
  border: 1px solid #28c76f!important;
  outline: none;
}
.main-row-style-hitap th:nth-child(3){
width: 31%;
}
.row-style-hitap td:nth-child(3) span input{
  width: 100%;
}
.main-row-style-hitap th:nth-child(4){
  padding-inline: 2px;
}
</style>