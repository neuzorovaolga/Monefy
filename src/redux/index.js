import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./user/userReduser";
import { costsReducer } from "./costs/costsReducer";
const rootReducer = combineReducers({
  userReducer,
  costsReducer,
});

const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
