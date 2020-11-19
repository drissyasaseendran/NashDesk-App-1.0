import * as types from '../Dispatch/actionType';

export default function OverDueReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_OVER_DUE:
      return {
       
        OverDue: action.data
      };
     
    default:
      return state;
  }
}
