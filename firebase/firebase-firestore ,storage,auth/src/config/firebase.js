
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaVS_824efK-JrU2N10dhdKrZGAJqbsAk",
  authDomain: "fir-pedrotech-81f81.firebaseapp.com",
  projectId: "fir-pedrotech-81f81",
  storageBucket: "fir-pedrotech-81f81.firebasestorage.app",
  messagingSenderId: "619869863934",
  appId: "1:619869863934:web:77de86db0cb6df93bc8aaf"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);