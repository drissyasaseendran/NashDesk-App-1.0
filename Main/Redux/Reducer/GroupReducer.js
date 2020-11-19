
import * as types from '../Dispatch/actionType';

export default function GroupReducer(state = {}, action) {

  switch (action.type) {
      case 'FETCH_GROUP':
            return {
              Group: action.data
            };
      case 'ADD_GROUP':
             
            let add = action.data
              fetch('http://127.0.0.1:5000/groups', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(add)
              }).then(response => {
              return response.json();
              }).then(result => { 
              if (result.status === "success") {
                return  result.status
            
              }
              }).catch(error => {
              return error
              });
           
         
      case 'REMOVE_GROUP':
             console.log(JSON.stringify(action.type))
             console.log(JSON.stringify(action.data))
              let remove = action.data
                fetch('http://127.0.0.1:5000/groups', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(remove)
                }).then(response => {
                return response.json();
                }).then(result => { 
                if (result.status === "success") {
              // alert("REDUUCERRERR DELEET GROUP")
              
                }
                }).catch(error => {
                return error
                });
            
          
     
     
    default:
      return state;
  }
}
