import * as types from './groupAction';

const tagData = {
  tag: {
 
    tagedit:[],
    tagStatus: "",

  },
 
}

export default function tagReducer(state = tagData, action) 
{

  switch (action.type) 
    {
     
        case types.TAG_EDIT:
          tagData.tagedit = action.data
        return {  ...state, tag: tagData };
        case types.TAG_STATUS:
         
          tagData.tagStatus = action.data
      
        return {  ...state , tag: tagData };
        default:
        return state;
    }
}