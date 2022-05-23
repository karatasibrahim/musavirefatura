<template>
  <div id="c-cont">
    <div class="calculator">
        <div class="c-section">
          <h3 style="font-size: 15px;"> Hesapla </h3>
           <b-form-group
             label="İnşaat Birim M² Maliyeti"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
           <b-form-group
             label="Toplam İnşaat Alanı (M²)"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
           <b-form-group
             label="Toplam İnşaat Maliyeti"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
           <b-form-group
             label="İhale Bedeli"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
           <b-form-group
             label="Asgari İşçilik Oranı"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
        </div>

        <div class="c-section">
          <h3 style="font-size: 15px;"> Sonuç </h3>
           <b-form-group
             label="Bildirilecek İşçilik Matrahı"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
           <b-form-group
             label="Ödenecek Prim Oranı"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
           <b-form-group
             label="Toplam Ödenecek Prim"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
           <b-form-group
             label="Kalan İşçilik Matrahı"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
           <b-form-group
             label="Kalan Ödenecek Prim"
             label-for="number"
           >
             <cleave
               id="number"
               class="form-control"
               :raw="false"
               :options="options.number"
               placeholder="0,00"
             />
           </b-form-group>
        </div>
    </div>
    <app-table7
      :inquireClick="queryClick"
      :pk="'id'"
      :items="items"
      :totalRows="16"
      :title="'Bildirgeler'"
      :columns="columns"
    />

    <!-- Sorgula Popup -->
    <b-modal
      ref="queryPopup"
      title="Bildirge Sorgula"
      ok-title="Sorgula"
      cancel-title="İptal"
      cancel-variant="outline-secondary"
      @ok="inquireClick"
    >

      <b-row>
        <b-col cols="12">
          <b-form-group label="SizYazarsınız" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.title"
              :options="unvanlar"
              placeholder="Seç"
              label="Unvan"
            />
          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-form-group label="SizYazarsınız" label-for="h-type" label-cols-md="4">
            <v-select
              v-model="listRequest.title"
              :options="unvanlar"
              placeholder="Seç"
              label="Unvan"
            />
          </b-form-group>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import AppTable7 from "@core/components/app-table/AppTable7.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker, BInputGroupPrepend, BInputGroup } from "bootstrap-vue";
import lng from "../../utils/strings";
import mockData from "../../../services/online/finance/service";
import Cleave from 'vue-cleave-component'
import vSelect from "vue-select";

export default {
  components: {
    AppTable7,
    BRow,
    vSelect,
    BCol,
    BFormGroup,
    BFormDatepicker,
    BInputGroupPrepend,
    BInputGroup,
    Cleave,
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
  data() {
    return {
     options: {
          number: {
          numeral: true,
          numeralThousandsGroupStyle: 'thousand',
        },
    },
      //#region Sorgulama Popup
      dateTimeLanguage: lng.dateTimeLanguage,
      inquireRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
      },
      //#endregion
      listRequest: {
        startDate: new Date(),
        endDate: new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          new Date().getDate()
        ),
        type: null,
        title: null,
      },
      activePdfUrl:
        "https://firebasestorage.googleapis.com/v0/b/emusavirim-3c193.appspot.com/o/AL%C4%B0%20%C3%9CZ%C3%9CMC%C3%9C%2F1ukxyryp3t1xhp.pdf?alt=media",
      items: mockData.beyannameDatasi,
      unvanlar: mockData.unvanlar,
      turler: mockData.turler,
      columns: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Dönem",
          caption: "Dönem",
        },
        {
          dataField: "Matrah",
          caption: "Matrah",
        },
        {
          dataField: "Prim",
          caption: "Prim",
        },
        {
          dataField: "İşsizlik",
          caption: "İşsizlik",
        },
        {
          dataField: "Toplam",
          caption: "Toplam",
        },
      ],
    };
  },
  methods: {
    queryClick() {
      this.$refs.queryPopup.show();
    },
    inquireClick() {
    },
  },
};
</script>

<style>
.calculator {
    width: 100%;
    height: 566px;
    background: #fff;
    box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%);
    border-radius: 0.428rem;
    display: flex;
    justify-content: space-between;
    gap: 25px;
    padding: 25px;
}

.c-section {
   width: 200px;
}

#c-cont {
   display: flex; 
   gap: 25px; 
}

@media (max-width: 1280px) {
  #c-cont {
    flex-wrap: wrap;
  }

  .c-section {
    width: 100%;
  }
}


</style>