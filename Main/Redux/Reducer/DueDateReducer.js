import * as types from '../Dispatch/actionType';

export default function DueTodayReducer(state = {  }, action) {
  //  alert(types.FETCH_DUE_TODAY)
  switch (action.type) {
    case types.FETCH_DUE_TODAY:
      return {
       
        DueToday: action.data
      };
     
    default:
      return state;
  }
}
