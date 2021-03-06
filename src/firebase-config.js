import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCsIecbbPV39JcbDaAZogVs3BZiQiRN5-o",
  authDomain: "phototag-57b68.firebaseapp.com",
  projectId: "phototag-57b68",
  storageBucket: "phototag-57b68.appspot.com",
  messagingSenderId: "65033794979",
  appId: "1:65033794979:web:f5062d4459b55709fe9616"
};

const app = initializeApp( firebaseConfig );

const database = getFirestore( app );

export { database };