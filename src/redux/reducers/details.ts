import {
  FETCH_PERSON_INFO_SUCCESS,
  FETCH_PLANET_INFO_FAILURE,
  FETCH_PLANET_INFO_REQUESTED,
  FETCH_PLANET_INFO_SUCCESS,
} from "../const";

const initialState = {
  loading: false,
  error: null as boolean | null,
  planetInfo: {
    name: null,
    rotation_period: null,
    diameter: null,
    climate: null,
    gravity: null,
    terrain: null,
    population: null,
    residents: [],
  },
  personInfo: {
    name: null,
    height: null,
    mass: null,
    gender: null,
  },
};

type InitialState = typeof initialState;

export const details = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case FETCH_PLANET_INFO_REQUESTED:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PLANET_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        planetInfo: action.info,
        error: null,
      };
    case FETCH_PERSON_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        personInfo: action.info,
        error: null,
      };
    case FETCH_PLANET_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
