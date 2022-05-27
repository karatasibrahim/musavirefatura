import Vue from "vue";
import Vuex from "vuex";

// Modules
import app from "./app";
import appConfig from "./app-config";
import verticalMenu from "./vertical-menu";

// import {
//   collection,
//   getDocs,
//   getDoc,
//   limit,
//   query,
//   where,
//   doc
// } from "firebase/firestore";
// var firebase = require("firebase/app")
// import {
//   getFirestore
// } from "firebase/firestore";
// const firebaseConfig = {
//   apiKey: "AIzaSyDn3x_-3uQT3e_u4EFIMqXKy40iKgvUf8c",
//   authDomain: "emusavirim-3c193.firebaseapp.com",
//   databaseURL: "https://emusavirim-3c193-default-rtdb.firebaseio.com",
//   projectId: "emusavirim-3c193",
//   storageBucket: "emusavirim-3c193.appspot.com",
//   messagingSenderId: "112360446427",
//   appId: "1:112360446427:web:af06b497a6a34ed47aaffe",
// };

// // Add the Firebase services that you want to use
// import "firebase/auth";
// import "firebase/firestore";
// const db = getFirestore(firebase.initializeApp(firebaseConfig));
let documentıd = ""


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu
  },
  state: {

  },
  getters: {
   
  },
  mutations: {
   
  },
  actions: {
  

  },
  strict: process.env.DEV,
});