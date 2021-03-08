import {
  FETCH_PLANETS_FAILURE,
  FETCH_PLANETS_REQUESTED,
  FETCH_PLANETS_SUCCESS,
} from "../const";
import { getPlanets } from "../../services/swapi";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootReducerType } from "../reducers/rootReducer";
import {
  PlanetsActionType,
  TPlanetsFailureAction,
  TPlanetsInfo,
  TPlanetsRequestedAction,
  TPlanetsSuccessAction,
} from "../../types/planets";

const planetsRequested = (): TPlanetsRequestedAction => ({
  type: FETCH_PLANETS_REQUESTED,
});

const planetsLoaded = (info: TPlanetsInfo): TPlanetsSuccessAction => ({
  type: FETCH_PLANETS_SUCCESS,
  info,
});

const planetsFailure = (): TPlanetsFailureAction => ({
  type: FETCH_PLANETS_FAILURE,
});

type DispatchType = Dispatch<PlanetsActionType>;
type ThunkType = ThunkAction<
  Promise<void>,
  RootReducerType,
  unknown,
  PlanetsActionType
>;

export const fetchPlanets = (
  url = "https://swapi.dev/api/planets/"
): ThunkType => async (dispatch: DispatchType) => {
  dispatch(planetsRequested());
  try {
    const data = await getPlanets(url);
    dispatch(planetsLoaded(data));
  } catch (e) {
    dispatch(planetsFailure());
  }
};
