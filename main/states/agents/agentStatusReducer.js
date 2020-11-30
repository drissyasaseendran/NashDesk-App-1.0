
import * as types from './agentAction';

export default function agentStatusReducer(state = {}, action) {

  
  switch (action.type) {

    case types.AGENT_STATUS:
      return {
        agentStatus: action.data
      };
  
    default:
      return state;
  }
}
