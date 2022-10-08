import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIH_U3sPZ9XSsxtKFQWOr_rx0cJJUbd4o",
  authDomain: "monefy-63e02.firebaseapp.com",
  projectId: "monefy-63e02",
  storageBucket: "monefy-63e02.appspot.com",
  messagingSenderId: "436486061192",
  appId: "1:436486061192:web:a10b372d7e25c7e11bf33d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
