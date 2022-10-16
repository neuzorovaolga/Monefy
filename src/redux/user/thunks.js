import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { userAuthAction } from "./actions";
import { Card } from "@mui/material";
import { firebaseAddUserDoc } from "../../firebase/costs";

export const autoLoginThunk = () => {
  return (dispatch, getState) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);
        dispatch(userAuthAction(user));
      } else {
        // User is signed out
        // ...
      }
    });
  };
};

export const registerUserThunk = (email, password) => {
  return (dispatch, getState) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        firebaseAddUserDoc(user.uid);
        dispatch(userAuthAction(user));
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };
};

export const loginUserThunk = (email, password) => {
  return (dispatch, getState) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(userAuthAction(user));
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });
  };
};

export const addNewCard = (date, name, amount) => {
  return (dispatch, getState) => {
    const {
      user: {
        user: { uid },
      },
    } = getState();

    const userCardCollection = collection(db, "users/${uid}/cards");
    const card = {
      date: date,
      purchase: name,
      amount: amount,
    };
    addDoc(userCardCollection, card);
    dispatch({
      // type: CARD.CARD_ADD,
      payload: {
        card,
      },
    });
  };
};
