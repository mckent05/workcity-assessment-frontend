import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import sessionReducer from "./sessions/sessionSlice";
// import ticketReducer from "./tickets/ticketSlice"
// import userReducer from "./user/userSlice"
 
const reducer = combineReducers({
  sessions: sessionReducer,
  // tickets: ticketReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;