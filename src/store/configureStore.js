import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import sessionReducer from "./sessions/sessionSlice";
import clientReducer from "./clients/clientSlice";
import projectReducer from "./projects/projectSlice";
import userReducer from "./user/userSlice";

const reducer = combineReducers({
  sessions: sessionReducer,
  clients: clientReducer,
  projects: projectReducer,
  user: userReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
