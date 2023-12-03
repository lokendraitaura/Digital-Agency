import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { combineReducers } from "redux";
import dataReducer from "./reducers";

const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
