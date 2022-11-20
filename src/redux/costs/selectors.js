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

export const getDiagramData = createSelector(
  getCostsReducer,
  (costsReducer) => {
    return costsReducer?.diagramsData;
  }
);

export const getSelectedYear = createSelector(
  getCostsReducer,
  (costsReducer) => {
    return costsReducer?.selectedYear;
  }
);

export const getSelectedDay = createSelector(
  getCostsReducer,
  (costsReducer) => {
    return costsReducer?.selectedDay;
  }
);

export const getCostsSelectedYear = createSelector(
  getCostsReducer,
  (costsReducer) => {
    return costsReducer?.costs;
  }
);
