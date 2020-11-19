import * as types from '../Dispatch/actionType';

export default function LeaderReducer(state = {}, action) {

  switch (action.type) {
  
    case types.FETCH_LEADER:
      return {
        Leader: action.data
      };
               
    default:
      return state;
  }
}
