import { USER } from "./consts";

const initialState = {
  userData: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER.USER_AUTH:
      return {
        ...state,
        userData: action.payload.user,
      };
    case USER.USER_LOGOUT:
      return {
        ...state,
        userData: null,
      };

    default:
      return state;
  }
};
