
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
// import AppNavigator from './Main/Navigation/HomeStack'
import AppNavigator from './Main/Navigation/drawer'
import { Provider as StoreProvider } from 'react-redux'
// The <Provider /> makes the Redux store available to any nested components ..
// that have been wrapped in the connect()/hooks -(useSelector and useDispatch ) function
import { createStore ,applyMiddleware } from 'redux'
import reducer from "./Main/Redux/Reducer/index"; 
import thunk from "redux-thunk";
import {loadState,saveState} from './Main/Redux/Store/store'
const persistedState = loadState()
const store = createStore(
  reducer,
  // vvvvvvvvvvvvvvvvvvvvvvvhttps://github.com/RasnaMusthafa/Nashdesk-app.git
  // applyMiddleware(thunk),
  persistedState
);
// A store holds the whole state tree of your application. 
// The only way to change the state inside it is to dispatch an action on it.
store.subscribe(() =>
{
  saveState(store.getState())
})
export default function App() {
  return (
    <StoreProvider store={store} >
      <PaperProvider  >
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  )
}
