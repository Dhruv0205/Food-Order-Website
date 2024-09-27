// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB0e6Bj2r8Cq6iqxOwTKta_KBCK9Cdl7k",
  authDomain: "loginfirebase-4f6c2.firebaseapp.com",
  projectId: "loginfirebase-4f6c2",
  storageBucket: "loginfirebase-4f6c2.appspot.com",
  messagingSenderId: "993800597438",
  appId: "1:993800597438:web:088109d6ed0d76b41dd3ef",
  measurementId: "G-7E510DZ16G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db= getFirestore(app);
export const auth = getAuth();
