<template>
  <div>
    <b-row class="match-height">
      <b-tabs>
        <b-tab title="Temel Bilgiler">
          <b-row>
            <b-col lg="8" md="6" :style="[BillTypeValue=='Satış'?{'display':'none'}:{'display':'inline-block'}]">
              <b-card
                ref="taxPayerPopup"
                title="Müşteri Bilgileri"
                size="lg"
                centered
                no-close-on-backdrop
              >
                <b-input-group style="margin-bottom: 11px">
                  <b-input-group-prepend is-text>
                    <feather-icon icon="SearchIcon" />
                  </b-input-group-prepend>
                  <b-form-input placeholder="Search" />
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                  >
                    Temizle
                  </b-button>
                </b-input-group>
                <b-card-text>
                  <div class="m-flex-row">
                    <div class="m-input">
                      <div class="m-input-c">
                        <label>VKN/TCKN</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>Vergi D.</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>e-Posta</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>Faks</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="m-input">
                      <div class="m-input-c">
                        <label>Unvan</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>Adres</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>Telefon</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>Web Sitesi</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </b-card-text>
                <b-button type="submit" v-b-modal.modal-1 variant="success">
                  <span class="align-middle">Yeni Alıcı Oluştur</span>
                  <feather-icon icon="ArrowRightIcon" class="ml-50" />
                </b-button>
              </b-card>
            </b-col>
<b-col lg="8" md="6"  :style="[BillTypeValue=='Satış'?{'display':'inline-block'}:{'display':'none'}]">
                  <b-card
                                  ref="taxPayerPopup"
                title="Müşteri Bilgileri"
                size="lg"
                centered
                no-close-on-backdrop
                  >
                  <div class="m-flex-row">
                    <div class="m-input">
                      <div class="m-input-c">
                        <label>VKN/TCKN</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>İl</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>Unvan</label>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="m-input">
                      <div class="m-input-c">
                        <label>Ülke</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>İlçe</label>
                        <input type="text" />
                      </div>
                      <div class="m-input-c">
                        <label>Vergi Dairesi*</label>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
              
                                <b-button class="mt-2" type="submit" v-b-modal.modal-diger variant="success">
                  <span class="align-middle">Diger Bilgiler</span>
                  <feather-icon icon="ArrowRightIcon" class="ml-50" />
                </b-button> 
                 </b-card>
</b-col>
            <b-col lg="4" md="6">
              <b-card
                ref="taxPayerPopup"
                title="Fatura Bilgileri"
                size="lg"
                centered
                no-close-on-backdrop
              >
                <b-card-text>
                  <div class="m-flex-row">
                    <div class="m-input">
                      <div class="m-input-c">
                        <label class="w-50">Fatura Türü *</label>
                        <b-form-select
                          v-model="BillTypeValue"
                          :options="BillType"
                          size="sm"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">Gönderim Şekli*</label>
                        <b-form-select
                          v-model="ShippingMethodValue"
                          :options="ShippingMethod"
                          size="sm"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">Düzenlenme Tarihi *</label>
                        <flat-pickr
                          v-model="dateDefault"
                          class="form-control"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">Düzenlenme Saati*</label>
                        <flat-pickr
                          v-model="timePicker"
                          class="form-control"
                          :config="{
                            enableTime: true,
                            noCalendar: true,
                            dateFormat: 'H:i',
                          }"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">Para Birimi*</label>
                        <b-form-select
                          v-model="moneyValue"
                          :options="money"
                          size="sm"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">XSLT Dosyası:*</label>
                        <b-form-select
                          v-model="XSLTFileValue"
                          :options="XSLTFile"
                          size="sm"
                        />
                      </div>
                    </div>
                  </div>
                </b-card-text>
                <b-form-checkbox v-model="irsaliye" value="true">
                  İrsaliye yerine geçer.
                </b-form-checkbox>
              </b-card>
            </b-col>
          </b-row>
        </b-tab>
        <b-tab title="Diger Bilgiler">
          <b-tabs>
            <b-tab title="İrsaliye Bilgileri">

                <b-card>
                  <repeater v-model="İrsaliye"></repeater>
                </b-card>
            </b-tab>
            <b-tab title="İade Bilgileri">
              <b-card>
                  <b-table responsive="sm" :items="iade"/>
              </b-card>
               </b-tab>
          </b-tabs>
        </b-tab>
      </b-tabs>

      <b-col lg="12">
        <b-card>
          <b-container>
            <b-row align-v="center" align-h="between" class="mb-2">
              <b-col lg="5">
                <h4>Ürün Hizmet Bilgileri</h4>
              </b-col>
              <b-col lg="6">
                <b-row align-content="end">
                  <b-col md="4" lg="4">
                    <b-dropdown
                      id="dropdown-1"
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      text="Primary"
                      variant="primary"
                    >
                      <b-dropdown-item>Excelden yükle</b-dropdown-item>
                      <b-dropdown-item>Excele Aktar</b-dropdown-item>
                      <b-dropdown-item>Örnek Excel İndir</b-dropdown-item>
                    </b-dropdown>
                  </b-col>

                  <b-col  cols="8" lg="4">
                    <b-button
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      variant="info"
                      class="button-wit"
                    >
                      Toplu Vergi Düzenleme
                      <feather-icon icon="EditIcon" class="mr-50" />
                    </b-button>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
            <b-container>
              <repeater v-model="items"></repeater>
            </b-container>
          </b-container>
        </b-card>
      </b-col>

      <b-col lg="12">
        <b-card>
          <b-row>
            <b-col lg="7" style="border-right: 2px solid #575151">
              <h3>Açıklama</h3>
              <label for="textarea-default">Textarea</label>
              <b-form-textarea
                id="textarea-default"
                placeholder="Textarea"
                rows="3"
              />
            </b-col>

            <b-col lg="5">
              <div class="m-flex-row">
                <div class="m-input">
                  <h3>Toplamlar</h3>
                  <div class="m-input-c">
                    <label>Ürün/Hizmet Tutar</label>
                    <input type="text" />
                  </div>
                  <div class="m-input-c">
                    <label class="w-65">İskonto Tutar</label>
                    <b-form-textarea
                      id="textarea-default"
                      placeholder="Textarea"
                      rows="1"
                      size="sm"
                    />
                  </div>
                  <div class="m-input-c">
                    <label>KDV (%18)</label>
                    <input type="text" />
                  </div>
                  <div class="m-input-c">
                    <label>Vergiler Hariç Tutar</label>
                    <input type="text" />
                  </div>

                  <div class="m-input-c">
                    <label>Vergiler Dahil Tutar</label>
                    <input type="text" />
                  </div>

                  <div class="m-input-c">
                    <label>Ödenecek Tutar</label>
                    <input type="text" />
                  </div>

                  <div class="m-input-c">
                    <b-form-checkbox v-model="selected" value="A" plain>
                      Manuel Giriş
                    </b-form-checkbox>
                  </div>
                </div>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <b-modal
      id="modal-1"
      title="Müşteri Bilgileri"
      ok-only
      size="lg"
      ok-title="Accept"
    >
      <b-card>
        <div class="m-flex-row">
          <div class="m-input">
            <div class="m-input-c">
              <label>VKN/TCKN *</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Ad</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Soyad</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Vergi D. Şehir</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Mersis No</label>
              <input type="text" />
            </div>
          </div>
          <div class="m-input">
            <div class="m-input-c">
              <label>Unvan *</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Orta Adı</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Ticaret Odası</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Vergi D.</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Tic. Sic. No</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </b-card>
      <b-tabs>
        <b-tab title="Adres Bilgileri">
          <b-card-text>
            <app-table
              :pk="id"
              :mukellefid="id"
              :items="items"
              :selectable="'none'"
              :totalRows="16"
              :title="' '"
              :columns="columns"
            />
          </b-card-text>
        </b-tab>
        <b-tab title="Banka Bilgileri">
          <b-button
            class="mb-2"
            type="submit"
            v-b-modal.bankaadd
            variant="success"
          >
            <span class="align-middle">Yeni Banka Ekle</span>
            <feather-icon icon="ArrowRightIcon" class="ml-50" />
          </b-button>
          <b-modal
            id="bankaadd"
            title="Yeni Hesap Bilgisi"
            ok-only
            ok-title="Ekle"
          >
            <div class="m-flex-row">
              <b-row class="m-input">
                <label>Banka Adı</label>
                <input type="text" />

                <label>IBAN *</label>
                <input type="text" />
              </b-row>
            </div>
          </b-modal>
          <b-card-text>
            <app-table
              :pk="id"
              :mukellefid="id"
              :items="items"
              :selectable="'none'"
              :totalRows="16"
              :title="' '"
              :columns="columnsk"
            />
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-modal>
  <b-modal
      id="modal-diger"
      title="Perakende Müşteri Bilgileri"
      ok-only
      size="lg"
      ok-title="Accept"
    >
      <b-card>
        <div class="m-flex-row">
          <div class="m-input">
            <div class="m-input-c">
              <label>Orta Adı</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Faks</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Bina No</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Cadde/Mahalle</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>E-posta</label>
              <input type="text" />
            </div>
             <div class="m-input-c">
              <label>Vergi Dairesi</label>
              <input type="text" />
            </div>
             <div class="m-input-c">
              <label>Mersis No</label>
              <input type="text" />
            </div>
          </div>
          <div class="m-input">
            <div class="m-input-c">
              <label>Telefon</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Bina No</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Kapı No</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Posta Kodu</label>
              <input type="text" />
            </div>
            <div class="m-input-c">
              <label>Web Sitesi</label>
              <input type="text" />
            </div>
                        <div class="m-input-c">
              <label>Ticaret Odası</label>
              <input type="text" />
            </div>
                        <div class="m-input-c">
              <label>Ticaret Sicil No</label>
              <input type="text" />
            </div>
          </div>
        </div>
      </b-card>
    </b-modal>


  </div>
</template>
<script>
import AppTable from "@core/components/app-table/mukellefTable.vue";
import Repeater from "../../../@core/repeater/repeater.vue";
import {
  BRow,
  BFormCheckbox,
  BTable,
  BContainer,
  BCol,
  BButton,
  BModal,
  BCardGroup,
  BInputGroup,
  BFormSelect,
  BCard,
  BCardText,
  BFormInput,
  BDropdown,
  BDropdownItem,
  BInputGroupPrepend,
  BFormTextarea,
  BTabs,
  BTab,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
export default {
  components: {
    repeater: Repeater,
    AppTable,
    BRow,
    BTable,
    BFormCheckbox,
    BContainer,
    BTabs,
    BTab,
    BCol,
    BCardGroup,
    BFormSelect,
    BDropdown,
    BFormTextarea,
    BDropdownItem,
    BCard,
    BButton,
    BCardText,
    BInputGroupPrepend,
    BFormInput,
    vSelect,
    BInputGroup,
    flatPickr,
    BModal,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      id: "",
      irsaliye: "",
      date: null,
      dateDefault: null,
      timePicker: null,
      dateNtim: null,
      multiDate: null,
      rangeDate: null,
      humanDate: null,
      disableDate: null,
      inlineDate: null,
      option: [],
      iade:[
       {
          FaturaNo: 40, DüzenlemeTarihi: 'Dickerson', İşlemler: 'Macdonald',
        },

      ],
      dir: "ltr",
      columns: [
        {
          dataField: "UserId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Adres",
          caption: "Adres",
          width: "50",
          cellTemplate: "mukellefColumnTemplate",
        },
        {
          dataField: "İl",
          caption: "İl",
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
          dataField: "Eposta",
          caption: "Eposta",
        },
        {
          dataField: "Websitesi",
          caption: "Websitesi",
        },
      ],
      columnsk: [
        {
          dataField: "UserId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Banka Adi",
          caption: "Banka Adi",
          width: "50",
          cellTemplate: "mukellefColumnTemplate",
        },
        {
          dataField: "IBAN",
          caption: "IBAN",
        },
      ],
      Unit: [
        { value: "Kg-Metre kare", text: "Kg-Metre kare" },
        { value: "Adet(Unit)", text: "Adet(Unit)" },
        {
          value: "Ton Başına Taşıma Kapasite",
          text: "Ton Başına Taşıma Kapasite",
        },
        { value: "Çift", text: "Çift" },
        { value: "Brüt Kalori Değer", text: "Brüt Kalori Değer" },
        { value: "Bin Litre", text: "Bin Litre" },
        { value: "Fıssıle İzotop Gramı", text: "Fıssıle İzotop Gramı" },
        { value: "Gram", text: "Gram" },
        { value: "Groos Ton", text: "Groos Ton" },
        { value: "Yüz Adet", text: "Yüz Adet" },
        { value: "Kilogram Potasyum Oksit", text: "Kilogram Potasyum Oksit" },
        {
          value: "KURUTULMUŞ NET AĞIRLIKLI KİLOGRAMI",
          text: "KURUTULMUŞ NET AĞIRLIKLI KİLOGRAMI",
        },
        { value: "Kilogram-Adet", text: "Kilogram-Adet" },
        {
          value: "DİFOSFOR PENTAOKSİT KİLOGRAMI",
          text: "DİFOSFOR PENTAOKSİT KİLOGRAMI",
        },
        { value: "KİLOGRAM", text: "KİLOGRAM" },
        {
          value: "HİDROJEN PEROKSİT KİLOGRAMI",
          text: "HİDROJEN PEROKSİT KİLOGRAMI",
        },
        {
          value: "METİL AMİNLERİN KİLOGRAMI",
          text: "METİL AMİNLERİN KİLOGRAMI",
        },
        { value: "AZOTUN KİLOGRAMI", text: "AZOTUN KİLOGRAMI" },
        {
          value: "KİLOGRAM POTASYUM HİDROKSİT",
          text: "KİLOGRAM POTASYUM HİDROKSİT",
        },
        { value: "%90 KURU ÜRÜN KİLOGRAMI", text: "%90 KURU ÜRÜN KİLOGRAMI" },
        {
          value: "SODYUM HİDROKSİT KİLOGRAMI",
          text: "SODYUM HİDROKSİT KİLOGRAMI",
        },
      ],
      items: [
        {
          name: "test-address",
          value: {},
        },
      ],
      İrsaliye: [
        {
          name: "İrsaliye",
          value: {},
        },
      ],
      BillType: [
        { value: "Satış", text: "Satış" },
        { value: "İade", text: "İade" },
        { value: "Tevkifat", text: "Tevkifat" },
        { value: "İstisna", text: "İstisna" },
        { value: "Özel Matrah", text: "Özel Matrah" },
        { value: "İhraç Kayıtlı", text: "İhraç Kayıtlı" },
      ],

      ShippingMethod: [
        { value: "Elektronik", text: "Elektronik" },
        { value: "Kağıt", text: "Kağıt" },
      ],

      money: [
        { value: "Türk Lirasi", text: "Türk Lirasi" },
        { value: "Euro", text: "Euro" },
        { value: "US Dolar", text: "US Dolar" },
        { value: "İngiliz Sterlini", text: "İngiliz Sterlini" },
      ],
      XSLTFile: [{ value: "Gib XSLT", text: "Gib XSLT" }],
      BillTypeValue: "",
      ShippingMethodValue: "",
      moneyValue: "",
      XSLTFileValue: "",
      ProductCalc: {
        name: "",
        quantity: 0,
        unit: 0,
        discounty: 0,
        discountt: 0,
        total: 0,
        unitPrice: 0,
        KDV: 0,
      },
      selected: "",
    };
  },
  methods: {
    AddBill() {},
    AddLine() {
      console.log(this.ProductCalc);
      let pro = {
        name: this.ProductCalc.name,
        quantity: this.ProductCalc.quantity,
        unit: this.ProductCalc.unit,
        discounty: this.ProductCalc.discounty,
        discountt: this.ProductCalc.discountt,
        total: this.ProductCalc.total,
        unitPrice: this.ProductCalc.unitPrice,
        KDV: this.ProductCalc.KDV,
      };

      this.items.push(pro);
      this.items.push(this.ProductCalc);
    },
  },
 
};
</script>


<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
.tabs{
  width: 100%;
}
.modal-header {
  background: #ff503c !important;
}
.feather-trash-2 {
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
  gap: 15px;
  align-items: center;
  justify-content: flex-start;
}
.button-table {
  justify-content: flex-end !important;
  gap: 5px;
}
.button-table > .btn {
  width: 33px;
  height: 26px;
  padding: 0px;
}
.button-row {
  justify-content: space-evenly !important;
}
.button-row > button {
  background: #ffff;
  border: none;
  box-shadow: 1px 6px 8px 0px #918989;
}
.button-row > button > img {
  width: 100px;
}

.m-flex-row > .m-input {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.m-input > .m-input-c {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.d-non {
  display: none;
}
h2 {
  margin-bottom: 0px !important;
}
h2 + hr {
  margin-top: 0px !important;
}
.button-wit {
  width: 235px;
}
.w-65 {
  width: 65%;
}
.product-card {
  padding-inline: 10px;
  input,
  select {
    width: 80%;
  }
}
.m-flex-row > .m-input-c label,
.m-flex-row > .m-input label {
  font-size: 13px;
  color: black;
  font-weight: 400;
}
.m-flex-row input,
.tbody-tr td input,
.m-flex-row > .m-input-c input,
.m-flex-row > .m-input input {
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
  padding: 4px 8px;
}
.m-flex-row > table > tr > td > input {
  border: none;
}
.m-flex-row > .m-input-c input:focus,
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
.v-select {
  width: 90%;
}
.thead-tr th {
  padding: 10px 10px 4px 10px;
}

.tbody-tr td {
  padding: 10px 10px 4px 10px;
}
.tbody-tr td input {
  width: 100%;
}
@media (max-width: 768px) {
  .m-popup-nav {
    gap: 5px;
  }
  .m-flex-row{
    flex-wrap: wrap;
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
.table-responsive-sm {
  width: 100%;
  font-size: 15px;
}
hr {
  width: 100%;
  border: 0.3px solid !important;
}
.main-row-style th:nth-child(3) {
  width: 23px;
  padding-inline: 10px;
}
.faaliyetaciklama input {
  width: 100%;
}
.text-nowrap input {
  border-radius: 5px;
  border: none;
  box-shadow: 0px 1px 3px 0px #717070;
  padding: 5px;
  margin: 5px;
}
.text-nowrap input:focus-visible {
  border: 1px solid #28c76f !important;
  outline: none;
}
.main-row-style-hitap th:nth-child(3) {
  width: 31%;
}
.row-style-hitap td:nth-child(3) span input {
  width: 100%;
}
.main-row-style-hitap th:nth-child(4) {
  padding-inline: 2px;
}
</style>