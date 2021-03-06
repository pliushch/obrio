import {
  FETCH_PERSON_INFO_SUCCESS,
  FETCH_PLANET_INFO_FAILURE,
  FETCH_PLANET_INFO_REQUESTED,
  FETCH_PLANET_INFO_SUCCESS,
} from "../const";
import { getPersonInfo, getPlanetInfo } from "../../services/swapi";

const planetInfoRequested = () => ({
  type: FETCH_PLANET_INFO_REQUESTED,
});

const planetInfoLoaded = (info: any) => ({
  type: FETCH_PLANET_INFO_SUCCESS,
  info,
});

const personInfoLoaded = (info: any) => ({
  type: FETCH_PERSON_INFO_SUCCESS,
  info,
});

const planetInfoFailure = () => ({
  type: FETCH_PLANET_INFO_FAILURE,
});

export const fetchPlanetInfo = (id: string) => async (dispatch: any) => {
  dispatch(planetInfoRequested());
  try {
    const { data: planetInfo } = await getPlanetInfo(id);
    const personInfo = await Promise.all(
      planetInfo.residents.map(async (url: any) => {
        const { data: person } = await getPersonInfo(url);
        return {
          name: person.name,
          gender: person.gender,
          height: person.height,
          mass: person.mass,
        };
      })
    );
    dispatch(planetInfoLoaded(planetInfo));
    dispatch(personInfoLoaded(personInfo));
  } catch (e) {
    dispatch(planetInfoFailure());
  }
};
