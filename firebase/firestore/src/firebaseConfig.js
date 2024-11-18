// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDbe1kz-OBqcQbT9y-0TAaX2yabWelN-Gg",
  authDomain: "fir-practice-ffa92.firebaseapp.com",
  projectId: "fir-practice-ffa92",
  storageBucket: "fir-practice-ffa92.firebasestorage.app",
  messagingSenderId: "125003775851",
  appId: "1:125003775851:web:c8f3970f663e82e3b6d62e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);