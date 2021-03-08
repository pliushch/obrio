import {
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_REQUESTED,
  FETCH_PLANETS_SUCCESS,
} from "../const";
import { IPlanetsDetails, PlanetsActionType } from "../../types/planets";

const initialState = {
  loading: false,
  error: false,
  planetsList: [] as Array<IPlanetsDetails>,
  count: 0,
  next: null as string | null,
};

type InitialState = typeof initialState;

const planetsReducer = (
  state = initialState,
  action: PlanetsActionType
): InitialState => {
  switch (action.type) {
    case FETCH_PLANETS_REQUESTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_PLANETS_SUCCESS:
      const { count, next, results } = action.info;
      return {
        ...state,
        loading: false,
        planetsList: [...state.planetsList, ...results],
        count,
        next,
        error: false,
      };
    case FETCH_PLANETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
};

export default planetsReducer;
