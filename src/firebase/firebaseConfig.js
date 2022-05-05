import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCwRq10CtB5y_udsx5jBAhv-deCag21sVw",
    authDomain: "tu-uniforme-d48a3.firebaseapp.com",
    projectId: "tu-uniforme-d48a3",
    storageBucket: "tu-uniforme-d48a3.appspot.com",
    messagingSenderId: "1062189592756",
    appId: "1:1062189592756:web:e6db8b1b900abeda0c27e1",
    measurementId: "G-9TBK79KXN6"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app, 
  google, 
  facebook,
  db
}