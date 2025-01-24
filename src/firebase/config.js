import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAF-jloQMbpHhD8rVl0e3b2oSu3oEua_qA",
  authDomain: "renting-project-a580f.firebaseapp.com",
  projectId: "renting-project-a580f",
  storageBucket: "renting-project-a580f.firebasestorage.app",
  messagingSenderId: "379424390973",
  appId: "1:379424390973:web:8458305ef392230fa04f54",
};

//init firebase
initializeApp(firebaseConfig);

//init service

const db = getFirestore();
const auth = getAuth();

//Timestamp
const timestamp = firebase.firestore.Timestamp;

export { db, auth, timestamp };
