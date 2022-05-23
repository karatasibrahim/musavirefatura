<template>
<div>
    <main>
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
      :title="'Ödemelerim'"
      :columns="columns"
    />

  </div>
</main>

<main>
  <div
    id="pricing-plan"
  >

    <div class="text-center">
      <h1 class="mt-5">
       Kullanım Paketleri
      </h1>
      <p class="mb-2 pb-75">
    EMüşavirim asistan yazılımı ihtiyaçlarınıza uygun en iyi planı seçebilirsiniz
      </p>
      <div class="d-flex align-items-center justify-content-center mb-5 pb-50">
        <h6 class="mr-1 mb-0">
          Aylık
        </h6>
        <b-form-checkbox
          id="priceSwitch"
          v-model="status"
          name="price-switch"
          value="annually"
          unchecked-value="monthly"
          switch
          @input="tooglePlan"
        />
        <h6 class="ml-50 mb-0">
          Yıllık
        </h6>
      </div>
    </div>
    <!--/ title text and switch button -->

    <!-- pricing plan cards -->
    <b-row class="pricing-card">
      <b-col
        offset-sm-2
        sm="10"
        md="12"
        offset-lg="2"
        lg="10"
        class="mx-auto"
      >
        <b-row>
          <b-col md="4">
            <b-card
              align="center"
            >
              <!-- img -->
              <b-img
            :src="require('@/assets/images/illustration/pricing.svg')"
                class="mb-2 mt-5"
                alt="basic svg img"
              />
              <!--/ img -->
              <h3>{{  }}</h3>
              <b-card-text>
                {{  }}
              </b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                 
                  <span class="pricing-basic-value font-weight-bolder text-primary">0</span>
                   <sup class="font-medium-1 font-weight-bold text-primary">₺</sup>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/aylık</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >   <b>0 ₺/ yıllık</b></small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group class="list-group-circle text-left">
                <b-list-group-item>
              SINIRSIZ WHATSAPP GÖNDERİMİ
                </b-list-group-item>
                  <b-list-group-item>
              SINIRSIZ MAİL GÖNDERİMİ
                </b-list-group-item>
                <b-list-group-item>
             SMS İLE GÖNDERİM
                </b-list-group-item>
                <b-list-group-item>
             SINIRSIZ TOPLU VEYA TEKLİ SORGULAMA
                </b-list-group-item>
                        <b-list-group-item>
             SORGULANAN EVRAKLARI TOPLU İNDİRME
                </b-list-group-item>
                <b-list-group-item>
             100 MB DOSYA YÜKLEME ALANI
                </b-list-group-item>
                 <b-list-group-item>
             SINIRSIZ MÜKELLEF EKLEME
                </b-list-group-item>
                <b-list-group-item>
             MÜKELLEF PANELİ
                </b-list-group-item>
              </b-list-group>
              <!--/ plan benefit -->

              <!-- buttons -->
              <b-button
                v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                block
                class="mt-2"
                variant="outline-success"
              >
               14 Gün Ücretsiz Deneyin
              </b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              class="popular"
              align="center"
            >
              <div
                class="pricing-badge text-right"
              >
                <b-badge
                  variant="light-primary"
                  pill
                >
                  En Çok Tercih Edilen
                </b-badge>
              </div>
              <!-- img -->
              <b-img
              :src="require('@/assets/images/illustration/pricing2.svg')"
                class="mb-1"
                alt="svg img"
              />
              <!--/ img -->
              <h3>{{  }}</h3>
              <b-card-text>{{  }}</b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                
                  <span class="pricing-basic-value font-weight-bolder text-primary">85</span>
                    <sup class="font-medium-1 font-weight-bold text-primary">₺</sup>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/aylık</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                  
                >  <b>1000 ₺/ yıllık</b></small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group class="list-group-circle text-left">
            
                   <b-list-group-item>
                SINIRSIZ WHATSAPP GÖNDERİMİ
                </b-list-group-item>
                   <b-list-group-item>
                SINIRSIZ MAİL GÖNDERİMİ
                </b-list-group-item>
                   <b-list-group-item>
                SMS İLE GÖNDERİM
                </b-list-group-item>
                   <b-list-group-item>
                GÜNLÜK 100 TOPLU VEYA TEKLİ SORGULAMA
                </b-list-group-item>
                   <b-list-group-item>
                SORGULANAN EVRAKLARI TOPLU İNDİRME
                </b-list-group-item>
                   <b-list-group-item>
                100 MB DOSYA YÜKLEME ALANI
                </b-list-group-item>
                   <b-list-group-item>
                100 MÜKELLEFE KADAR KAYIT İMKANI
                </b-list-group-item>
                   <b-list-group-item>
                MÜKELLEF PANELİ
                </b-list-group-item>
              </b-list-group>
              <!--/ plan benefit -->

              <!-- buttons -->
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                block
                class="mt-2"
                variant="primary"
              >
                Satın Al
              </b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              align="center"
            >
              <!-- img -->
              <b-img
                :src="require('@/assets/images/illustration/pricing3.svg')"
                class="mb-2"
                alt="enterprise svg img"
              />
              <!--/ img -->
              <h3>{{  }}</h3>
              <b-card-text>{{  }}</b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                 
                  <span class="pricing-basic-value font-weight-bolder text-primary">125</span>
                   <sup class="font-medium-1 font-weight-bold text-primary">₺</sup>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/aylık</sub>
                </div>
                <small
                v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                > <b>1500 ₺/ yıllık</b></small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group
               
                class="list-group-circle text-left"
              >
                      <b-list-group-item>
                SINIRSIZ WHATSAPP GÖNDERİMİ
                </b-list-group-item>
                   <b-list-group-item>
                SINIRSIZ MAİL GÖNDERİMİ
                </b-list-group-item>
                   <b-list-group-item>
                SMS İLE GÖNDERİM
                </b-list-group-item>
                   <b-list-group-item>
                SINIRSIZ TOPLU VEYA TEKLİ SORGULAMA
                </b-list-group-item>
                   <b-list-group-item>
                SORGULANAN EVRAKLARI TOPLU İNDİRME
                </b-list-group-item>
                   <b-list-group-item>
                SINIRSIZ DOSYA YÜKLEME ALANI
                </b-list-group-item>
                   <b-list-group-item>
                SINIRSIZ MÜKELLEF KAYDI
                </b-list-group-item>
                   <b-list-group-item>
                MÜKELLEF PANELİ
                </b-list-group-item>
                 <b-list-group-item>
                MOBİL UYGULAMA
                </b-list-group-item>
              </b-list-group>
              <!--/ plan benefit -->

              <!-- buttons -->
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                class="mt-2"
                variant="outline-primary"
              >
                Satın Al
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <!--/ pricing plan cards -->

    <!-- pricing free trial -->
    <div class="pricing-free-trial">
      <b-row>
        <b-col
          lg="10"
          offset-lg="3"
          class="mx-auto"
        >
          <div class="pricing-trial-content d-flex justify-content-between">
            <div class="text-center text-md-left mt-3">
              <h3 class="text-primary">
               14 günlük ÜCRETSİZ deneme ile kullanmaya başlayın!
              </h3>
              <h5>14 gün boyunca tüm özelliklere tam erişim hakkı elde edeceksiniz.</h5>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="primary"
                class="mt-2 mt-lg-3"
              >
               14 günlük ÜCRETSİZ denemeye başlayın
              </b-button>
            </div>

            <!-- images -->
            <b-img
              fluid
              :src="require('@/assets/images/illustration/pricing4.svg')"
              class="pricing-trial-img"
              alt="svg img"
            />
            <!--/ images -->
          </div>
        </b-col>
      </b-row>
    </div>
 
  </div>

</main>
</div>
</template>


<script>
import {
  BFormCheckbox, BRow, BCol, BCard, BImg, BCardText, BListGroup, BListGroupItem, BButton, BBadge,
} from 'bootstrap-vue'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import Ripple from 'vue-ripple-directive'
import AppTable from "@core/components/app-table/OdemelerTable.vue";
import lng from "../../utils/strings";

/* eslint-disable global-require */
export default {
  components: {
    AppTable,
    BFormCheckbox,
    BButton,
    BCardText,
    BListGroup,
    BListGroupItem,
    BRow,
    BCol,
    BCard,
    BBadge,
    BImg,
    AppCollapseItem,
    AppCollapse,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      status: 'monthly',
      monthlyPlanShow: true,
      pricing: {},
      dateTimeLanguage: lng.dateTimeLanguage,
      inquireRequest: {
        startDate: new Date(),
        endDate: new Date(),
    },
    listRequest: {
        startDate: new Date(),
        endDate: new Date( ),
        type: [],
        title: [],
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
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
          dataField: "toplam_odeme",
          caption: "Toplam Ödeme",
        },
        {
          dataField: "paket",
          caption: "Paketler",
        },
        {
          dataField: "odeme_tarihi",
          caption: "Ödeme Tarihi",
        },
        {
          dataField: "odeme_tutari",
          caption: "Ödeme Tutarı",
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

  },
  methods: {
    tooglePlan() {
      if (this.status === 'monthly') {
        this.monthlyPlanShow = true
      } else {
        this.monthlyPlanShow = false
      }
    },
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

    },
    /////////////////////////////////


  },
  mounted(){
    console.log("benim sayfam geldii");
  }
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-pricing.scss';
</style>
