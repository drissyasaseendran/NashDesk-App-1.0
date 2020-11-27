import { createStore, combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import group from './group/groupReducer'
const rootReducer = combineReducers({
  login: loginReducer,
  group:group
});

/* Remember to remove redux extension in production.... */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
