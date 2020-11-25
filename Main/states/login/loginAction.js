export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_WAIT = "LOGIN_WAIT";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const setLoginError = () => {
  return { type: LOGIN_ERROR };
};

export const setLoginSuccess = (item) => {
  return { type: LOGIN_SUCCESS, payload: item };
};

export const setLoginWait = () => {
  return { type: LOGIN_WAIT };
};

export const setLoginFailure = () => {
  return { type: LOGIN_FAILURE };
};

export const setLogout = () => {
  return { type: LOGOUT };
};
