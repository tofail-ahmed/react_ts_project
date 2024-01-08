import React, { useReducer } from "react";
const initialState = { count: 0 };
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "reset":
      return {count:initialState.count};

    default:
      return currentState;
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{state.count}</h1>
      <button className=" text-green-400 font-bold bg-green-200 px-4 py-2 rounded-lg" onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button className=" text-red-400 font-bold bg-red-200 px-4 py-2 rounded-lg" onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button className=" text-blue-400 font-bold bg-blue-200 px-4 py-2 rounded-lg" onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  );
};

export default UseReducer;
