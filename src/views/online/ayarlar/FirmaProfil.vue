<template>
  <div>
    <b-card>
      <div class="pl-4">
        <h3>Firma Profili</h3>
      </div>
      <hr />
      <div class="m-flex-row">
        <div class="m-input">
          <div class="m-input-c row">
            <label class="col-6">VKN/TCKN*</label>
            <p>21635792566</p>
          </div>
          <div class="m-input-c row">
            <label class="col-6">Unvan</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Adı *</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Soyadı *</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">NACE Kodu</label>
            <b-form-group class="col-6 p-0">
              <v-select label="title" :options="option" />
            </b-form-group>
          </div>
          <div class="m-input-c row">
            <label class="col-6">KEP Adresi</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Müşteri Temsilcisi</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Bilgilendirme maili almak istiyorum</label>
            <b-form-checkbox v-model="selected" value="A"> </b-form-checkbox>
          </div>
          <div class="m-input-c row">
            <label class="col-6"
              >e-Arşiv Faturaları 8 günden sonra da iptal etmek
              istiyorum.</label
            >
            <b-form-checkbox v-model="selected" value="A"> </b-form-checkbox>
          </div>
        </div>
        <div class="m-input">
          <div class="m-input-c row">
            <label class="col-6">Müşteri Adı *</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Orta Adı </label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Kurumsal e-Posta *</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Müsteri No</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Müşteri Temsilcisi</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Bilgilendirme maili almak istiyorum</label>
            <b-form-checkbox v-model="selected" value="A"> </b-form-checkbox>
          </div>
          <div class="m-input-c row">
            <label class="col-6"
              >e-Arşiv Faturaları 8 günden sonra da iptal etmek
              istiyorum.</label
            >
            <b-form-checkbox v-model="selected" value="A"> </b-form-checkbox>
          </div>
        </div>
      </div>
      <br /><br />
      <div class="m-flex-row">
        <div class="m-input">
          <div class="m-input-c row">
            <label class="col-6">Sorumlu Tckn</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Sorumlu Adı</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Sorumlu Cep Tel.Adı *</label>
            <input class="col-6" type="text" />
          </div>
        </div>
        <div class="m-input">
          <div class="m-input-c row">
            <label class="col-6">Sorumlu Soyadı</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Sorumlu e-Posta</label>
            <input class="col-6" type="text" />
          </div>
        </div>
      </div>
      <hr />
      <div class="m-flex-row">
        <div class="m-input">
          <div class="m-input-c row">
            <label class="col-6">Ver. Dairesi *</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Oda Kayıt Numarası</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Ticari Uygulama</label>
            <input class="col-6" type="text" />
          </div>
        </div>
        <div class="m-input">
          <div class="m-input-c row">
            <label class="col-6">Mersis No</label>
            <input class="col-6" type="text" />
          </div>
          <div class="m-input-c row">
            <label class="col-6">Kayıtlı Olduğu Oda</label>
            <input class="col-6" type="text" />
          </div>
        </div>
      </div>
    </b-card>
    <b-card>
      <b-tabs>
        <b-tab title="Sözleşme Bilgileri">
          <hr>
          <b-button
            v-ripple.400="'rgba(30, 30, 30, 0.15)'"
            variant="outline-dark"
            class="w-100"
            v-b-toggle.collapse-1
          >
            <b-row>
              <b-col>
                <label>Sözleşme Tarihi</label>
                <p>
                  <b> (24-01-2022) - (24-01-2023) </b>
                </p>
              </b-col>
              <b-col>
                <label>Hizmetler</label>
                <p>
                  <b> e-Arşiv 5000/30000 </b>
                </p>
              </b-col>
              <b-col>
                <label>Sözleşme Türü</label>
                <p>
                  <b> Kontörlü </b>
                </p>
              </b-col>
            </b-row>
          </b-button>

          <b-collapse id="collapse-1" class="mt-2">
            <b-card class="border mb-0">
              <b-card-text class="card-text">
                <b-row>
                  <b-col>
                    <label>Sözleşme Başlangıç Tarihi: </label>
                    <p>2022-01-24</p>
                  </b-col>
                  <b-col>
                    <label>Sözleşme Bitiş Tarihi: </label>
                    <p>2023-01-24</p>
                  </b-col>
                  <b-col>
                    <label>Sözleşme </label>
                    <p>
                      PDF: <span> <feather-icon icon="InboxIcon" /> </span>
                    </p>
                  </b-col>
                </b-row>
                <hr />
                <app-table
                  :pk="id"
                  :items="items"
                  :totalRows="16"
                  :title="'Sözleşmeye Dahil Hİzmetler'"
                  :columns="columns"
                />
              </b-card-text>
            </b-card>
          </b-collapse>
        </b-tab>

        <b-tab active title="Şube Bilgileri">
          <hr>
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
            @ok="AddBank"
          >
            <div class="m-flex-row">
              <b-row class="m-input">
                <label>Banka Adı</label>
                <input type="text" v-model="bank.Name" />

                <label>IBAN *</label>
                <input type="text" v-model="bank.iban" />
              </b-row>
            </div>
          </b-modal>
          <b-card-text>
            <app-table
              :pk="id"
              :items="items"
              :totalRows="16"
              :title="'Sözleşmeye Dahil Hİzmetler'"
              :columns="columnsk"
            />
          </b-card-text>
           </b-tab>


        <b-tab title="Banka Bilgileri">
          <hr>
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
            @ok="AddBank"
          >
            <div class="m-flex-row">
              <b-row class="m-input">
                <label>Banka Adı</label>
                <input type="text" v-model="bank.Name" />

                <label>IBAN *</label>
                <input type="text" v-model="bank.iban" />
              </b-row>
            </div>
          </b-modal>
          <b-card-text>
            <app-table
              :pk="id"
              :items="items"
              :totalRows="16"
              :title="'Sözleşmeye Dahil Hİzmetler'"
              :columns="columnsk"
            />
          </b-card-text>
        </b-tab>
        <b-tab title="Kullanıcı Bilgileri">
          <hr>
          <app-table
            :pk="id"
            :items="items"
            :totalRows="16"
            :title="'Kullanıcı Bilgileri'"
            :columns="columnKullanıcı"
          />
        </b-tab>
        <b-tab title="E-Posta Sunucu Bilgisi">
          <hr>
          <b-row class="mb-2">
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> Protocol: * </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                    v-model="eposta.protocol"
                    :state="eposta.protocol == '' ? false : true"
                    placeholder="Invalid"
                  />
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> Host: * </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                    v-model="eposta.host"
                    :state="eposta.host == '' ? false : true"
                    placeholder="Invalid"
                  />
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row  class="mb-2">
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> Port: * </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                    v-model="eposta.port"
                    :state="eposta.port == '' ? false : true"
                    placeholder="Invalid"
                  />
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> E-Posta/Kullanıcı Adı:* </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                    v-model="eposta.user"
                    :state="eposta.user == '' ? false : true"
                    placeholder="Invalid"
                  />
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row  class="mb-2">
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> Şifre: * </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                    v-model="eposta.password"
                    :state="eposta.password == '' ? false : true"
                    placeholder="Invalid"
                  />
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label>Şifreleme Türü: </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                    v-model="eposta.passType"
                    :state="eposta.passType == '' ? false : true"
                    placeholder="Invalid"
                  />
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row  class="mb-2">
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> İmza Metni: </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                    v-model="eposta.imza"
                    :state="eposta.imza == '' ? false : true"
                    placeholder="Invalid"
                  />
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label > Logo: </label>
                </b-col>
                <b-col>
                  <b-form-file
                    v-model="eposta.logo"
                    placeholder="Dosya seçin"
                    drop-placeholder="Buraya sürükleyin"
                  />
                </b-col>
              </b-row>
            </b-col>
          </b-row>


        </b-tab>

        <b-tab title="Muhasebeci Bilgileri"><hr> </b-tab>

        <b-tab title="TüRMOB Token Bilgisi"> 
          <hr>
<b-row>
  <b-col cols="3">
    <label > TÜRMOB'dan Alınan Token Bilgisi</label>
  </b-col>
  <b-col>
    <b-form-group>
      <b-input-group>
        <b-form-input
          id="basic-password"
          :type="passwordFieldType"
          placeholder="Your Password"
        />
        <b-input-group-append is-text>
          <feather-icon
            :icon="passwordToggleIcon"
            class="cursor-pointer"
            @click="togglePasswordVisibility"
          />
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
  </b-col>
</b-row>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="success"
    >
      Kaydet
    </b-button>
        </b-tab>
        <b-tab title="DBS Giriş Bilgileri">
          <hr>
              <b-row class="mb-2">
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> Kullanıcı Adı </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                 
                  />
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> Şifre </label>
                </b-col>
                <b-col>
                  <b-form-group>
      <b-input-group>
        <b-form-input
          id="basic-password"
          :type="passwordFieldType"
          placeholder="Your Password"
        />
        <b-input-group-append is-text>
          <feather-icon
            :icon="passwordToggleIcon"
            class="cursor-pointer"
            @click="togglePasswordVisibility"
          />
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
                  <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="success"
    >
      Kaydet
    </b-button>
           </b-tab>
        <b-tab title="İnteraktif Vergi Dairesi Giriş Bilgileri">
          <hr>
                  <b-row class="mb-2">
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> Kullanıcı Adı </label>
                </b-col>
                <b-col>
                  <b-form-input
                    id="input-invalid"
                 
                  />
                </b-col>
              </b-row>
            </b-col>
            <b-col>
              <b-row>
                <b-col cols="3">
                  <label> Şifre </label>
                </b-col>
                <b-col>
                  <b-form-group>
      <b-input-group>
        <b-form-input
          id="basic-password"
          :type="passwordFieldType"
          placeholder="Your Password"
        />
        <b-input-group-append is-text>
          <feather-icon
            :icon="passwordToggleIcon"
            class="cursor-pointer"
            @click="togglePasswordVisibility"
          />
        </b-input-group-append>
      </b-input-group>
    </b-form-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
                  <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="success" class="mr-2"
    >
      Kaydet
    </b-button>
        <b-button class="mr-2"
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="danger"
    >
      Sil
    </b-button>
        <b-button class="mr-2"
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
    >
      Güvenli Çıkış
    </b-button>
           </b-tab>
        <b-tab title="DBS Varsayılan Belge Seçimleri">
          <hr>
                        <b-row class="mb-2">

            <b-col>
              <b-row>
                <b-col cols="4">
                  <label> Varsayılanı eklemek istediğiniz hizmet:  </label>
                </b-col>
                <b-col>
                   <b-form-select
      v-model="belgeValue"
      :options="belgeler"
    />
                </b-col>
              </b-row>
            </b-col>
             
             <b-col><b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="success"
    >
      Kaydet
    </b-button></b-col>
          </b-row>
                  
           </b-tab>
        <b-tab title="Öntanımlı Fatura Ayarları">
          <hr>
                        <b-row class="mb-2">

            <b-col>
              <b-row>
                <b-col cols="4">
                  <label> Varsayılanı eklemek istediğiniz hizmet:  </label>
                </b-col>
                <b-col>
                   <b-form-select
      v-model="belgeValue"
      :options="belgeler"
    />
                </b-col>
              </b-row>
            </b-col>
             
             <b-col><b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="success"
    >
      Kaydet
    </b-button></b-col>
          </b-row>
           </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>
<script>
import AppCollapse from "@core/components/app-collapse/AppCollapse.vue";
import AppCollapseItem from "@core/components/app-collapse/AppCollapseItem.vue";
import {
  BCollapse,
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
  VBToggle,
  BFormGroup,
  BFormFile,
  BInputGroupAppend
} from "bootstrap-vue";
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import flatPickr from "vue-flatpickr-component";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import AppTable from "@/@core/components/app-table/FirmaProfil.vue";
import { mapActions } from "vuex";
export default {
  components: {
    AppTable,
    BInputGroupAppend,
    BCollapse,
    AppCollapse,
    AppCollapseItem,
    BRow,
    BTable,
    BFormCheckbox,
    BContainer,
    BTabs,
    BTab,
    BCol,
    BCardGroup,
    BFormSelect,
    BFormGroup,
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
    BFormFile,
  },
    mixins: [togglePasswordVisibility],
  directives: {
    "b-toggle": VBToggle,
    Ripple,
  },
  data() {
    return {
      selected: "",
      id: "",
      option: [],
      belgeler:[   { value: true, text: 'E-arşiv Belge' },],
     belgeValue:null,
     eposta: {
        protocol: "",
        host: "",
        port: "",
        user: "",
        passType: "",
        password: "",
        imza: "",
      },
      bank: {
        Name: "",
        iban: "",
        kullaniciId: JSON.parse(localStorage.getItem("userData")).userId,
      },
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Hizmet",
          caption: "Hizmet",
        },
        {
          dataField: "Ücret",
          caption: "Ücret",
        },
        {
          dataField: "Açıklama",
          caption: "Açıklama",
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
          dataField: "Name",
          caption: "Banka Adi",
        },
        {
          dataField: "iban",
          caption: "IBAN",
        },
      ],
      columnKullanıcı: [
        {
          dataField: "UserId",
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
          dataField: "Kullanıcı ıd",
          caption: "Kullanıcı ıd",
        },
      ],
      items: [{ Hizmet: "e-Arşiv 5000/30000", Ücret: "-", Açıklama: "" }],
    };
  },
  methods: {
    ...mapActions(["AddNewBank"]),
    AddBank() {
      this.AddNewBank(this.bank);
    },
  },
  computed:{
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  }
};
</script>


<style lang="scss" scoped>
@import "@core/scss/vue/libs/vue-flatpicker.scss";
.tabs {
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
  justify-content: space-evenly;
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
.m-input > .m-input-c row {
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
.m-flex-row > .m-input-c row label,
.m-flex-row > .m-input label {
  font-size: 13px;
  color: black;
  font-weight: 400;
}
.m-flex-row input,
.tbody-tr td input,
.m-flex-row > .m-input-c row input,
.m-flex-row > .m-input input {
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
  padding: 4px 8px;
}
.m-flex-row > table > tr > td > input {
  border: none;
}
.m-flex-row > .m-input-c row input:focus,
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
  .m-flex-row {
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
.feather-inbox {
  width: 40px;
  height: 40px;
  margin-left: 20px;
}
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