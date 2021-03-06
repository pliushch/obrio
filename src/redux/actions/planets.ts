import {
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_REQUESTED,
  FETCH_PLANETS_SUCCESS,
} from "../const";
import { getPlanets } from "../../services/swapi";

const planetsRequested = () => ({
  type: FETCH_PLANETS_REQUESTED,
});

const planetsLoaded = (info: any) => ({
  type: FETCH_PLANETS_SUCCESS,
  info,
});

const planetsFailure = () => ({
  type: FETCH_PLANETS_FAILURE,
});

export const fetchPlanets = (url = "https://swapi.dev/api/planets/") => async (
  dispatch: any
) => {
  dispatch(planetsRequested());
  try {
    const data = await getPlanets(url);
    dispatch(planetsLoaded(data));
  } catch (e) {
    dispatch(planetsFailure());
  }
};
