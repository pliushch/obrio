import { combineReducers } from "redux";
import planetsReducer from "./planets";

const rootReducer = combineReducers({
  planets: planetsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
