import {
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_REQUESTED,
  FETCH_PLANETS_SUCCESS,
} from "../const";

const initialState = {
  loading: false,
  error: null,
  planetsList: [],
  count: 0,
  next: null,
};

const planetsReducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case FETCH_PLANETS_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PLANETS_SUCCESS:
      const { count, next, results } = action.info;
      return {
        ...state,
        loading: false,
        planetsList: [...state.planetsList, ...results],
        count,
        next,
        error: null,
      };
    case FETCH_PLANETS_FAILURE:
      return {
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default planetsReducer;
