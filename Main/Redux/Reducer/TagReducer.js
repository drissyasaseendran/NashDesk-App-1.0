import * as types from '../Dispatch/actionType';

export default function TagReducer(state = {}, action) {
   
  switch (action.type) {
      case types.FETCH_TAGS:
            return {
            
              Tags: action.data
            };
        
      case 'ADD_TAGS':
             
            let add = action.data
              fetch('http://127.0.0.1:5000/tags', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(add)
              }).then(response => {
              return response.json();
              }).then(result => { 
              if (result.status === "success") {
                alert("Tag Added")
            
              }
              }).catch(error => {
              return error
              });     
     
      case 'REMOVE_TAGS':
            
      
          let remove = action.data
            fetch('http://127.0.0.1:5000/tags', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(remove)
            }).then(response => {
            return response.json();
            }).then(result => { 
            if (result.status === "success") {
          
              alert("Tag Removed")
            }
            }).catch(error => {
            return error
            });
        
    default:
      return state;
  }
}
