import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
// import AppNavigator from './main/navigation/Drawer'
import AuthNavigator from './main/navigation/AuthNavigator'
import { Provider as StoreProvider } from 'react-redux'

import store from "./main/states/store";

export default function App() {
  return (
    <StoreProvider store={store} >
      <PaperProvider  >
        <AuthNavigator />
      </PaperProvider>
    </StoreProvider>
  )
}
