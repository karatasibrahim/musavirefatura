<template>
  <b-card no-body>
    <div class="overflow-auto">
      <vue-good-table
        ref="appGoodTable"
        id="app-good-table"
        :columns="fields"
        :rows="items"
        :search-options="{
          enabled: true,
          placeholder: 'Tabloda ara',
        }"
        :select-options="{
          enabled: true,
          selectOnCheckboxOnly: true, // only select when checkbox is clicked instead of the row
          selectionInfoClass: 'custom-class',
          selectionText: 'rows selected',
          clearSelectionText: 'clear',
          disableSelectInfo: true, // disable the select info panel on top
          selectAllByGroup: true, // when used in combination with a grouped table, add a checkbox in the header row to check/uncheck the entire group
        }"
        :pagination-options="{
          enabled: true,
          perPage: perPage,
        }"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field === 'beyan_pdf'" class="text-nowrap">
            <div class="text-center">
              <img
                src="https://i.ibb.co/CvqLvpj/beyanname.jpg"
                @click="showPdfPopupClick(props.row.beyan_pdf)"
              />
            </div>
          </span>

          <span v-if="props.column.field === 'tahak_pdf'" class="text-nowrap">
            <div class="text-center">
              <img
                src="https://i.ibb.co/CvqLvpj/beyanname.jpg"
                @click="showPdfPopupClick(props.row.tahak_pdf)"
              />
            </div>
          </span>
          <span v-else>
            {{ props.formattedRow[props.column.field] }}
          </span>
        </template>
        <template slot="pagination-bottom" slot-scope="props">
          <div
            class="d-flex justify-content-between flex-wrap"
            style="margin: 15px"
          >
            <div class="d-flex align-items-center mb-0 mt-1">
              <span class="text-nowrap"> Sayfada gösterilecek satır: </span>
              <b-form-select
                size="sm"
                v-model="perPage"
                :options="pageOptions"
                class="mx-1"
                @input="
                  (value) => props.perPageChanged({ currentPerPage: value })
                "
              />
            </div>
            <div>
              <b-pagination
                first-text="İlk"
                prev-text="Önceki"
                next-text="Sonraki"
                :value="1"
                last-text="Son"
                first-number
                last-number
                align="right"
                prev-class="prev-item"
                next-class="next-item"
                class="mt-1 mb-0"
                v-model="currentPage"
                :total-rows="totalRows"
                :per-page="perPage"
                aria-controls="app-good-table"
                @input="(value) => props.pageChanged({ currentPage: value })"
              >
                <template #prev-text>
                  <feather-icon icon="ChevronLeftIcon" size="18" />
                </template>
                <template #next-text>
                  <feather-icon icon="ChevronRightIcon" size="18" />
                </template>
              </b-pagination>
            </div>
          </div>
        </template>
      </vue-good-table>
    </div>
  </b-card>
</template>

<script>
import {
  BCard,
  BSpinner,
  BCardBody,
  BContainer,
  BTable,
  BCardHeader,
  BPagination,
  BFormGroup,
  BForm,
  BFormSelect,
  BCol,
  BRow,
  BFormCheckbox,
  BAvatar,
  BBadge,
  BFormInput,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";
import "vue-good-table/dist/vue-good-table.css";

import Ripple from "vue-ripple-directive";
import { VueGoodTable } from "vue-good-table";

export default {
  name: "AppGoodTable",
  components: {
    BCard,
    BForm,
    BFormGroup,
    BRow,
    BFormCheckbox,
    BAvatar,
    BBadge,
    BFormInput,
    BDropdown,
    VueGoodTable,
    BDropdownItem,
    BContainer,
    BFormSelect,
    BCol,
    BPagination,
    BSpinner,
    BCardBody,
    BTable,
    BCardHeader,
  },
  directives: {
    Ripple,
  },
  props: {
    totalRows: {
      type: Number,
      default: "0",
    },
    pk: {
      type: String,
      default: "id",
    },
    fields: {
      type: Array,
      default: [],
    },
    items: {
      type: Array,
      default: [],
    },
    showPdfPopupClick: Function,
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      pageOptions: [
        5,
        10,
        15,
        { value: 100, text: "100" },
        { value: 500, text: "Maksimum" },
      ],
    };
  },
};
</script>
