import { createStore, combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import group from './group/groupReducer'
import agent from './agents/agentReducer'
import tag from './tag/tagReducer'
const rootReducer = combineReducers({
  login: loginReducer,
  group:group,
  agent:agent,
  tag:tag
});

/* Remember to remove redux extension in production.... */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
