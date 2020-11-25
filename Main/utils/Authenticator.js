import Cookies from "js-cookie";
import { loginApiPath, logoutApiPath, credValidateApiPath } from "../endpoints";
import axios from "axios";
import store from "../states/store";
import {
  setLogout,
  setLoginWait,
  setLoginSuccess,
  setLoginFailure,
  setLoginError,
} from "../states/login/loginAction";

export const getAccessToken = () => Cookies.get("access_token");
export const getUserDetails = () => Cookies.get("user_details");
export const isAuthenticated = () => !!getAccessToken() && !!getUserDetails();

export const loginCall = (username, password) => {
  const loginInput = {
    username: username,
    password: password,
  };
  axios
    .post(loginApiPath, loginInput)
    .then((resp) => {
      if (resp.data.status === "success") {
        const fivedays = 5;
        Cookies.set("access_token", resp.data.payload.data[0].access_token, {
          expires: fivedays,
        });
        Cookies.set("user_details", JSON.stringify(resp.data.payload.data[0]));
        store.dispatch(setLoginSuccess(resp.data.payload.data[0]));
      }
      
      else {
        store.dispatch(setLoginFailure());
      }
    })
    .catch((e) => {
      store.dispatch(setLoginError());
    });
};

export const logout = () => {
  const accessToken = Cookies.get("access_token");
  const requestData = {
    access_token: accessToken,
    request_type: "delete",
  };
  axios.post(logoutApiPath, requestData).then((data) => {
    store.dispatch(setLogout());
  });

  Cookies.remove("access_token");
  Cookies.remove("user_details");
};


export const restErrorMsgValidation = (msgJson) => {
  if (msgJson.status === "fail" && msgJson.error_code === 102) {
    logout();
  }
};
