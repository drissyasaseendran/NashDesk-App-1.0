export const GROUP_VIEW = "GROUP_VIEW";
export const GROUP_EDIT = "GROUP_EDIT";
export const GROUP_AGENT_VIEW = "GROUP_AGENT_VIEW";
export const GROUP_STATUS = "GROUP_STATUS";

export const groupView = (res) => {
  return { type: GROUP_VIEW ,data:res};
};
export const groupEditData = (res) => {

    return { type: GROUP_EDIT ,data:res};
  };
export const groupAgentView = (res) => {
  
    return { type: GROUP_AGENT_VIEW ,data:res};
};
export const groupStatus = (res) => {
    return { type: GROUP_STATUS ,data:res};
};