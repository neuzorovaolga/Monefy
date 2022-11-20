import React from "react";
import { useSelector } from "react-redux";
import { getUserError } from "../../redux/user/selectors";
import styles from "./AuthError.module.css";

export const AuthError = () => {
  const userError = useSelector(getUserError);
  const userErrorMessage = () => {
    switch (userError) {
      case "Firebase: Error (auth/user-not-found).":
        return "User doesn't exist";
      case "Firebase: Error (auth/wrong-password).":
        return "Invalid password";
      case "Firebase: Error (auth/email-already-in-use).":
        return "This email exists";
      default:
        return "Something went wrong";
    }
  };
  return (
    <>
      {userError && <div className={styles.wrapper}>{userErrorMessage()}</div>}
    </>
  );
};
