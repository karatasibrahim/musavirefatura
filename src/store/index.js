import Vue from "vue";
import Vuex from "vuex";

// Modules
import app from "./app";
import appConfig from "./app-config";
import verticalMenu from "./vertical-menu";

import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  limit,
  query,
  where,
  doc,
  addDoc,
  updateDoc
} from "firebase/firestore";
var firebase = require("firebase/app")
import {
  getFirestore
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCMuWEx_ldoMCic0nQjx3YxdPDlwFHZKfM",
  authDomain: "musavirefaturam.firebaseapp.com",
  projectId: "musavirefaturam",
  storageBucket: "musavirefaturam.appspot.com",
  messagingSenderId: "1053917644242",
  appId: "1:1053917644242:web:379a6dcc066c14c958f40b"
};

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";
const db = getFirestore(firebase.initializeApp(firebaseConfig));
let documentid = "";
let kullanıcıİd = JSON.parse(localStorage.getItem("userData")).userId
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu
  },
  state: {
    Search: {},
    bank: [],
    adress: [],
    SelectData: {},
    AllPerson: [],
    SelectedArray: [],
    GelenFaturalar: []
  },
  getters: {
    GetSerach(state, payload) {
      return state.Search
    },
    GetBank(state, payload) {
      return state.bank
    },
    GetAdress(state, payload) {
      return state.adress
    },
    GetSelected(state, payload) {
      return state.SelectData
    },
    GetAllPerson(state, payload) {
      return state.AllPerson
    },
    GetAllSelectedArray(state, payload) {
      return state.SelectedArray
    },
    GetGelenArsiv(state) {
      console.log(state.GelenFaturalar);
      return state.GelenFaturalar
    }
  },
  mutations: {
    SetSearch(state, payload) {
      state.Search = payload
    },
    SetBank(state, payload) {
      state.bank.push(payload)
    },
    SetAdress(state, payload) {
      state.adress.push(payload)
    },
    SetSelectedData(state, payload) {
      console.log(payload);
      state.SelectData = payload
    },
    SetSelectedArray(state, payload) {
      console.log(payload);
      state.SelectedArray = []
      state.SelectedArray.push(payload)
    },
    SetAllPerson(state, payload) {
      state.AllPerson.push(payload)
    },
    SetGelenFaturalar(state, payload) {
      console.log(payload);
      state.GelenFaturalar.push(payload);
    }
  },
  actions: {
    //! Fetch data
    FetchPerson(context, payload) {
      this.state.Search = {}
      return new Promise((resolve, reject) => {
        const q = query(collection(db, "Cari"),
          where("kullaniciId", "==", payload.kullaniciId),
          where("vkn", "==", payload.data)
        );
        const mukellefdata = getDocs(q);
        mukellefdata.then(dt => {
          dt.forEach((doca) => {
            console.log(doca.data());
            if (doca.data().CariAdres != undefined && doca.data().CariAdres != "") {
              const ax = getDoc(doc(db, doca.data().CariAdres))
              ax.then(e => {
                console.log(e.data());
                const senddata = {
                  person: doca.data(),
                  adress: e.data()
                }
                context.commit('SetSearch', senddata)
                resolve(senddata)
              })
            }
            documentid = doca.id
          })
        })

      })
    },
    async FetchAllPerson(context) {
      this.state.AllPerson = []
      const q = query(collection(db, "Cari"),
        where("kullaniciId", "==", kullanıcıİd),
      );
      const mukellefdata = await getDocs(q);
      mukellefdata.forEach((doca) => {
        let withid = Object.assign(doca.data(), {
          id: doca.id
        })

        if (doca.data().CariAdres != undefined && doca.data().CariAdres != "") {
          console.log(doca.data(), doca.data().CariAdres);
          const ax = getDoc(doc(db, doca.data().CariAdres))
          ax.then(e => {
            console.log(e.data());
            const senddata = {
              person: doca.data(),
              adress: e.data()
            }
            context.commit('SetAllPerson', Object.assign(withid, {
              adress: e.data()
            }))
            console.log(Object.assign(withid, {
              adress: e.data()
            }));
          })
        } else {
          context.commit('SetAllPerson', Object.assign(withid, {
            adress: {}
          }))

        }
      });

    },
    async FetchBank(context, payload) {
      const q = query(collection(db, "Banka"),
        where("kullaniciId", "==", payload),
      );
      const mukellefdata = await getDocs(q);
      mukellefdata.forEach((doc) => {
        context.commit('SetBank', doc.data())
        console.log(doc.data());
      });

    },
    async FetchAdress(context, payload) {
      this.state.adress = []
      const q = query(collection(db, "CariAdres"),
        where("kullaniciId", "==", payload),
      );
      const mukellefdata = await getDocs(q);
      mukellefdata.forEach((doc) => {
        context.commit('SetAdress', Object.assign(doc.data(), {
          path: doc.ref.path
        }))
        console.log(doc.ref.path);
      });
    },
    FecthGelenFaturalar(context, payload) {
      return new Promise((resolve, reject) => {
        const q = query(collection(db, "GelenFaturalar"),
          where("KullaniciId", "==", payload),
        );
        const mukellefdata = getDocs(q);
        mukellefdata.then(res => {
          var arr = []
          res.forEach(el => {
            arr.push(el.data())
          })
          resolve(arr)
        })
      })

    },
    FecthAltKullanıcı(context, payload) {
      return new Promise((resolve, reject) => {
        const q = query(collection(db, "AltKullanici"),
          where("kullaniciId", "==", payload),
        );
        const mukellefdata = getDocs(q);
        mukellefdata.then(res => {
          var arr = []
          res.forEach(el => {
            arr.push(Object.assign(el.data(),{id:el.id}) )
          })
          resolve(arr)
        })
      })

    },
    FecthGidenFaturalar(context, payload) {
      return new Promise((resolve, reject) => {
        const q = query(collection(db, "GidenFaturalar"),
          where("KullaniciId", "==", payload),
        );
        const mukellefdata = getDocs(q);
        mukellefdata.then(res => {
          var arr = []
          res.forEach(el => {
            arr.push(el.data())
          })
          resolve(arr)
        })
      })

    },
    FecthStok(context, payload) {
      console.log(payload);
      return new Promise((resolve, reject) => {
        const q = query(collection(db, "Stok"),
          where("kullaniciId", "==", payload),
        );
        const dataa = getDocs(q);
        dataa.then(res => {
          var arr = []
          res.forEach(el => {
            arr.push(Object.assign(el.data(),{id:el.id}) )
          })
          resolve(arr)
        })
      })

    },
    FetchFilterStok(context, payload) {

      return new Promise((resolve, reject) => {
        const q = query(collection(db, "Stok"),
          where("kullaniciId", "==", payload.id),
          where("UreticiKod", "==", payload.data)
        );
        const mukellefdata = getDocs(q);
        mukellefdata.then(dt => {
   
          dt.forEach((doca) => {
            console.log(doca.data());
      
   resolve(doca.data())
            documentid = doca.id
          })
        })

      })
    },
    FetchFirmaProfil(context, payload) {
      return new Promise((resolve, reject) => {
        const q = query(collection(db, "FirmaProfili"),
          where("KullaniciId", "==", payload),
        );
        const mukellefdata = getDocs(q);
        mukellefdata.then(res => {
          var arr = []
          res.forEach(el => {
            arr.push( Object.assign(el.data(),{id:el.id}) )
          })
          resolve(arr)
        })
      })

    },
    //! Add Name

    async AddNewBank(context, payload) {
      console.log(payload);
      const res = await addDoc(collection(db, "Banka"), payload)
      console.log(res);
      context.commit('SetBank', payload)
    },
    async AddNewPersonAdress(context, payload) {
      console.log(payload);
      const res = await addDoc(collection(db, "CariAdres"), payload)
      console.log(res);
      this.dispatch("FetchAdress", payload.kullaniciId)
    },
    async AddBill(context, payload) {
      console.log(payload);
      const res = await addDoc(collection(db, "FaturaIcerik"), payload.data)
      const icerik = await addDoc(collection(db, "FaturaDetay"),Object.assign(payload.detay,{FaturaIcerik:res.path}))
    },
    async AddArsiv(context, payload) {
      console.log(payload);
      const res = await addDoc(collection(db, "ArsivIcerik"), payload.data)
      const icerik = await addDoc(collection(db, "ArsivDetay"),Object.assign(payload.detay,{FaturaIcerik:res.path}))
    },
    async AddStok(context, payload) {
      console.log(payload);
      const res = await addDoc(collection(db, "Stok"), payload)
    },
    async AddAltKullanici(context, payload) {
      console.log(payload);
      const res = await addDoc(collection(db, "AltKullanici"), payload)
    },
    //! Uptade 
    async UpdateNewAlici(context, payload) {

      if (payload.id != undefined) {
        const res = await updateDoc(doc(db, "Cari", payload.id), payload.data)
      } else {
        console.log("else");
        const docRef = await addDoc(collection(db, "Cari"), payload.data);

      }
    },
    async UptadeAdressa(context, payload) {
      console.log(payload);
      const res = await updateDoc(doc(db, "CariAdres", payload.id), payload.data)
      console.log(res);
    },
    async UptadeAdressa(context, payload) {
      console.log(payload);
      const res = await updateDoc(doc(db, "CariAdres", payload.id), payload.data)
      console.log(res);
    },
    async UptadeStok(context, payload) {
      console.log(payload);
      const res = await updateDoc(doc(db, "Stok", payload.id), payload.data)
    },
    async updateAltKullanıcı(context, payload) {
      console.log(payload);
      const data= JSON.parse(JSON.stringify(payload))
      delete data.data.id
      const res = await updateDoc(doc(db, "AltKullanici", data.id), data.data)
    },
    //! Delete
    async DeletePerson(context, payload) {

      console.log(payload);
      await deleteDoc(doc(db, "Cari", payload));
    },
    async DeleteStok(context, payload) {

      console.log(payload);
      await deleteDoc(doc(db, "Stok", payload));
    },
    async DeleteAltKullanici(context, payload) {

      console.log(payload);
      await deleteDoc(doc(db, "AltKullanici", payload));
    },
  },
  strict: process.env.DEV,
});