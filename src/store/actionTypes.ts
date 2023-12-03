import { ApiData } from "../types";

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

interface FetchDataRequestAction {
  type: typeof FETCH_DATA_REQUEST;
}

interface FetchDataSuccessAction {
  type: typeof FETCH_DATA_SUCCESS;
  payload: ApiData[];
}

interface FetchDataFailureAction {
  type: typeof FETCH_DATA_FAILURE;
  error: string;
}

export type DataActionTypes =
  | FetchDataRequestAction
  | FetchDataSuccessAction
  | FetchDataFailureAction;
