import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

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
