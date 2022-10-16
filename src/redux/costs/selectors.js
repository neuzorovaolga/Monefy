import { createSelector } from "reselect";

export const getCostsReducer = ({ costsReducer }) => {
  return costsReducer;
};

export const getCostsExpenses = createSelector(
  getCostsReducer,
  (costsReducer) => {
    return costsReducer?.dailyExpenses;
  }
);
