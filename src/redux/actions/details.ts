import {
  FETCH_PERSON_INFO_SUCCESS,
  FETCH_PLANET_INFO_FAILURE,
  FETCH_PLANET_INFO_REQUESTED,
  FETCH_PLANET_INFO_SUCCESS,
} from "../const";
import { getPersonInfo, getPlanetInfo } from "../../services/swapi";
import { RootReducerType } from "../reducers/rootReducer";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

type TPlanetInfoRequestedAction = {
  type: typeof FETCH_PLANET_INFO_REQUESTED;
};

export type PlanetInfo = {
  name: string;
  rotation_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
  residents: Array<string>;
};

type TPlanetInfoLoadedAction = {
  type: typeof FETCH_PLANET_INFO_SUCCESS;
  info: PlanetInfo;
};

export type PersonInfo = {
  name: string;
  gender: string;
  height: string;
  mass: string;
};

type TPersonInfoLoadedAction = {
  type: typeof FETCH_PERSON_INFO_SUCCESS;
  info: Array<PersonInfo>;
};

type TPlanetInfoLoadedFailure = {
  type: typeof FETCH_PLANET_INFO_FAILURE;
};

export type PlanetInfoActionType =
  | TPlanetInfoRequestedAction
  | TPlanetInfoLoadedAction
  | TPlanetInfoLoadedFailure
  | TPersonInfoLoadedAction;

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
