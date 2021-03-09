import {
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_REQUESTED,
  FETCH_PLANETS_SUCCESS,
} from "../redux/const";

export type TPlanetsRequestedAction = {
  type: typeof FETCH_PLANETS_REQUESTED;
};

export type TPlanetsSuccessAction = {
  type: typeof FETCH_PLANETS_SUCCESS;
  info: TPlanetsInfo;
};

export interface IPlanetsDetails {
  id: string;
  name: string;
  population: string;
  climate: string;
}

export type TPlanetsInfo = {
  count: number;
  next: string | null;
  results: Array<IPlanetsDetails>;
};

export type TPlanetsFailureAction = {
  type: typeof FETCH_PLANETS_FAILURE;
};

export type PlanetsActionType =
  | TPlanetsRequestedAction
  | TPlanetsSuccessAction
  | TPlanetsFailureAction;
