<template>
  <b-card>
    <b-row>
      <h6 class="section-label mx-1 mb-2">
        İŞLEMLER
      </h6>
      <b-col
        cols="12"
        class="mb-2"
      >
        <b-form-checkbox
          id="accountSwitch1"
          :checked="localOptions.commentOnArticle"
          name="check-button"
          switch
          inline
        >
          <span>TEBLİGATLAR SORGULANDIĞINDA E-POSTA VE BİLDİRİM GÖNDER</span>
        </b-form-checkbox>
      </b-col>
      <b-col
        cols="12"
        class="mb-2"
      >
        <b-form-checkbox
          id="accountSwitch2"
          :checked="localOptions.AnswerOnForm"
          name="check-button"
          switch
          inline
        >
          <span>VİZİTELER SORGULANDIĞINDA E-POSTA VE BİLDİRİM GÖNDER</span>
        </b-form-checkbox>
      </b-col>
      <b-col
        cols="12"
        class="mb-2"
      >
        <b-form-checkbox
          id="accountSwitch3"
          :checked="localOptions.followMe"
          name="check-button"
          switch
          inline
        >
          <span>BEYANNAMELER SORGULANDIĞINDA E-POSTA VE BİLDİRİM GÖNDER</span>
        </b-form-checkbox>
      </b-col>
       <b-col
        cols="12"
        class="mb-2"
      >
        <b-form-checkbox
          id="accountSwitch7"
          :checked="localOptions.followMe"
          name="check-button"
          switch
          inline
        >
          <span>SGK BİLDİRGELER SORGULANDIĞINDA E-POSTA VE BİLDİRİM GÖNDER</span>
        </b-form-checkbox>
      </b-col>

      <!-- application switch -->
      <h6 class="section-label mx-1 mt-2">
        UYGULAMA
      </h6>
    
      <b-col
        cols="12"
        class="mb-2"
      >
        <b-form-checkbox
          id="accountSwitch5"
          :checked="localOptions.productUpdates"
          name="check-button"
          switch
          inline
        >
          <span>HABER VE DUYURULAR</span>
        </b-form-checkbox>
      </b-col>
      <b-col
        cols="12"
        class="mb-2"
      >
        <b-form-checkbox
          id="accountSwitch6"
          :checked="localOptions.blogDigest"
          name="check-button"
          switch
          inline
        >
          <span>HAFTALIK ÖZETLER</span>
        </b-form-checkbox>
      </b-col>
      <!--/ application switch -->

      <!-- buttons -->
      <b-col cols="12">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="mr-1 mt-1"
        >
          Kaydet
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          class="mt-1"
          variant="outline-secondary"
        >
          İptal
        </b-button>
      </b-col>
      <!--/ buttons -->
    </b-row>
  </b-card>
</template>

<script>
import {
  BButton, BRow, BCol, BCard, BFormCheckbox,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BRow,
    BCol,
    BCard,
    BFormCheckbox,
  },
  directives: {
    Ripple,
  },
  props: {
    notificationData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      localOptions:""
      //  JSON.parse(JSON.stringify(this.notificationData)),
    }
  },
}
</script>
