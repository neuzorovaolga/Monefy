import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/auth";
import { userAuthAction, userErrorAction } from "./actions";
import { firebaseAddUserDoc } from "../../firebase/costs";

export const autoLoginThunk = (setIsChecking) => {
  return (dispatch) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(userAuthAction(user));
      }
      setIsChecking(false);
    });
  };
};

export const registerUserThunk = (email, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        firebaseAddUserDoc(user.uid);
        dispatch(userAuthAction(user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(userErrorAction(errorMessage));
      });
  };
};

export const loginUserThunk = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(userAuthAction(user));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(userErrorAction(errorMessage));
      });
  };
};
