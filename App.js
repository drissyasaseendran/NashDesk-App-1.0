import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import Navigator from './main/navigation/'
import { Provider as StoreProvider } from 'react-redux'
import store from "./main/states/store";
export default function App() {
  return (
    <StoreProvider store={store} >
      <PaperProvider  >
        <Navigator/>
      </PaperProvider>
    </StoreProvider>
  )
}
