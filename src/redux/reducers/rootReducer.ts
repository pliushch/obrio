import { combineReducers } from "redux";
import planetsReducer from "./planets";
import { details } from "./details";

const rootReducer = combineReducers({
  planets: planetsReducer,
  details,
});

export type RootReducerType = ReturnType<typeof rootReducer>;

export default rootReducer;
