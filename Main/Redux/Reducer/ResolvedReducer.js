import * as types from '../Dispatch/actionType';

export default function ResolvedReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_RESOLVED:
      return {
       
        Resolved: action.data
      };
     
    default:
      return state;
  }
}
