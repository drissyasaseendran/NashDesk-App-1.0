import * as types from './tagAction';

const tagData = {
  tag: {
 
    tagEdit:[],
    tagStatus: "",

  },
 
}

export default function tagReducer(state = tagData, action) 
{

  switch (action.type) 
    {
     
        case types.TAG_EDIT:
          tagData.tagEdit = action.data
        return {  ...state, tag: tagData };
        case types.TAG_STATUS:
         
          tagData.tagStatus = action.data
      
        return {  ...state , tag: tagData };
        default:
        return state;
    }
}