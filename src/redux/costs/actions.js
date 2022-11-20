import { COSTS } from "./costsReducer";

export const setExpensesAction = (sum) => ({
  type: COSTS.COSTS_EXPENSES,
  payload: sum,
});

export const setDiagramsAction = (data) => ({
  type: COSTS.COSTS_DIAGRAMS,
  payload: data,
});

export const setCostsDataAction = (data) => ({
  type: COSTS.COSTS_DATA,
  payload: data,
});

export const setSelectedYearCostsAction = (year) => ({
  type: COSTS.COSTS_SELECTED_YEAR,
  payload: year,
});

export const setSelectedDayCostsAction = (day) => ({
  type: COSTS.COSTS_SELECTED_DAY,
  payload: day,
});
