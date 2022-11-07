import { combineReducers, compose, createStore } from "redux";
import { counterReducer, authReducer } from "./reducers";

const reducers = combineReducers({
  auth: authReducer,
  counter: counterReducer,
});

// Recipe
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers());

export default store;
