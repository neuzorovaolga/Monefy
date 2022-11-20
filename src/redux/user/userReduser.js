import { USER } from "./consts";

const initialState = {
  userData: null,
  userError: null,
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
    case USER.USER_ERROR:
      return {
        ...state,
        userError: action.payload.error,
      };

    default:
      return state;
  }
};
