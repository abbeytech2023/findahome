import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAF-jloQMbpHhD8rVl0e3b2oSu3oEua_qA",
  authDomain: "renting-project-a580f.firebaseapp.com",
  projectId: "renting-project-a580f",
  storageBucket: "renting-project-a580f.firebasestorage.app",
  messagingSenderId: "379424390973",
  appId: "1:379424390973:web:8458305ef392230fa04f54",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init service

const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//Timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
