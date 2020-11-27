import * as types from './groupAction';

const groupData = {
  group: {
    groupView: [],
    groupAgent: [],
    groupedit:[],
    groupStatus: "",

  },
 
}


export default function groupReducer(state = groupData, action) 
{
  
  // switch (action.type) {
  //   case types.GROUP_VIEW:
  //     return {
  //       group: action.data
  //     };
  
  //   default:
  //     return state;
  // }

  switch (action.type) 
    {
      
        case types.GROUP_VIEW:
          groupData.groupView = action.data
        return { ...state, group: groupData   };
        case types.GROUP_AGENT_VIEW:
          groupData.groupAgent = action.data
        
        return { ...groupData,  group: groupData  };
        case types.GROUP_EDIT:
          groupData.groupedit = action.data
        return {  ...state, group: groupData };
        case types.GROUP_STATUS:
         
            groupData.groupStatus = action.data
      
        return {  ...state , group: groupData };
        default:
        return state;
    }
}