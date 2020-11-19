import * as types from '../Dispatch/actionType';

export default function AgentsReducer(state = {}, action) {

  switch (action.type) {
    case types.FETCH_AGENTS:
      return {
       
        Agents: action.data
      };
      case 'ADD_AGENTS':
             console.log("ADD AGENTS"+ JSON.stringify(action.data))
        let add = action.data
          fetch('http://127.0.0.1:5000/agentsettings', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(add)
          }).then(response => {
          return response.json();
          }).then(result => { 
            alert("res"+result.status)
          if (result.status === "success") {
          
        
          }
          }).catch(error => {
          return error
          });
       
     
  case 'REMOVE_AGENTS':
         console.log(JSON.stringify(action.type))
         console.log(JSON.stringify(action.data))
          let remove = action.data
            fetch('http://127.0.0.1:5000/agentsettings', {
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
        
      
 
     
    default:
      return state;
  }
}
