import * as types from '../Dispatch/actionType';

export default function UnAssignedReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_UNASSIGNED:
      return {
       
        UnAssigned: action.data
      };
     
    default:
      return state;
  }
}
