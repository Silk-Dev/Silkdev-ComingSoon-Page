import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
import 'firebase/database';

export const firebaseConfig = {
  apiKey: "AIzaSyBhenSK_a-iuEPdWzZXRKVqXgGhXBixUWc",
  authDomain: "silkdevcsp.firebaseapp.com",
  projectId: "silkdevcsp",
  storageBucket: "silkdevcsp.appspot.com",
  messagingSenderId: "379931013557",
  appId: "1:379931013557:web:a673e5c5ca09c0153ea9fc",
  measurementId: "G-CWZ6DBFCRR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);