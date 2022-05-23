import axios from '@axios'

import {
  collection,
  getDocs,
  getDoc,
  limit,
  query,
  where,
  doc,
  updateDoc,
  setDoc,
  deleteDoc,
  addDoc
} from "firebase/firestore";

import {
  getFirestore
} from "firebase/firestore";

var firebase = require("firebase/app")

import "firebase/auth";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn3x_-3uQT3e_u4EFIMqXKy40iKgvUf8c",
  authDomain: "emusavirim-3c193.firebaseapp.com",
  databaseURL: "https://emusavirim-3c193-default-rtdb.firebaseio.com",
  projectId: "emusavirim-3c193",
  storageBucket: "emusavirim-3c193.appspot.com",
  messagingSenderId: "112360446427",
  appId: "1:112360446427:web:af06b497a6a34ed47aaffe",
};

const db = getFirestore(firebase.initializeApp(firebaseConfig));

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchChatsAndContacts() {
        return new Promise((resolve, reject) => {
        console.log("chat çalişti");
        const q=  collection(db, "Chat");
        const el =  getDocs(q);
        let arr=[]
      el.then(snapshot=>{
snapshot.forEach(ar=>{
arr.push(ar.data())
})

})
resolve(arr)
      })
    },
    getProfileUser() {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/chat/users/profile-user')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    getChat(ctx, { userId }) {
      console.log(userId.toString());
      return new Promise((resolve, reject) => {
        console.log("chat çalişti",userId);
        const q=  query(collection(db, "Chat"),where("MukellefId", "==", userId)  );
        const el =  getDocs(q);
        let arr=[]
      el.then(snapshot=>{
snapshot.forEach(ar=>{
arr.push(ar.data())
})

})
resolve(arr)
      })
  
    },
    sendMessage(ctx, { contactId, message, senderId }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/apps/chat/chats/${contactId}`, { message, senderId })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
