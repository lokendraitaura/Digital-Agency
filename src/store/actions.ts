import axios from "axios";
import { ApiData } from "../types";
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from "./actionTypes";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "./store";
import { AnyAction } from "redux";
import { apiUrl } from "../common";

type Dispatch = ThunkDispatch<RootState, any, AnyAction>;

export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data: ApiData[]) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error: string) => ({
  type: FETCH_DATA_FAILURE,
  error,
});

export const fetchData = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchDataRequest());
    axios
      .get(apiUrl)
      .then((response) => {
        dispatch(fetchDataSuccess(response.data.articles));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error.message));
      });
  };
};
