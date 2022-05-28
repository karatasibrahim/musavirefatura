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
  limit,
  query,
  where,
  doc,
  addDoc
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

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu
  },
  state: {
Search:{},
bank:[],
  },
  getters: {
   GetSerach(state,payload){
     return state.Search
   },
   GetBank(state,payload){
    return state.bank
  }
  },
  mutations: {
   SetSearch(state,payload){
state.Search=payload
   },
   SetBank(state,payload){
     state.bank.push(payload)
   }
  },
  actions: {
//! Fetch data
async FetchPerson(context,payload){
  const q = query(collection(db, "Kullanici"),
    where("kullaniciId", "==", payload.kullaniciId),
    where("vkn", "==", payload.data)
    );
  const mukellefdata = await getDocs(q);
  mukellefdata.forEach((doc) => {
    context.commit('SetSearch',doc.data())
    console.log(doc.data());
  });

},
async FetchBank(context,payload){
  const q = query(collection(db, "Banka"),
    where("kullaniciId", "==", payload),
    );
  const mukellefdata = await getDocs(q);
  mukellefdata.forEach((doc) => {
    context.commit('SetBank',doc.data())
    console.log(doc.data());
  });

},
  //! Add Name
  async AddNewAlici(context,payload){
    console.log(payload);
    const res = await addDoc(collection(db, "Cari"), payload)
    console.log(res);
  },
  async AddNewBank(context,payload){
    console.log(payload);
    const res = await addDoc(collection(db, "Banka"), payload)
    console.log(res);
    context.commit('SetBank',payload)
  }
  },
  strict: process.env.DEV,
});