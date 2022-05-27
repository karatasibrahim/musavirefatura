<template>
  <div class="address">
    <!-- Optional default data cell scoped slot -->
    <div>
      <label>Ürün İsmi</label>
      <input type="text" v-model="localAddress.name" />
    </div>

    <div>
      <label>Miktar</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        v-model.number="localAddress.quantity"
      />
    </div>

    <div>
      <label>Birim</label>
      <b-form-select v-model="localAddress.unit" :options="Unit" size="sm" />
    </div>
    <div>
      <label>Birim Fiyatı</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        v-model.number="localAddress.unitPrice"
      />
    </div>
    <div>
      <label>İskonto(%)</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        placeholder="0%"
        v-model.number="localAddress.discounty"
      />
    </div>

    <div>
      <label>İskonto(tl)</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        placeholder="0₺"
        v-model.number="localAddress.discountt"
      />
    </div>
    <div>
      <label>KDv</label>
      <input
        type="number"
        @keyup="calculation(localAddress)"
        placeholder="0%"
        v-model.number.number="localAddress.KDV"
      />
    </div>
    <div>
      <label>Toplam</label>
      <input type="text" v-model.number="localAddress.total" />
    </div>

    <div>
      <feather-icon icon="EditIcon" @click="showModal(localAddress)" />
    </div>
    <b-modal
      ref="my-modal"
      id="modaledt"
      title="Satır Bilgileri"
      ok-only
      size="lg"
      ok-title="Accept"
    >
      <b-card>
        <div class="m-flex-row">
          <div class="m-input">
            <div class="m-input-c">
              <label>Ürün Adı</label>
              <input type="text" v-model="modalValue.name" />
            </div>
            <div class="m-input-c">
              <label>Miktar</label>
              <input type="text" v-model="modalValue.quantity" />
            </div>
            <div class="m-input-c">
              <label>Birim Fiyat</label>
              <input type="text" v-model="modalValue.unitPrice" />
            </div>
          </div>
          <div class="m-input">
            <div class="m-input-c">
              <label>Birim</label>
              <b-form-select
                :options="Unit"
                size="sm"
                v-model="modalValue.unit"
              />
            </div>
            <div class="m-input-c">
              <label>Ürün/Hizmet Tutarı</label>
              <input type="text" v-model="modalValue.total" />
            </div>
            <div class="m-input-c">
              <label>Satır Açıklaması</label>
              <input type="text" v-model="modalValue.desc" />
            </div>
          </div>
        </div>
        <hr />
        <div class="m-flex-row">
          <b-form-select :options="PaxList" v-model="AddedPax" size="sm" />
          <b-form-select
            :options="DiscoundList"
            v-model="DiscoundValue"
            size="sm"
          />
        </div>
        <div class="m-flex-row as mt-2">
          <b-col  lg="2">
            <label>İSKONTO</label>
          </b-col>

          <div class="m-input">
              <label> Oran (%) veya Birim Fiyatı (₺)</label>
            <b-col>
              <input type="text" v-model="modalValue.discounty" />
            </b-col>
          </div>
          <div class="m-input">
              <label> Tutar (₺)</label>
            <b-col >
              <input type="text" v-model="modalValue.discountt" />
            </b-col>
          </div>
          <div class="m-input">
            <label> İskonto / Artırım Sebebi</label>
            <b-col>

            <input type="text" />
            </b-col>
          </div>
        </div>
        <div class="m-flex-row as">
          <b-col lg="2">
            <label>KDV GERCEK</label>
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.KDV" />
          </b-col>
          <b-col>
            <input type="text" v-model="modalValue.KDVTl" />
          </b-col>
          <b-col>
            <input type="text" />
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="BMV">
          <b-col lg="2">
            <label>BMV</label>
          </b-col>

          <b-col>
            <input type="text" v-model="modalValue.BMV" />
          </b-col>

          <b-col>
            <input type="text" v-model="modalValue.BMVTl" />
          </b-col>
          <b-col>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="warning"
              class="btn-icon"
            >
              <feather-icon icon="Trash2Icon" @click="deleteİtem('BMV')"/>
            </b-button>
          </b-col>
        </div>

        <div class="m-flex-row d-non" id="İSKONTO-3">
          <b-col lg="2">
<label>İSKONTO 3</label>
          </b-col>
          <b-col>
  <input type="text" v-model="modalValue.Diskount3" />
          </b-col>
<b-col>
            <input type="text" v-model="modalValue.Diskount3Tl" />

</b-col>
        

<b-col>
  <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem(İSKONTO-3)" />
          </b-button>
</b-col>
          
        </div>

        <div class="m-flex-row d-non" id="GV-STOPAJI">
          <b-col lg="2">
            <label>GV STOPAJI</label>
          </b-col>
          <b-col>
          <input type="text" v-model="modalValue.GVStopaj" />

          </b-col>
<b-col>
          <input type="text" v-model="modalValue.GVStopajTl" />

</b-col>
<b-col>
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" @click="deleteİtem('GV-STOPAJI')"/>
          </b-button>

</b-col>

        </div>

        <div class="m-flex-row d-non" id="KV-STOPAJI">
          <label>KV STOPAJI</label>

          <input type="text" v-model="modalValue.KVStopaj" />

          <input type="text" v-model="modalValue.GVStopajTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="MERA-FONU">
          <label>MERA FONU</label>

          <input type="text" v-model="modalValue.Mera" />

          <input type="text" v-model="modalValue.MeraTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="1.LİSTE">
          <label>ÖTV 1.LİSTE</label>

          <input type="text" v-model="modalValue.ÖTV1" />

          <input type="text" v-model="modalValue.ÖTV1Tl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="3.LİSTE">
          <label>ÖTV 3.LİSTE</label>

          <input type="text" v-model="modalValue.ÖTV3" />

          <input type="text" v-model="modalValue.ÖTV3Tl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="4.LİSTE">
          <label>ÖTV 4.LİSTE</label>

          <input type="text" v-model="modalValue.ÖTV4" />

          <input type="text" v-model="modalValue.ÖTV4Tl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="3A-LİSTE">
          <label>ÖTV 3A LİSTE</label>

          <input type="text" v-model="modalValue.ÖTV3A" />

          <input type="text" v-model="modalValue.ÖTV3ATl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="3B-LİSTE">
          <label>ÖTV 3B LİSTE</label>

          <input type="text" v-model="modalValue.ÖTV3B" />

          <input type="text" v-model="modalValue.ÖTV3BTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="3C-LİSTE">
          <label>ÖTV 3C LİSTE</label>

          <input type="text" v-model="modalValue.ÖTV3C" />

          <input type="text" v-model="modalValue.ÖTV3CTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="DAMGA-V">
          <label>DAMGA V</label>

          <input type="text" v-model="modalValue.DAMGAV" />

          <input type="text" v-model="modalValue.DAMGAVTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="5035SKDAMGAV">
          <label>5035SKDAMGAV</label>

          <input type="text" v-model="modalValue.SKDAMGAV" />

          <input type="text" v-model="modalValue.SKDAMGAVTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="ÖZEL-İLETİŞİM-VERGİSİ">
          <label>ÖZEL İLETİŞİM VERGİSİ</label>

          <input type="text" v-model="modalValue.ÖİV" />

          <input type="text" v-model="modalValue.ÖİVTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="2.LİSTE">
          <label>ÖTV 2.LİSTE</label>

          <input type="text" v-model="modalValue.ÖTV2L" />

          <input type="text" v-model="modalValue.ÖTV2LTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div class="m-flex-row d-non" id="TES.ÜC">
          <label>BORSA TES.ÜC</label>

          <input type="text" v-model="modalValue.TESÜC" />

          <input type="text" v-model="modalValue.TESÜCTl" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div
          class="m-flex-row d-non"
          id=""
          :style="[
            AddedPax == 'DAMGA V' ? { display: 'flex!important' } : { '': '' },
          ]"
        >
          <label>DAMGA V</label>

          <input type="text" />

          <input type="text" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div
          class="m-flex-row d-non"
          id=""
          :style="[
            AddedPax == 'DAMGA V' ? { display: 'flex!important' } : { '': '' },
          ]"
        >
          <label>DAMGA V</label>

          <input type="text" />

          <input type="text" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div
          class="m-flex-row d-non"
          id=""
          :style="[
            AddedPax == 'DAMGA V' ? { display: 'flex!important' } : { '': '' },
          ]"
        >
          <label>DAMGA V</label>

          <input type="text" />

          <input type="text" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div
          class="m-flex-row d-non"
          id=""
          :style="[
            AddedPax == 'DAMGA V' ? { display: 'flex!important' } : { '': '' },
          ]"
        >
          <label>DAMGA V</label>

          <input type="text" />

          <input type="text" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>

        <div
          class="m-flex-row d-non"
          id=""
          :style="[
            AddedPax == 'DAMGA V' ? { display: 'flex!important' } : { '': '' },
          ]"
        >
          <label>DAMGA V</label>

          <input type="text" />

          <input type="text" />

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="warning"
            class="btn-icon"
          >
            <feather-icon icon="Trash2Icon" />
          </b-button>
        </div>
      </b-card>
    </b-modal>
  </div>
</template>
<script>
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
  name: "test-address",
  components: {
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
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      modalValue: {},
      PaxList: [
        { value: "BMV", text: "BMV" },
        { value: "GV-STOPAJI", text: "GV STOPAJI" },
        { value: "KV-STOPAJI", text: "KV STOPAJI" },
        { value: "MERA-FONU", text: "MERA FONU" },
        { value: "1.LİSTE", text: "ÖTV 1.LİSTE" },
        { value: "3.LİSTE", text: "ÖTV 3.LİSTE" },
        { value: "4.LİSTE", text: "ÖTV 4.LİSTE" },
        { value: "3A-LİSTE", text: "ÖTV 3A LİSTE" },
        { value: "3B-LİSTE", text: "ÖTV 3B LİSTE" },
        { value: "3C-LİSTE", text: "ÖTV 3C LİSTE" },
        { value: "DAMGA-V", text: "DAMGA V" },
        { value: "5035SKDAMGAV", text: "5035SKDAMGAV" },
        { value: "ÖZEL-İLETİŞİM-VERGİSİ", text: "ÖZEL İLETİŞİM VERGİSİ" },
        { value: "2.LİSTE", text: "ÖTV 2.LİSTE" },
        { value: "TES.ÜC", text: "BORSA TES.ÜC" },
      ],
      DiscoundList: [
        { value: "İskonto3", text: "İskonto3" },
        { value: "Artırım", text: "Artırım" },
        { value: "Artırım2", text: "Artırım2" },
        { value: "Artırım3", text: "Artırım3" },
        { value: "İskonto", text: "İskonto" },
        { value: "İskonto2", text: "İskonto2" },
      ],
      DiscoundValue: "",
      AddedPax: "",
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
      fields: [
        "#",
        "Ürün-Hizmet",
        "Miktar",
        "Birim",
        "BirimFiyati",
        "İskonto-yüzde",
        "İskonto",
        "KDV",
        "ToplamFiyat",
        "İşlemler",
      ],
    };
  },
  methods: {
    showModal(e) {
      this.$refs["my-modal"].show();
      this.modalValue = e;
    },
    calculation(field) {
      console.log(field);
      let cal = field.quantity * field.unitPrice;

      //İskonto değeri hesaplanmasi
      let YüzdeIskonto = field.discounty / 100;
      field.discountt = YüzdeIskonto;

      let iskonto = cal - cal * YüzdeIskonto;
      console.log(iskonto);
      //KDV hesaplanması
      let Brüt;
      let KdvHesaplama;
      if (field.KDV != 0) {
        if (field.discounty != 0) {
          Brüt = iskonto;
        } else {
          Brüt = cal;
        }
        console.log(Brüt);
        KdvHesaplama = Brüt * (field.KDV / 100) + Brüt;
        console.log(KdvHesaplama);
        field.total = KdvHesaplama;
      } else {
        if (field.discounty != 0) {
          field.total = iskonto;
        } else {
          field.total = cal;
        }
      }
    },
  },
  computed: {
    localAddress: {
      get() {
        return this.value;
      },
      set(localAddress) {
        this.$emit("input", localAddress);
      },
    },
  },
  watch: {
    AddedPax() {
      console.log(this.AddedPax);
      document.getElementById(this.AddedPax).style.display = "flex";
    },
    DiscoundValue() {
      document.getElementById(this.DiscoundValue).style.display = "flex";
    },
    modalValue() {
      console.log(this.modalValue);
    },
    "modalValue.GVStopaj"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.GVStopajTl = total * (this.modalValue.GVStopaj / 100);
    },
    "modalValue.TESÜC"() {
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.TESÜCTl = total * (2 / 100);
    },
    "modalValue.BMV"(){
      let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.BMVTl = total * (this.modalValue.BMV / 100);
    },
    "modalValue.Diskount3"(){
            let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.Diskount3Tl = total * (this.modalValue.Diskount3 / 100);
    },
    'modalValue.GVStopaj'(){
                let total = this.modalValue.quantity * this.modalValue.unitPrice;
      this.modalValue.GVStopajTl = total * (this.modalValue.GVStopaj / 100);
   
    }
  },
};
</script>

<style scoped lang="scss">
.as .col input,
.d-non .col input{
  width: 100%;
}
.address {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.address div {
  padding-inline: 10px;
}
.address div input {
  width: 100%;
  border: 1px solid #d8d6de;
  border-radius: 0.357rem;
  padding: 4px 8px;
}
.row {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

label {
  text-align: left;
  margin-bottom: 4px;
}

input {
  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--def-border-base);
}
@media (max-width: 768px) {
  .address {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: start;
  }
}
</style>