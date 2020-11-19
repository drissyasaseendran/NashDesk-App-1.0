import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as actiontype from '../Redux/Actions/actionType'


function sample() {
  const a = useSelector(state => state.counter);
  const dispatch = useDispatch();
 
  return (
    <div className="App">
      <button
        onClick={() =>
          dispatch({
            type: actiontype.FETCH_DATA
          })
        }
      >
    Car
    </button> &nbsp;&nbsp;&nbsp;
    <h1>{a}</h1>
    <button
        onClick={() =>
          dispatch({
            type: actiontype.FETCH_DATA
          })
        }
      >
    Bike
      </button>  
    </div>
   
  );
}
 
export default sample;