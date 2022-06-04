<template>
  <div>

    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      @click="toats"
      v-b-modal.fatura
    >
      Fatura Göster
 
    </b-button>
    <b-modal
      id="fatura"
      title="Fatura"
      ok-only
      size="xl"
      ok-title="Kaydet"
      v-if="showbill"
    >
      <arsiv
        v-if="showbill"
        :data="items"
        :person="VuexSerchData"
        :total="totals"
        :bill="BillOption"
        :desc="Description"
      />
    </b-modal>
    <b-row class="match-height">
          <b-row>
            <b-col
              lg="8"
              md="6"
              :style="[
               BillOption.BillTypeValue == 'Satış'
                  ? { display: 'none' }
                  : { display: 'inline-block' },
              ]"
            >
              <b-card
                ref="taxPayerPopup"
                title="Müşteri Bilgileri"
                size="lg"
                centered
                no-close-on-backdrop
              >
                <b-form-group>
                  <v-select
                    v-model="searchvalue"
                    label="title"
                    :options="SearchData"
                    v-search
                  />
                  <b-button
                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                    variant="primary"
                    @click="searchvalue.title = ''"
                  >
                    Temizle
                  </b-button>
                </b-form-group>
                <b-card-text>
                  <div class="m-flex-row">
                    <div class="m-input">
                      <div class="m-input-c">
                        <label>VKN/TCKN</label>
                        <input
                          :disabled="searchvalue.title == '' ? false : true"
                          type="text"
                          v-model="senderReceiver.vkn"
                        />
                      </div>
                      <div class="m-input-c">
                        <label>Vergi D.</label>
                        <input
                          :disabled="searchvalue.title == '' ? false : true"
                          type="text"
                          v-model="senderReceiver.vergiD"
                        />
                      </div>
                      <div class="m-input-c">
                        <label>e-Posta</label>
                        <input
                          :disabled="searchvalue.title == '' ? false : true"
                          type="text"
                          v-model="senderReceiver.EPosta"
                        />
                      </div>
                      <div class="m-input-c">
                        <label>Faks</label>
                        <input
                          :disabled="searchvalue.title == '' ? false : true"
                          type="text"
                          v-model="senderReceiver.Faks"
                        />
                      </div>
                    </div>
                    <div class="m-input">
                      <div class="m-input-c">
                        <label>Unvan</label>
                        <input
                          :disabled="searchvalue.title == '' ? false : true"
                          type="text"
                          v-model="senderReceiver.Unvan"
                        />
                      </div>
                      <div class="m-input-c">
                        <label>Adres</label>
                        <input
                          :disabled="searchvalue.title == '' ? false : true"
                          type="text"
                          v-model="senderReceiver.adress"
                        />
                      </div>
                      <div class="m-input-c">
                        <label>Telefon</label>
                        <input
                          :disabled="searchvalue.title == '' ? false : true"
                          type="text"
                          v-model="senderReceiver.adress"
                        />
                      </div>
                      <div class="m-input-c">
                        <label>Web Sitesi</label>
                        <input
                          :disabled="searchvalue.title == '' ? false : true"
                          type="text"
                          v-model="senderReceiver.Website"
                        />
                      </div>
                    </div>
                  </div>
                </b-card-text>
                <b-button
                  type="submit"
                  @click="PersonBankShow"
                  variant="success"
                >
                  <span class="align-middle">{{
                    searchvalue.title == ""
                      ? "Yeni Alıcı Oluştur"
                      : "Alıcıyı Düzenle"
                  }}</span>
                  <feather-icon icon="ArrowRightIcon" class="ml-50" />
                </b-button>
              </b-card>
            </b-col>
            <b-col
              lg="8"
              md="6"
              :style="[
                BillOption.BillTypeValue == 'Satış'
                  ? { display: 'inline-block' }
                  : { display: 'none' },
              ]"
            >
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
                      <input type="text"  v-model="senderReceiver.vkn" />
                    </div>
                    <div class="m-input-c">
                      <label>İl</label>
                      <input type="text"  v-model="senderReceiverAdress.city" />
                    </div>
                    <div class="m-input-c">
                      <label>Unvan</label>
                      <input type="text" v-model="senderReceiver.Unvan"/>
                    </div>
                  </div>
                  <div class="m-input">
                    <div class="m-input-c">
                      <label>Ülke</label>
                      <input type="text"  v-model="senderReceiverAdress.country"/>
                    </div>
                    <div class="m-input-c">
                      <label>İlçe</label>
                      <input type="text" />
                    </div>
                    <div class="m-input-c">
                      <label>Vergi Dairesi*</label>
                      <input type="text" v-model="senderReceiver.vergiD" />
                    </div>
                  </div>
                </div>

                <b-button
                  class="mt-2"
                  type="submit"
                  v-b-modal.modal-diger
                  variant="success"
                >
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
                          v-model="BillOption.BillTypeValue"
                          :options="BillType"
                          size="sm"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">Gönderim Şekli*</label>
                        <b-form-select
                          v-model="BillOption.SendingType"
                          :options="ShippingMethod"
                          size="sm"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">Düzenlenme Tarihi *</label>
                        <flat-pickr
                          v-model="BillOption.BillDate"
                          class="form-control"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">Düzenlenme Saati*</label>
                        <flat-pickr
                          v-model="BillOption.BillTime"
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
                          v-model="BillOption.moneyType"
                          :options="money"
                          size="sm"
                        />
                      </div>
                      <div class="m-input-c">
                        <label class="w-50">XSLT Dosyası:*</label>
                        <b-form-select
                          v-model="BillOption.XSLTFileValue"
                          :options="XSLTFile"
                          size="sm"
                        />
                      </div>
                    </div>
                  </div>
                </b-card-text>
                <b-form-checkbox v-model="BillOption.irsaliye" value="İrsaliye Yerine Geçer">
                  İrsaliye yerine geçer.
                </b-form-checkbox>
              </b-card>
            </b-col>
          </b-row>
     
<b-col lg="12"  :style="[
               BillOption.BillTypeValue == 'İade'
                  ? { display: 'inline-block' }
                  : { display: 'none' } ,
              ]">
    <b-tabs>
            <b-tab title="İrsaliye Bilgileri">
              <b-card>
                <repeater v-model="irsaliye"></repeater>
              </b-card>
            </b-tab>
            <b-tab title="İade Bilgileri">
              <b-card>
                <repeater v-model="Iade"></repeater>
              </b-card>
            </b-tab>
          </b-tabs>
</b-col>

      <b-col lg="12">
        <b-card>
          <b-container>
            <b-row align-v="center" align-h="between" class="mb-2">
              <b-col lg="7">
                <h4>Ürün Hizmet Bilgileri</h4>
              </b-col>
              <b-col lg="5">
                <b-row align-content="end" align-h="end">
                  <b-col md="4" >
                    <b-dropdown
                      id="dropdown-1"
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      text="Excel"
                      variant="primary"
                    >
                      <b-dropdown-item>Excelden yükle</b-dropdown-item>
                      <b-dropdown-item>Excele Aktar</b-dropdown-item>
                      <b-dropdown-item>Örnek Excel İndir</b-dropdown-item>
                    </b-dropdown>
                  </b-col>

                  <b-col cols="8">
                    <b-button
                      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                      variant="info"
                      class="button-wit"
                      v-b-modal.modal-toplu
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
              <b-form-textarea
                id="textarea-default"
                placeholder="Textarea"
                rows="3"
                v-model="Description"
              />
            </b-col>

            <b-col lg="5">
              <div class="m-flex-row">
                <div class="m-input">
                  <h3>Toplamlar</h3>
                  <div class="m-input-c">
                    <label>Ürün/Hizmet Tutar</label>
                    <input
                      v-model="totals.total"
                      :disabled="manuel ? false : true"
                      type="text"
                    />
                  </div>
                  <div class="m-input-c">
                    <label class="w-65">İskonto Tutar</label>
                    <b-form-textarea
                      v-model="totals.TotalDiscount"
                      :disabled="manuel ? false : true"
                      id="textarea-default"
                      placeholder="Textarea"
                      rows="1"
                      size="sm"
                    />
                  </div>
                  <div class="m-input-c" v-if="totals.KDVtotala != 0">
                    <label>KDV(18%)</label>
                    <input
                      v-model="totals.KDVtotala"
                      :disabled="manuel ? false : true"
                      type="text"
                    />
                  </div>
                  <div class="m-input-c" v-if="totals.KDVtotalb != 0">
                    <label>KDV(8%)</label>
                    <input
                      v-model="totals.KDVtotalb"
                      :disabled="manuel ? false : true"
                      type="text"
                    />
                  </div>
                  <div class="m-input-c" v-if="totals.KDVtotalc != 0">
                    <label>KDV(1%)</label>
                    <input
                      v-model="totals.KDVtotalc"
                      :disabled="manuel ? false : true"
                      type="text"
                    />
                  </div>
                  <div class="m-input-c" v-if="totals.KDVtotald != 0">
                    <label>KDV(0%)</label>
                    <input
                      v-model="totals.KDVtotald"
                      :disabled="manuel ? false : true"
                      type="text"
                    />
                  </div>
                  <div class="m-input-c">
                    <label>Vergiler Hariç Tutar</label>
                    <input
                      :disabled="manuel ? false : true"
                      v-model="totals.KDVwithoutTotal"
                      type="text"
                    />
                  </div>

                  <div class="m-input-c">
                    <label>Vergiler Dahil Tutar</label>
                    <input
                      :disabled="manuel ? false : true"
                      v-model="totals.KDVwithTotal"
                      type="text"
                    />
                  </div>

                  <div class="m-input-c">
                    <label>Ödenecek Tutar</label>
                    <input
                      :disabled="manuel ? false : true"
                      v-model="totals.allTotal"
                      type="text"
                    />
                  </div>

                  <div class="m-input-c">
                    <b-form-checkbox v-model="manuel" plain>
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
      ref="modal-1"
      title="Müşteri Bilgileri"
      ok-only
      size="lg"
      ok-title="Kaydet"
      @ok="AddSenderPerson"
    >
      <b-card>
        <div class="m-flex-row">
          <div class="m-input">
            <div class="m-input-c">
              <label>VKN/TCKN *</label>
              <input type="text" v-model="senderReceiver.vkn" />
            </div>
            <div class="m-input-c">
              <label>Ad</label>
              <input type="text" v-model="senderReceiver.name" />
            </div>
            <div class="m-input-c">
              <label>Soyad</label>
              <input type="text" v-model="senderReceiver.surname" />
            </div>
            <div class="m-input-c">
              <label>Vergi D. Şehir</label>
              <input type="text" v-model="senderReceiver.vergiDSehir" />
            </div>
            <div class="m-input-c">
              <label>Mersis No</label>
              <input type="text" v-model="senderReceiver.MersisNo" />
            </div>
          </div>
          <div class="m-input">
            <div class="m-input-c">
              <label>Unvan *</label>
              <input type="text" v-model="senderReceiver.Unvan" />
            </div>
            <div class="m-input-c">
              <label>Orta Adı</label>
              <input type="text" v-model="senderReceiver.ortaAdi" />
            </div>
            <div class="m-input-c">
              <label>Ticaret Odası</label>
              <input type="text" v-model="senderReceiver.TicOdasi" />
            </div>
            <div class="m-input-c">
              <label>Vergi D.</label>
              <input type="text" v-model="senderReceiver.VergiD" />
            </div>
            <div class="m-input-c">
              <label>Tic. Sic. No</label>
              <input type="text" v-model="senderReceiver.TicSicNo" />
            </div>
          </div>
        </div>
      </b-card>
      <b-tabs>
        <b-tab title="Adres Bilgileri">
          <b-card-text>
            <b-button
              class="mb-2"
              type="submit"
              v-b-modal.adressadd
              variant="success"
            >
              <span class="align-middle">Yeni Adres Ekle</span>
              <feather-icon icon="ArrowRightIcon" class="ml-50" />
            </b-button>
            <app-table
              :pk="id"
              :items="getadress"
              :totalRows="16"
              :title="'Adres'"
              :columns="columns"
              :showTaxPayerInfoClick="showPdfPopup"
            />
          </b-card-text>
          <b-modal
            ref="adressadd"
            id="adressadd"
            title="Müşteri Bilgileri"
            ok-only
            size="lg"
            ok-title="Accept"
            @ok="AddSenderPersonAdress"
          >
            <div class="m-flex-row">
              <div class="m-input">
                <div class="m-input-c">
                  <label>Adres Adı:</label>
                  <input type="text" v-model="senderReceiverAdress.adress" />
                </div>
                <div class="m-input-c">
                  <label>e-Fatura Alıcı Etiketi:</label>
                  <input type="text" v-model="senderReceiverAdress.eFatura" />
                </div>
                <div class="m-input-c">
                  <label>Şehir *</label>
                  <input type="text" v-model="senderReceiverAdress.city" />
                </div>
                <div class="m-input-c">
                  <label>Ülke *</label>
                  <input type="text" v-model="senderReceiverAdress.country" />
                </div>
                <div class="m-input-c">
                  <label>E-Posta</label>
                  <input type="text" v-model="senderReceiverAdress.EPosta" />
                </div>
                <div class="m-input-c">
                  <label>Faks</label>
                  <input type="text" v-model="senderReceiverAdress.Faks" />
                </div>
                <div class="m-input-c">
                  <label>Bina Adı</label>
                  <input type="text" v-model="senderReceiverAdress.BinaAdi" />
                </div>
                <div class="m-input-c">
                  <label>Daire No </label>
                  <input type="text" v-model="senderReceiverAdress.DaireNo" />
                </div>
              </div>
              <div class="m-input">
                <div class="m-input-c">
                  <label>Yetkili Kişi:</label>
                  <input
                    type="text"
                    v-model="senderReceiverAdress.YetkiliKişi"
                  />
                </div>
                <div class="m-input-c">
                  <label>e-İrsaliye Alıcı Etiketi</label>
                  <input type="text" v-model="senderReceiverAdress.eirsaliye" />
                </div>
                <div class="m-input-c">
                  <label>İlçe *</label>
                  <input type="text" v-model="senderReceiverAdress.İlce" />
                </div>
                <div class="m-input-c">
                  <label>Web Sitesi</label>
                  <input type="text" v-model="senderReceiverAdress.Website" />
                </div>
                <div class="m-input-c">
                  <label>Telefon</label>
                  <input type="text" v-model="senderReceiverAdress.Telefon" />
                </div>
                <div class="m-input-c">
                  <label>Mahalle/Cadde</label>
                  <input
                    type="text"
                    v-model="senderReceiverAdress.MahalleCadde"
                  />
                </div>
                <div class="m-input-c">
                  <label>Bina No </label>
                  <input type="text" v-model="senderReceiverAdress.BinaNo" />
                </div>
                <div class="m-input-c">
                  <label>Posta Kodu </label>
                  <input type="text" v-model="senderReceiverAdress.PostaKodu" />
                </div>

                <div class="m-input-c">
                  <label>Bayi No </label>
                  <input type="text" v-model="senderReceiverAdress.BayiNo" />
                </div>
              </div>
            </div>
          </b-modal>
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
              :mukellefid="id"
              :items="BankData"
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
    <b-card>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        @click="SaveDate"
      >
        Kaydet
      </b-button>
    </b-card>
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
  BFormGroup,
} from "bootstrap-vue";
import flatPickr from "vue-flatpickr-component";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import { mapActions, mapGetters } from "vuex";
const kullaniciId = JSON.parse(localStorage.getItem("userData")).userId;
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

import arsiv from "../FaturaOlustur.vue";
export default {
  components: {
    arsiv,
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
    BButton,
    BFormGroup,
    BDropdown,
    BFormTextarea,
    BDropdownItem,
    BCard,
    BCardText,
    BInputGroupPrepend,
    BFormInput,
    vSelect,
    BInputGroup,
    flatPickr,
    BModal,
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
      manuel: false,
      iade: [
        {
          FaturaNo: 40,
          DüzenlemeTarihi: "Dickerson",
          İşlemler: "Macdonald",
        },
      ],
      totals: {
        total: 0,
        TotalDiscount: 0,
        KDVwithoutTotal: 0,
        KDVtotal: 0,
        allTotal: 0,
        KDVtotala: 0,
        KDVtotalb: 0,
        KDVtotala: 0,
        KDVtotalc: 0,
        KDVtotald: 0,
      },
      dir: "ltr",
      columns: [
        {
          dataField: "UserId",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "adress",
          caption: "Adres",
        },
        {
          dataField: "city",
          caption: "İl",
        },
        {
          dataField: "country",
          caption: "Şehir",
        },
        {
          dataField: "Telefon",
          caption: "Telefon",
        },
        {
          dataField: "EPosta",
          caption: "Eposta",
        },
        {
          dataField: "Website",
          caption: "Websitesi",
        },
        {
          dataField: "Düzenle",
          caption: "Düzenle",
          cellTemplate: "Editdata",
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
          value: {
            name:"",
quantity:0,
unit:0,
unitPrice:0,
discounty:0,
discountt:0,
KDV:18,
total:0,
          },
        },
      ],
      irsaliye: [
        {
          name: "Irsaliye",
          value: {},
        },
      ],
      Iade:[
          {
          name: "Iade",
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
      BillOption:{
SendingType:"",
BillTypeValue:"",
BillDate:"",
BillTime:"",
BillOption:"",
XSLTFileValue:"",
moneyType:"",
irsaliye:""
      },
      Description:"",
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
      senderReceiver: {
        vkn: "",
        name: "",
        surname: "",
        vergiDSehir: "",
        vergiD: "",
        MersisNo: "",
        Unvan: "",
        ortaAdi: "",
        TicOdasi: "",
        VergiD: "",
        TicSicNo: "",
        kullaniciId: JSON.parse(localStorage.getItem("userData")).userId,
      },
      senderReceiverAdress: {
        adress: "",
        eFatura: "",
        city: "",
        country: "",
        EPosta: "",
        Faks: "",
        BinaAdi: "",
        DaireNo: "",
        BayiNo: "",
        PostaKodu: "",
        BinaNo: "",
        MahalleCadde: "",
        Telefon: "",
        İlce: "",
        Website: "",
        eirsaliye: "",
        YetkiliKişi: "",
        kullaniciId: kullaniciId,
        path: "",
      },
      SelectionChanged: {},
      bank: {
        Name: "",
        iban: "",
        kullaniciId: JSON.parse(localStorage.getItem("userData")).userId,
      },
      selected: "",
      searchvalue: {
        title: "",
      },
      showbill: false,
    };
  },
  directives: {
    Ripple,
    search: {
      bind: (el, binding, vnode) => {
        el.addEventListener("focusin", () => {
          console.log(el);
          document
            .getElementsByClassName("vs__search")[0]
            .addEventListener("keyup", () => {
              vnode.context.findPerson(
                document.getElementsByClassName("vs__search")[0].value
              );
            });
        });
      },
    },
  },
  methods: {
    ...mapActions([
      "FetchAdress",
      "UpdateNewAlici",
      "AddNewBank",
      "FetchPerson",
      "FetchBank",
      "AddNewPersonAdress",
      "UptadeAdressa",
      "AddArsiv",
    ]),
    SaveDate() {
      const data = {
        data:{
             AliciUnvan: this.senderReceiver.Unvan,
        AliciVknTckn: this.senderReceiver.vkn,
        BelgeNumarasi: "",
        BelgeTarihi: "",
        BelgeTuru: "",
        BelgeUrl: "",
        Ettn: "",
        KullaniciId: kullaniciId,
        OnayDurumu: false,
        },
     detay:{
      total:this.totals,
      items:this.items,
      faturaAyarları:this.BillOption,
      aciklama:this.Description
     }
      };
      this.AddArsiv(data);
      console.log(data);
      this.$toast({
        component: ToastificationContent,
        position: "top-right",
        props: {
          title: ``,
          icon: "CoffeeIcon",
          variant: "success",
          text: `Kayıt başarılı.`,
        },
      });
    },
    showPdfPopup(e) {
      console.log(e);
      (this.senderReceiverAdress = e), this.$refs["adressadd"].show();
    },
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
    AddSenderPerson() {
      console.log({
        ...this.senderReceiver,
        CariAdres: this.getSelectDAta.path,
      });

      this.UpdateNewAlici({
        ...this.senderReceiver,
        CariAdres: this.getSelectDAta.path,
      });
    },
    AddBank() {
      this.AddNewBank(this.bank);
    },
    findPerson(e) {
      let data = {
        kullaniciId: JSON.parse(localStorage.getItem("userData")).userId,
        data: e,
      };
      this.FetchPerson(data).then((res) => {
        this.senderReceiver = res.person;
        this.SelectionChanged = res.adress;
        console.log(res);
      });
      console.log(data);
    },
    PersonBankShow() {
      this.$refs["modal-1"].show();
      this.FetchBank(kullaniciId);
      this.FetchAdress(kullaniciId);
    },
    AddSenderPersonAdress() {
      if (this.senderReceiverAdress.hasOwnProperty("path")) {
        let id = this.senderReceiverAdress.path.split("/")[1];
        delete this.senderReceiverAdress.path;
        console.log(id, this.senderReceiverAdress);
        this.UptadeAdressa({ data: this.senderReceiverAdress, id: id });
      } else {
        this.AddNewPersonAdress(this.senderReceiverAdress);
      }
    },
    onSelectionChanged(e) {
      console.log();
    },
    toats() {
      //  :data="items" :person="VuexSerchData"  :total="totals"

      console.log(this.VuexSerchData,
        this.items[0].value.name)
      if (
        Object.keys(this.VuexSerchData).length > 0 &&
        this.items[0].value.name!=""
      ) {
        this.showbill = true;
      } else {
        this.$toast({
          component: ToastificationContent,
          position: "top-right",
          props: {
            title: `Uyarı`,
            icon: "AlertTriangleIcon",
            variant: "danger",
            text: `Değerleri Kontrol Ediniz`,
          },
        });
      }
    },
  },
  computed: {
    ...mapGetters([
      "GetSerach",
      "GetBank",
      "GetAdress",
      "GetSelected",
      "UptadeAdress",
    ]),
    VuexSerchData() {
      return this.GetSerach;
    },
    SearchData() {
      if (Object.keys(this.VuexSerchData).length == 0) {
        return this.option;
      } else {
        return [{ title: this.VuexSerchData.Unvan, data: this.VuexSerchData }];
      }
    },
    BankData() {
      return this.GetBank;
    },
    getadress() {
      return this.GetAdress;
    },
    getSelectDAta() {
      return this.GetSelected;
    },
  },
  watch: {
    items() {
      var totals = 0;
      var total = 0;
      var iskontoTotal = 0;
      var kdva = 0;
      var kdvb = 0;
      var kdvc = 0;
      var kdvd = 0;
      this.items.forEach((el) => {  
        iskontoTotal += el.value.discountt;
        console.log(el.value.KDV);
        if (el.value.KDV == 18) {
          kdva += el.value.kdvTl;
        }
        if (el.value.KDV == 8) {
          kdvb += el.value.kdvTl;
        }
        if (el.value.KDV == 1) {
          kdvc += el.value.kdvTl;
        }
        if (el.value.KDV == 0) {
          kdvd += el.value.kdvTl;
        }
        total += el.value.quantity * el.value.unitPrice;
        totals += el.value.total;
      });
    
      this.totals.allTotal = totals;
      this.totals.KDVwithTotal = total==NaN?0:totals;
      this.totals.total = total;
      this.totals.TotalDiscount = iskontoTotal==NaN?0:iskontoTotal;
      this.totals.KDVtotala = kdva;
      this.totals.KDVtotalb = kdvb;
      this.totals.KDVtotalc = kdvc;
      this.totals.KDVtotald = kdvd;
    },
    searchvalue() {
      console.log(this.searchvalue);
      this.findPerson(this.searchvalue);
    },
  },
};
</script>


<style lang="scss">
@import "@core/scss/vue/libs/vue-flatpicker.scss";
.tabs {
  width: 100%;
}
.modal-header {
  background: #ff503c !important;
}
@media (min-width: 1200px) {
  .modal-xl {
    max-width: 71%;
  }
  [dir="ltr"] .modal-xl {
    margin-left: 11%;
    margin-right: 11%;
  }
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