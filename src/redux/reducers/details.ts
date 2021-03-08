import {
  FETCH_PERSON_INFO_SUCCESS,
  FETCH_PLANET_INFO_FAILURE,
  FETCH_PLANET_INFO_REQUESTED,
  FETCH_PLANET_INFO_SUCCESS,
} from "../const";
import {
  PersonInfo,
  PlanetInfo,
  PlanetInfoActionType,
} from "../../types/details";

const initialState = {
  loading: false,
  error: false,
  planetInfo: {} as PlanetInfo,
  personList: [] as Array<PersonInfo>,
};

type InitialState = typeof initialState;

export const details = (
  state = initialState,
  action: PlanetInfoActionType
): InitialState => {
  switch (action.type) {
    case FETCH_PLANET_INFO_REQUESTED:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCH_PLANET_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        planetInfo: action.info,
        error: false,
      };
    case FETCH_PERSON_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        personList: action.info,
        error: false,
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
