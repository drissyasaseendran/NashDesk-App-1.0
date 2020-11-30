export const AGENT_VIEW = "AGENT_VIEW";
export const AGENT_EDIT = "AGENT_EDIT";
export const AGENT_STATUS = "AGENT_STATUS";

export const agentViewData = (item) => {
  return { type: AGENT_VIEW, data: item };
};
export const agentStatus = (item) => {
  return { type: AGENT_STATUS, data: item };
};
export const agentEditData = (item) => {
  return { type: AGENT_EDIT, data: item };
};
// export const setLoginWait = () => {
//   return { type: LOGIN_WAIT };
// };

// export const setLoginFailure = () => {
//   return { type: LOGIN_FAILURE };
// };

// export const setLogout = () => {
//   return { type: LOGOUT };
// };
