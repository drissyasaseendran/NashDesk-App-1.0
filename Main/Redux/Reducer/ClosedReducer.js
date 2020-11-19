import * as types from '../Dispatch/actionType';

export default function ClosedReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_CLOSED:
      return {
       
        Closed: action.data
      };
     
    default:
      return state;
  }
}
