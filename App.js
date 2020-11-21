import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './Main/Navigation/Drawer'
import { Provider as StoreProvider } from 'react-redux'
import { createStore } from 'redux'
import reducer from "./Main/Redux/Reducer/index"; 
import {loadState,saveState} from './Main/Redux/Store/store'
const persistedState = loadState()
const store = createStore(
  reducer,
  persistedState
);

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
