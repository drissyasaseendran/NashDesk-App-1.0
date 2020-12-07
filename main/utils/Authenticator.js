import Cookies from "js-cookie";
import AsyncStorage from '@react-native-community/async-storage'
import { loginApiPath, logoutApiPath } from "../endpoints";
import axios from "axios";
import store from "../states/store";
import {
  setLogout,
  setLoginWait,
  setLoginSuccess,
  setLoginFailure,
  setLoginError,
} from "../states/login/loginAction";
import { acc } from "react-native-reanimated";
export const isAuthenticated = () => !!getAccessToken()
export const loginCall = (username, password) => {
  const loginInput = {
    username: username,
    password: password,
  };
  axios
    .post(loginApiPath, loginInput)
    .then((resp) => {
       if (resp.data.status === "success") 
        {
          store.dispatch(setLoginSuccess(resp.data.payload.data[0]));
          storeData(resp.data.payload.data[0].access_token)
        }
      else {}
    })
    .catch((e) => {
    });
};
const storeData =  (token) => {
        try {
          AsyncStorage.setItem('access_token',token);
        } catch (error) {}
}

export const getAccessToken = async () => {
  let userId = '';
  try {
    userId = await AsyncStorage.getItem('access_token') || 'none';
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return userId;
}

const clearStorage = async () => {
  try {
    await AsyncStorage.clear()
    alert('Storage successfully cleared!')
  } catch (e) {
    alert('Failed to clear the async storage.')
  }
}