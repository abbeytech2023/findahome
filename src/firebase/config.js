import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// zUXJ3piyJQQjpj3UyBpAHCW4m9x2

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
const timestamp = Timestamp;

export { db, auth, timestamp };
