import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './Main/Navigation/Drawer'
import { Provider as StoreProvider } from 'react-redux'

import store from "./Main/states/store";

export default function App() {
  return (
    <StoreProvider store={store} >
      <PaperProvider  >
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  )
}
