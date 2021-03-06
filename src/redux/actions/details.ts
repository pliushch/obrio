import {
  FETCH_PLANET_INFO_FAILURE,
  FETCH_PLANET_INFO_REQUESTED,
  FETCH_PLANET_INFO_SUCCESS,
} from "../const";
import { getPlanetInfo } from "../../services/swapi";

const planetInfoRequested = () => ({
  type: FETCH_PLANET_INFO_REQUESTED,
});

const planetInfoLoaded = (info: any) => ({
  type: FETCH_PLANET_INFO_SUCCESS,
  info,
});

const planetInfoFailure = () => ({
  type: FETCH_PLANET_INFO_FAILURE,
});

export const fetchPlanetInfo = (url: string) => async (
  dispatch: any
) => {
  dispatch(planetInfoRequested());
  try {
    const { data } = await getPlanetInfo(url);
    dispatch(planetInfoLoaded(data));
  } catch (e) {
    dispatch(planetInfoFailure());
  }
};
