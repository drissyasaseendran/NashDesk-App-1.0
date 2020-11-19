import * as types from '../Dispatch/actionType';

export default function MessageMessageReducer(state = {}, action) {

  switch (action.type) {
  
    case types.FETCH_MESSAGE_MEMO:
      return {
        MessageMemo: action.data
      };
      case 'REMOVE_MEMOS':
           
              let remove = action.data
                fetch('http://127.0.0.1:5000/messagememos', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(remove)
                }).then(response => {
                return response.json();
                }).then(result => { 
                if (result.status === "success") {
              
              
                }
                }).catch(error => {
                return error
                });
     case 'ADD_MEMOS':
           
                  let Add = action.data
                    fetch('http://127.0.0.1:5000/messagememos', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Add)
                    }).then(response => {
                    return response.json();
                    }).then(result => { 
                    if (result.status === "success") {
                  
                  
                    }
                    }).catch(error => {
                    return error
                    });              
    default:
      return state;
  }
}
