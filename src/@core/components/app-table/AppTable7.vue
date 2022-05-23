<template>
  <b-card no-body class="b-card">
    <DxDataGrid
      style="margin-left: 10px; margin-right: 10px; margin-top: 15px"
      :key-expr="pk"
      :columns="columns"
      :show-borders="true"
      ref="appGrid"
      :allow-column-reordering="true"
      :allow-column-resizing="true"
      :show-column-lines="true"
      :show-row-lines="true"
      :selected-row-keys="selectedRowKeys"
      @selection-changed="onSelectionChanged"
      :columns-auto-width="true"
      :data-source="items"
      @exporting="onExporting"
    >
      <DxExport :enabled="true" :allow-export-selected-data="true" />
      <DxLoadPanel :enabled="true" />
      <DxColumnChooser :enabled="true" />
      <DxColumnFixing :enabled="true" />

      <DxSearchPanel :visible="true" />
      <DxScrolling row-rendering-mode="virtual" />

      <DxFilterRow :visible="true" />

      <DxToolbar>
        <DxItem location="before" template="headerTemplate" />
        <DxItem location="before" template="inquireTemplate" />
      </DxToolbar>

      <template #inquireTemplate>
        <DxButton
          type="normal"
          text="Sorgula"
          icon="search"
          @click="inquireClick"
        />
      </template>

      <template #headerTemplate>
        <div class="text-center" style="margin-right: 20px">
          <h4>{{ title }}</h4>
        </div>
      </template>

    </DxDataGrid>
  </b-card>
</template>

<script>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BCardTitle,
  BCardText,
} from "bootstrap-vue";

import {
  DxDataGrid,
  DxScrolling,
  DxPager,
  DxPaging,
  DxSearchPanel,
  DxSorting,
  DxFilterRow,
  DxHeaderFilter,
  DxFilterPanel,
  DxColumn,
  DxSelection,
  DxColumnChooser,
  DxColumnFixing,
  DxStateStoring,
  DxToolbar,
  DxItem,
  DxLoadPanel,
  DxExport,
} from "devextreme-vue/data-grid";
import { BButton } from "bootstrap-vue";
import DxButton from "devextreme-vue/button";
import DxDropDownButton from "devextreme-vue/drop-down-button";
import Ripple from "vue-ripple-directive";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { exportDataGrid as exportDataGridToPdf } from "devextreme/pdf_exporter";
import { exportDataGrid } from "devextreme/excel_exporter";
import { Workbook } from "exceljs";
import { saveAs } from "file-saver-es";

export default {
  name: "AppTable",
  components: {
    BCard,
    BCardBody,
    BCardTitle,
    BCardText,
    DxDataGrid,
    DxScrolling,
    DxPager,
    BCardHeader,
    DxPaging,
    DxSearchPanel,
    DxSorting,
    DxFilterRow,
    DxHeaderFilter,
    DxDropDownButton,
    DxFilterPanel,
    DxColumn,
    DxSelection,
    DxColumnChooser,
    DxColumnFixing,
    DxStateStoring,
    DxToolbar,
    DxItem,
    DxLoadPanel,
    BButton,
    DxButton,
    DxExport,
  },
  directives: {
    Ripple,
  },

  props: {
    pk: {
      type: String,
      default: "id",
    },
    title: {
      type: String,
      default: "Grid",
    },
    columns: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
    selectable: {
      type: String,
      default: "multiple",
    },
    showPdfPopupClick: Function,
    inquireClick: Function,
    downloadClick: Function,
    listClick: Function,
    printClick: Function,
    sendClick: Function,
    deleteInsuranceClick: Function,
    showTaxPayerInfoClick: Function,
    showPanelClick: Function,
  },
  data() {
    return {
      pageSizes: [10, 20, 50, "all"],
      selectedRowKeys: [],
      downloadSettings: [
        { id: 1, name: "Detaylı İndir", icon: "download" },
        { id: 2, name: "Detaysız İndir", icon: "download" },
      ],
      printSettings: [
        { id: 1, name: "Beyanname", icon: "pdffile" },
        { id: 2, name: "Tahakkuk", icon: "pdffile" },
        { id: 3, name: "Tümü", icon: "pdffile" },
      ],
      sendSettings: [
        { id: 1, name: "Sms", icon: "rename" },
        { id: 2, name: "E-Posta", icon: "email" },
        { id: 3, name: "Whatsapp", icon: "attach" },
      ],
    };
  },
  computed: {
    dataGrid() {
      return this.$refs.appGrid.instance;
    },
  },
  methods: {
    onSelectionChanged({ selectedRowKeys, selectedRowsData }) {
      console.log(selectedRowsData);
      this.selectedRowKeys = selectedRowKeys;
      this.selectionChangedBySelectBox = false;
    },
    saveLayout(state) {
      state.columns.forEach((element) => {
        var column_custom_ref = this.columns.filter(
          (x) => x.dataField == element.dataField
        )[0];
        if (column_custom_ref.cellTemplate != null)
          element.cellTemplate = column_custom_ref.cellTemplate;
        if (column_custom_ref.format != null)
          element.format = column_custom_ref.format;
        if (column_custom_ref.minWidth != null)
          element.minWidth = column_custom_ref.minWidth;
        if (column_custom_ref.maxWidth != null)
          element.maxWidth = column_custom_ref.maxWidth;
        if (column_custom_ref.caption != null)
          element.caption = column_custom_ref.caption;
      });
      //state.columns burada kayda gönderilecek.
    },
    exportPdf() {
      const doc = new jsPDF({
        orientation: "landscape",
      });
      exportDataGridToPdf({
        jsPDFDocument: doc,
        component: this.dataGrid,
      }).then(() => {
        doc.save(this.title + ".pdf");
      });
    },
    onExporting(e) {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet(this.title);

      exportDataGrid({
        component: e.component,
        worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(
            new Blob([buffer], { type: "application/octet-stream" }),
            this.title + ".xlsx"
          );
        });
      });
      e.cancel = true;
    },
  },
};
</script>
<style scoped>
.b-card {
  padding-bottom: 10px;
}
#exportButton {
  margin-bottom: 10px;
}
</style>
