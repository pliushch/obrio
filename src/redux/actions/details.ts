import {
  FETCH_PERSON_INFO_SUCCESS,
  FETCH_PLANET_INFO_FAILURE,
  FETCH_PLANET_INFO_REQUESTED,
  FETCH_PLANET_INFO_SUCCESS,
} from "../const";
import {
  getPersonImage,
  getPersonInfo,
  getPlanetInfo,
} from "../../services/swapi";
import { RootReducerType } from "../reducers/rootReducer";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { getId } from "../../helpers/getId";
import {
  PersonInfo,
  PlanetInfo,
  PlanetInfoActionType,
  TPersonInfoLoadedAction,
  TPlanetInfoLoadedAction,
  TPlanetInfoLoadedFailure,
  TPlanetInfoRequestedAction,
} from "../../types/details";

const planetInfoRequested = (): TPlanetInfoRequestedAction => ({
  type: FETCH_PLANET_INFO_REQUESTED,
});

const planetInfoLoaded = (info: PlanetInfo): TPlanetInfoLoadedAction => ({
  type: FETCH_PLANET_INFO_SUCCESS,
  info,
});

const personInfoLoaded = (
  info: Array<PersonInfo>
): TPersonInfoLoadedAction => ({
  type: FETCH_PERSON_INFO_SUCCESS,
  info,
});

const planetInfoFailure = (): TPlanetInfoLoadedFailure => ({
  type: FETCH_PLANET_INFO_FAILURE,
});

type DispatchType = Dispatch<PlanetInfoActionType>;
type ThunkType = ThunkAction<
  Promise<void>,
  RootReducerType,
  unknown,
  PlanetInfoActionType
>;

export const fetchPlanetInfo = (id: string): ThunkType => async (
  dispatch: DispatchType
) => {
  dispatch(planetInfoRequested());
  try {
    const { data: planetInfo } = await getPlanetInfo(id);
    const personInfo: Array<PersonInfo> = await Promise.all(
      planetInfo.residents.map(async (url: string) => {
        const { data: person } = await getPersonInfo(url);
        const { config } = await getPersonImage(getId(person.url));
        return {
          name: person.name,
          id: getId(url),
          image: config.url,
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
