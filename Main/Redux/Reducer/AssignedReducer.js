import * as types from '../Dispatch/actionType';

export default function AssignedReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_ASSIGNED:
      return {
       
        Assigned: action.data
      };
     
    default:
      return state;
  }
}
