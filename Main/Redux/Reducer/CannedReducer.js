import * as types from '../Dispatch/actionType';

export default function CannedReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_CANNED_RESPONSE:
      return {
       Canned: action.data
      };
     
    default:
      return state;
  }
}
