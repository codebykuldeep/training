import {initializeApp} from 'firebase';
import {
    collection,
    getDoc,
    getFireStore,
} from 'firebase/firestore'




const firebaseConfig = {
    apiKey: "AIzaSyC6XtokO3PrGlpzH7lI7BRtxOjR-FvnpWY",
    authDomain: "fir-dojo-d107c.firebaseapp.com",
    projectId: "fir-dojo-d107c",
    storageBucket: "fir-dojo-d107c.firebasestorage.app",
    messagingSenderId: "983476090909",
    appId: "1:983476090909:web:efc2e8d8ee9215123a2ef4"
  };

//init firebase
initializeApp(firebaseConfig);

//init services
const db = getFireStore();

//collection ref
const collectionRef = collection(db,'books');

//get collection data
getDoc(collectionRef)
.then((snapshot)=>{
    console.log(snapshot.docs)
})