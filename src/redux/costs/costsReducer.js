export const COSTS = {
  COSTS_EXPENSES: "COSTS_EXPENSES",
};

const initialState = {
  dailyExpenses: 0,
};

export const costsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COSTS.COSTS_EXPENSES:
      return {
        ...state,
        dailyExpenses: action.payload,
      };

    default:
      return state;
  }
};
