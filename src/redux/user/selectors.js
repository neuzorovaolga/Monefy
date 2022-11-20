import { createSelector } from "reselect";

export const getUserReducer = ({ userReducer }) => {
  return userReducer;
};

export const getUser = createSelector(getUserReducer, (userReducer) => {
  return userReducer?.userData;
});

export const getUserEmail = createSelector(getUserReducer, (userReducer) => {
  return userReducer?.userData?.email;
});

export const getUserId = createSelector(getUserReducer, (userReducer) => {
  return userReducer?.userData?.uid;
});

export const getUserError = createSelector(getUserReducer, (userReducer) => {
  return userReducer?.userError;
});
