import { initializeApp, getApps } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyA0sg_goq2C_caHTiBLvi0jZ8Cb0nTNMyM",
  authDomain: "silkdevwebsite.firebaseapp.com",
  projectId: "silkdevwebsite",
  storageBucket: "silkdevwebsite.appspot.com",
  messagingSenderId: "662380860003",
  appId: "1:662380860003:web:c76bf8386b4bdbcb4f1e56",
  measurementId: "G-2GBJ0S4YWF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
