import { createStore, combineReducers } from "redux";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  login: loginReducer,
});

/* Remember to remove redux extension in production.... */
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
