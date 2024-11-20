import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('user',user);
      changePage(false,false)
      const uid = user.uid;
      // ...
    } else {
      console.log('no user');
      changePage(true,true)
    }
)