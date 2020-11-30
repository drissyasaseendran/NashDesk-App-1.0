import * as types from './agentAction';
const agentData = {
  agent: {agentView: [],
    agentedit:[],
    agentStatus: "",}
}
export default function groupReducer(state = agentData, action) 
{

  switch (action.type) 
    {
      
        case types.AGENT_VIEW:
          agentData.agentView = action.data
        return { ...state, agent: agentData   };
       
        case types.AGENT_EDIT:
          agentData.agentedit = action.data
        return {  ...state, agent: agentData };
        case types.AGENT_STATUS:
         
            agentData.agentStatus = action.data
      
        return {  ...state , agent: agentData };
        default:
        return state;
    }
}
  
  // switch (action.type) {

  //   case types.AGENT_VIEW:
  //     return {
  //       agent: action.data
  //     };
  
  //   default:
  //     return state;
  // }
