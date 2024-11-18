// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC6XtokO3PrGlpzH7lI7BRtxOjR-FvnpWY",
  authDomain: "fir-dojo-d107c.firebaseapp.com",
  projectId: "fir-dojo-d107c",
  storageBucket: "fir-dojo-d107c.firebasestorage.app",
  messagingSenderId: "983476090909",
  appId: "1:983476090909:web:efc2e8d8ee9215123a2ef4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);