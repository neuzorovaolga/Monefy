import { COSTS } from "./costsReducer";

export const setExpenses = (sum) => ({
  type: COSTS.COSTS_EXPENSES,
  payload: sum,
});
