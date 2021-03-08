import {
  FETCH_PERSON_INFO_SUCCESS,
  FETCH_PLANET_INFO_FAILURE,
  FETCH_PLANET_INFO_REQUESTED,
  FETCH_PLANET_INFO_SUCCESS,
} from "../redux/const";

export type TPlanetInfoRequestedAction = {
  type: typeof FETCH_PLANET_INFO_REQUESTED;
};

export type PlanetInfo = {
  image: string;
  name: string;
  rotation_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  population: string;
  residents: Array<string>;
};

export type TPlanetInfoLoadedAction = {
  type: typeof FETCH_PLANET_INFO_SUCCESS;
  info: PlanetInfo;
};

export type PersonInfo = {
  name: string;
  gender: string;
  height: string;
  mass: string;
  id?: string;
  image: string;
};

export type TPersonInfoLoadedAction = {
  type: typeof FETCH_PERSON_INFO_SUCCESS;
  info: Array<PersonInfo>;
};

export type TPlanetInfoLoadedFailure = {
  type: typeof FETCH_PLANET_INFO_FAILURE;
};

export type PlanetInfoActionType =
  | TPlanetInfoRequestedAction
  | TPlanetInfoLoadedAction
  | TPlanetInfoLoadedFailure
  | TPersonInfoLoadedAction;
