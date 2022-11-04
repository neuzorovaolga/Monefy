import { COSTS } from "./costsReducer";

export const setExpensesAction = (sum) => ({
  type: COSTS.COSTS_EXPENSES,
  payload: sum,
});

export const diagramsAction = (data) => ({
  type: COSTS.COSTS_DIAGRAMS,
  payload: data,
});

export const costsDataAction = (data) => ({
  type: COSTS.COSTS_DATA,
  payload: data,
});

export const costsSelectedYearAction = (year) => ({
  type: COSTS.COSTS_SELECTED_YEAR,
  payload: year,
});
