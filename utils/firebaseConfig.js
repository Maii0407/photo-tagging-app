// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsIecbbPV39JcbDaAZogVs3BZiQiRN5-o",
  authDomain: "phototag-57b68.firebaseapp.com",
  projectId: "phototag-57b68",
  storageBucket: "phototag-57b68.appspot.com",
  messagingSenderId: "65033794979",
  appId: "1:65033794979:web:180c31356a27946afe9616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore( app );