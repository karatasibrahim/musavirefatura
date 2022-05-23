<template>
  <div>
  

    <!-- frequently asked questions tabs pills -->
    <div id="faq-tabs">
      <b-tabs
        vertical
        content-class="col-12 col-md-8 col-lg-9"
        pills
        nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12"
        nav-class="nav-left"
      >

        <!-- payment tab -->
        <b-tab
          v-for="(categoryObj, categoryName, index) in faqData"
          :key="categoryName"
          :active="!index"
        >

          <!-- title -->
          <template #title>
            <feather-icon
              :icon="categoryObj.icon"
              size="18"
              class="mr-1"
            />
            <span class="font-weight-bold">{{ categoryObj.title }}</span>
          </template>

          <faq-question-answer :options="categoryObj" />
        </b-tab>
        <!--/ payment tab -->

        <!-- sitting lady image -->
        <template #tabs-end>
          <b-img
            fluid
            :src="require('@/assets/images/illustration/faq-illustrations.svg')"
            class="d-none d-md-block mt-auto"
          />
        </template>
        <!--/ sitting lady image -->
      </b-tabs>
    </div>
    <!--/ frequently asked questions tabs pills -->

    <!-- contact us -->
    <section class="faq-contact">
      <b-row class="mt-5 pt-75 text-center">
        <b-col cols="12">
          <h2>Sorunuza cevap bulamadınız mı?</h2>
          <b-card-text class="mb-3">
            SSS'mizde aradığınız sorunuza uygun bir cevap bulamazsanız, her zaman bizimle iletişime geçebilirsiniz. Sen kısa sürede size dönüş sağlayacağız
          </b-card-text>
        </b-col>
        <b-col sm="6">
          <b-card
            class="shadow-none py-1 faq-contact-card"
          >
            <b-avatar
              size="42"
              rounded
              variant="light-primary"
              class="mb-2"
            >
              <feather-icon
                icon="PhoneCallIcon"
                size="18"
              />
            </b-avatar>
            <h4>+ (552) 6401 640</h4>
            <span class="text-body">Her zaman yardımcı olmaktan mutluluk duyarız!</span>
          </b-card>
        </b-col>
        <b-col sm="6">
          <b-card
            class="shadow-none py-1 faq-contact-card"
          >
            <b-avatar
              size="42"
              rounded
              variant="light-primary"
              class="mb-2"
            >
              <feather-icon
                icon="MailIcon"
                size="18"
              />
            </b-avatar>
            <h4>info@emusavirim.com</h4>
            <span class="text-body">Daha hızlı yanıt almanın en iyi yolu!</span>
          </b-card>
        </b-col>
      </b-row>
    </section>
    <!--/ contact us -->
  </div>
</template>

<script>
import {
  BCard, BCardBody, BForm, BInputGroup, BFormInput, BCardText, BInputGroupPrepend, BTabs, BTab, BImg, BRow, BCol, BAvatar,
} from 'bootstrap-vue'
import FaqQuestionAnswer from './FaqQuestionAnswer.vue'
import mockData from "../../../services/online/faqQuestion/faq.datas.js";

export default {
  components: {
    BForm,
    BCard,
    BRow,
    BCol,
    BAvatar,
    BCardBody,
    BInputGroup,
    BFormInput,
    BCardText,
    BInputGroupPrepend,
    BTabs,
    BTab,
    BImg,
    FaqQuestionAnswer,
  },
  data() {
    return {
      faqSearchQuery: '',
      faqData: mockData,
    }
  },
  watch: {

  },
  methods: {
    // fetchData() {
    //   this.$http.get('/faq/data', { params: { q: this.faqSearchQuery } }).then(res => { this.faqData = res.data })
    // },
  },
  mounted(){
    console.log(this.faqData);
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-faq.scss';
</style>
