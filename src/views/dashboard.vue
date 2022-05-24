<template></template>

<script>
import stats from "./stats.vue";
import HomeTable1 from "@core/components/app-table/HomeTable1.vue";
import HomeTable2 from "@core/components/app-table/HomeTable2.vue";

import HomeChart from "@/@core/components/charts/HomeChart.vue";
import { BRow, BCol, BFormGroup, BFormDatepicker } from "bootstrap-vue";
import mockData from "./../services/online/finance/service";
import lng from "./utils/strings";

import {
  collection,
  getDocs,
  getDoc,
  limit,
  query,
  where,
  doc,
} from "firebase/firestore";
var firebase = require("firebase/app");
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDn3x_-3uQT3e_u4EFIMqXKy40iKgvUf8c",
  authDomain: "emusavirim-3c193.firebaseapp.com",
  databaseURL: "https://emusavirim-3c193-default-rtdb.firebaseio.com",
  projectId: "emusavirim-3c193",
  storageBucket: "emusavirim-3c193.appspot.com",
  messagingSenderId: "112360446427",
  appId: "1:112360446427:web:af06b497a6a34ed47aaffe",
};

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
const db = getFirestore(firebase.initializeApp(firebaseConfig));
export default {
  components: {
    stats,
    HomeTable1,
    HomeTable2,
    HomeChart,
    BRow,
    BCol,
    BFormGroup,
    BFormDatepicker,
  },
  data() {
    return {
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
          dataField: "Beyanname",
          caption: "Beyanname",
        },
        {
          dataField: "Toplam",
          caption: "Toplam",
        },
        {
          dataField: "Onaylı",
          caption: "Onaylı",
        },
        {
          dataField: "Kalan",
          caption: "Kalan",
        },
        {
          dataField: "Durum",
          caption: "Durum",
        },
      ],
      columns2: [
        {
          dataField: "id",
          caption: "Id",
          visible: false,
          showInColumnChooser: false,
        },
        {
          dataField: "Bildirgeler",
          caption: "Bildirgeler",
        },
        {
          dataField: "Toplam",
          caption: "Toplam",
        },
        {
          dataField: "Onaylı",
          caption: "Onaylı",
        },
        {
          dataField: "Kalan",
          caption: "Kalan",
        },
        {
          dataField: "Durum",
          caption: "Durum",
        },
      ],
    };
  },
  methods: {
    queryClick() {
      this.$refs.queryPopup.show();
    },
    inquireClick() {},
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
      console.log(this.listRequest.type);
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(to.fullPath == "/dashboard");

    const q = query(
      collection(db, "Mukellef"),
      where("MukellefId", "==", Number(to.query.asd))
    );
    const mukellefdata = getDocs(q);
    mukellefdata.then((snapshot) => {
      snapshot.forEach((el) => {
        if (to.fullPath == "/dashboard") {
          console.log("if");
         next({ path: "/error-404" });
        }
        if (
          el.data().PanelKodu == to.query.cid &&
          el.data().PanelSifre == to.query.pwd
        ) {
          next();
          const data = {
            MukellefId: Number(to.query.asd),
            PanelKodu: to.query.cid,
            PanelSifre: to.query.pwd,
          };
          localStorage.setItem("dataMuk", JSON.stringify(data));
        } else {
          console.log("else");
          this.$router.push({ path: "/error-404" });
        }
      });
    });
  },
};
</script>

<style>
.respon {
  width: 100%;
  display: flex;
  gap: 15px;
}
@media (max-width: 1280px) {
  .respon {
    flex-wrap: wrap;
  }
}
</style>