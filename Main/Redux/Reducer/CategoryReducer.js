import * as types from '../Dispatch/actionType';

export default function CategoryReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_CATEGORY:
      return {
       
        category: action.data
      };
     
    default:
      return state;
  }
}
