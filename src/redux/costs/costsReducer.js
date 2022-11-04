export const COSTS = {
  COSTS_EXPENSES: "COSTS_EXPENSES",
  COSTS_DIAGRAMS: "COSTS_DIAGRAMS",
  COSTS_DATA: "COSTS_DATA",
  COSTS_SELECTED_YEAR: "COSTS_SELECTED_YEAR",
};

export const diagramsInitial = [
  { label: "Jan", value: 0 },
  { label: "Feb", value: 0 },
  { label: "Mar", value: 0 },
  { label: "Apr", value: 0 },
  { label: "May", value: 0 },
  { label: "Jun", value: 0 },
  { label: "Jul", value: 0 },
  { label: "Aug", value: 0 },
  { label: "Sep", value: 0 },
  { label: "Oct", value: 0 },
  { label: "Nov", value: 0 },
  { label: "Dec", value: 0 },
];

const initialState = {
  dailyExpenses: 0,
  costs: [],
  diagramsData: diagramsInitial,
  selectedYear: "2022",
};

export const costsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COSTS.COSTS_EXPENSES:
      return {
        ...state,
        dailyExpenses: action.payload,
      };

    case COSTS.COSTS_DIAGRAMS:
      return {
        ...state,
        diagramsData: action.payload,
      };

    case COSTS.COSTS_DATA:
      return {
        ...state,
        costs: action.payload,
      };

    case COSTS.COSTS_SELECTED_YEAR:
      return {
        ...state,
        selectedYear: action.payload,
      };

    default:
      return state;
  }
};
