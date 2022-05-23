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
  state: {
    calendarOptions: [
      {
        color: 'danger',
        label: 'Kişisel',
      },
      {
        color: 'primary',
        label: 'Toplantı',
      },
      {
        color: 'warning',
        label: 'Doğum Günü',
      },
      {
        color: 'success',
        label: 'Tatil',
      },
      {
        color: 'info',
        label: 'Özel',
      },
    ],
    selectedCalendars: ['Kişisel', 'Toplantı', 'Doğum Günü', 'Tatil', 'Özel'],

  },
  getters: {},
  mutations: {
    SET_SELECTED_EVENTS(state, val) {
      state.selectedCalendars = val
    },

  },
  actions: {
    fetchEvents(ctx, { calendars }) {
      return new Promise((resolve, reject) => {
        console.log("takvim çalişti",calendars);
        const q=  query(collection(db, "Takvim"),where("extendedProps.calendar", "in", calendars)  );
        const mukellefdata =  getDocs(q);
      mukellefdata.then(snapshot=>{
        resolve(snapshot)
      
      })
      })
    },


   async addEvent(ctx, { event }) {
        console.log({event});
       const res = await addDoc(collection(db, "Takvim"), event)
         console.log(res)
    },


    updateEvent(ctx, { event }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/apps/calendar/events/${event.id}`, { event })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeEvent(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/calendar/events/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
