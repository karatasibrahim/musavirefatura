<template>
  <b-card no-body>
    <b-card-body ref="ButtonList">
      <b-button
        @click="queryClick"
        class="spacing"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="outline-primary"
      >
        <feather-icon icon="SearchIcon" class="mr-50" />
        <span class="align-middle">Sorgula</span>
      </b-button>

      <b-dropdown
        split-button-type="button"
        ref="DownloadDrop"
        @click="showDownloadDrop"
        split
        class="spacing"
        style="height: 39.38px"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        text="İndir"
        split-variant="outline-primary"
        variant="outline-primary"
      >
        <template #button-content>
          <feather-icon icon="DownloadIcon" size="16" class="align-middle" />
          <span class="align-middle"> İndir</span>
        </template>
        <b-dropdown-item @click="detailDownloadClick">
          <feather-icon icon="DownloadIcon" size="18" />
          <span class="align-middle"> Detaylı İndir</span>
        </b-dropdown-item>
        <b-dropdown-item @click="downloadClick">
          <feather-icon icon="DownloadIcon" size="18" />
          <span class="align-middle"> Detaysız İndir</span>
        </b-dropdown-item>
      </b-dropdown>

      <b-button
        @click="listClick"
        class="spacing"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="outline-primary"
      >
        <feather-icon icon="ListIcon" class="mr-50" />
        <span class="align-middle">Listele</span>
      </b-button>

      <b-dropdown
        split-button-type="button"
        ref="PrintDrop"
        @click="showPrintDrop"
        split
        class="spacing"
        style="height: 39.38px"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        text="İndir"
        split-variant="outline-primary"
        variant="outline-primary"
      >
        <template #button-content>
          <feather-icon icon="PrinterIcon" size="16" class="align-middle" />
          <span class="align-middle"> Yazdır</span>
        </template>
        <b-dropdown-item @click="printDeclarationClick">
          <feather-icon icon="FileTextIcon" size="18" />
          <span class="align-middle"> Beyanname</span>
        </b-dropdown-item>
        <b-dropdown-item @click="printAccrualClick">
          <feather-icon icon="FileTextIcon" size="18" />
          <span class="align-middle"> Tahakkuk</span>
        </b-dropdown-item>
        <b-dropdown-item @click="printAllClick">
          <feather-icon icon="FileTextIcon" size="18" />
          <span class="align-middle"> Tümü</span>
        </b-dropdown-item>
      </b-dropdown>

      <!-- <b-dropdown
        split-button-type="button"
        ref="ExportDrop"
        @click="showExportDrop"
        split
        class="spacing"
        style="height: 39.38px"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        text="İndir"
        split-variant="outline-primary"
        variant="outline-primary"
      >
        <template #button-content>
          <feather-icon
            icon="ExternalLinkIcon"
            size="16"
            class="align-middle"
          />
          <span class="align-middle"> Dışa Aktar</span>
        </template>
        <b-dropdown-item @click="exportExcelClick">
          <feather-icon icon="BookIcon" size="18" />
          <span class="align-middle"> Excel</span>
        </b-dropdown-item>
        <b-dropdown-item @click="exportPdfClick">
          <feather-icon icon="FileIcon" size="18" />
          <span class="align-middle"> Pdf</span>
        </b-dropdown-item>
        <b-dropdown-item @click="exportWordClick">
          <feather-icon icon="FileTextIcon" size="18" />
          <span class="align-middle"> Word</span>
        </b-dropdown-item>
        <b-dropdown-item @click="exportXmlClick">
          <feather-icon icon="FileTextIcon" size="18" />
          <span class="align-middle"> Xml</span>
        </b-dropdown-item>
      </b-dropdown> -->

      <b-dropdown
        split-button-type="button"
        ref="ShareDrop"
        @click="showShareDrop"
        split
        class="spacing"
        style="height: 39.38px"
        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
        text="Paylaş"
        split-variant="outline-primary"
        variant="outline-primary"
      >
        <template #button-content>
          <feather-icon icon="Share2Icon" size="16" class="align-middle" />
          <span class="align-middle"> Gönder</span>
        </template>
        <b-dropdown-item @click="sendSmsClick">
          <feather-icon icon="SmartphoneIcon" size="18" />
          <span class="align-middle"> Sms Gönder</span>
        </b-dropdown-item>
        <b-dropdown-item @click="sendEmailClick">
          <feather-icon icon="MailIcon" size="18" />
          <span class="align-middle"> E-Posta Gönder</span>
        </b-dropdown-item>
        <b-dropdown-item @click="sendWhatsappClick">
          <feather-icon icon="SendIcon" size="18" />
          <span class="align-middle"> Whatsapp Gönder</span>
        </b-dropdown-item>
      </b-dropdown>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol,
  BButton,
  BDropdown,
  BDropdownItem,
  BDropdownDivider,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";

export default {
  name: "AppFilter",
  components: {
    BCard,
    BCardHeader,
    BCardBody,
    BRow,
    BButton,
    BCol,
    BDropdown,
    BDropdownItem,
    BDropdownDivider,
  },
  directives: {
    Ripple,
  },
  props: {
    queryClick: Function,
    detailDownloadClick: Function,
    downloadClick: Function,
    listClick: Function,
    printDeclarationClick: Function,
    printAccrualClick: Function,
    printAllClick: Function,
    // exportExcelClick: Function,
    // exportPdfClick: Function,
    // exportWordClick: Function,
    // exportXmlClick: Function,
    sendSmsClick: Function,
    sendEmailClick: Function,
    sendWhatsappClick: Function,
  },
  methods: {
    showDownloadDrop() {
      this.$refs.DownloadDrop.show();
    },
    showPrintDrop() {
      this.$refs.PrintDrop.show();
    },
    showExportDrop() {
      this.$refs.ExportDrop.show();
    },
    showShareDrop() {
      this.$refs.ShareDrop.show();
    },
  },
};
</script>

<style scoped>
.spacing {
  margin-right: 10px;
}
</style>
