import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIH_U3sPZ9XSsxtKFQWOr_rx0cJJUbd4o",
  authDomain: "monefy-63e02.firebaseapp.com",
  projectId: "monefy-63e02",
  storageBucket: "monefy-63e02.appspot.com",
  messagingSenderId: "436486061192",
  appId: "1:436486061192:web:a10b372d7e25c7e11bf33d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const checkLoginUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
};
