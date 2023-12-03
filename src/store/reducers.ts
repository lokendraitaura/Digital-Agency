import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  DataActionTypes,
} from "./actionTypes";
import { ApiData } from "../types";

interface DataState {
  data: ApiData[] | null;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: null,
  loading: false,
  error: null,
};

const dataReducer = (
  state = initialState,
  action: DataActionTypes
): DataState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default dataReducer;
