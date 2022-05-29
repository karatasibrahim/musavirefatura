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
let documentid="";
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
adress:[],
SelectData:{}
  },
  getters: {
   GetSerach(state,payload){
     return state.Search
   },
   GetBank(state,payload){
    return state.bank
  },
  GetAdress(state,payload){
return state.adress
  },
   GetSelected(state,payload){
return state.SelectData
  }
  },
  mutations: {
   SetSearch(state,payload){
state.Search=payload
   },
   SetBank(state,payload){
     state.bank.push(payload)
   },
   SetAdress(state,payload){
     state.adress.push(payload)
   },
   SetSelectedData(state,payload){
     console.log(payload);
     state.SelectData=payload
   }
  },
  actions: {
//! Fetch data
 FetchPerson(context,payload){
  this.state.Search={}
  return new Promise((resolve, reject) => {
  const q = query(collection(db, "Cari"),
    where("kullaniciId", "==", payload.kullaniciId),
    where("vkn", "==", payload.data)
    );
  const mukellefdata =getDocs(q);
  mukellefdata.then(dt=>{
      dt.forEach((doca) => {
    context.commit('SetSearch',doca.data())
    console.log(doca.data());
  if (doca.data().CariAdres!=undefined) {
    const ax= getDoc(doc(db,doca.data().CariAdres))
ax.then(e=>{
  console.log(e.data());
  const senddata={
    person:doca.data(),
    adress:e.data()
  }
  resolve(senddata)
})
  }
 

    documentid=doca.id
    
  })
  })

  })
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
async   FetchAdress(context,payload){
  this.state.adress=[]
  const q = query(collection(db, "CariAdres"),
  where("kullaniciId", "==", payload),
  );
const mukellefdata = await getDocs(q);
mukellefdata.forEach((doc) => {
  context.commit('SetAdress',Object.assign(doc.data(),{path:doc.ref.path}) )
  console.log(doc.ref.path);
});
},
  //! Add Name

  async AddNewBank(context,payload){
    console.log(payload);
    const res = await addDoc(collection(db, "Banka"), payload)
    console.log(res);
    context.commit('SetBank',payload)
  },
  async AddNewPersonAdress(context,payload){
    console.log(payload);
    const res = await addDoc(collection(db, "CariAdres"), payload)
    console.log(res);
this.dispatch("FetchAdress",payload.kullaniciId)
  },

  //! Uptade 
    async UpdateNewAlici(context,payload){
    console.log(payload);
    const res = await updateDoc(doc(db, "Cari",documentid), payload)
    console.log(res);
  },
  async UptadeAdressa(context,payload){
    console.log(payload);
    const res = await updateDoc(doc(db, "CariAdres",payload.id), payload.data)
    console.log(res);
  },
  },
  strict: process.env.DEV,
});