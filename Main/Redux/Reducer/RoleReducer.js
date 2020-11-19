import * as types from '../Dispatch/actionType';

export default function RoleReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_ROLE:
      return {
       
        Role: action.data
      };
     
    default:
      return state;
  }
}
