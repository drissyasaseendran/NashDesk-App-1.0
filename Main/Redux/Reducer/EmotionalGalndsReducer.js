import * as types from '../Dispatch/actionType';

export default function EmotionalGalndsReducer(state = {}, action) {
   
  switch (action.type) {
    case types.FETCH_EMOTIONAL_GLANDS:
      return {
       
        Emotionalglands: action.data
      };
     
    default:
      return state;
  }
}
