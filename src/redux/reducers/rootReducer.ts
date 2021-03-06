import { combineReducers } from "redux";
import planetsReducer from "./planets";
import { details } from "./details";

const rootReducer = combineReducers({
  planets: planetsReducer,
  details,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
