import { createStore, combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import group from './group/groupReducer'
import agent from './agents/agentReducer'
const rootReducer = combineReducers({
  login: loginReducer,
  group:group,
  agent:agent
});

/* Remember to remove redux extension in production.... */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
