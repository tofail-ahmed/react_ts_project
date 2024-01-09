import React, { ChangeEvent, useReducer } from "react";
const initialState = { name: "", email: "",password:'' };
const reducer = (currentState, action) => {
  switch (action.type) {
    case "AddName":
      return {...currentState,name:action.payload};
    case "AddEmail":
      return {...currentState,email:action.payload};
    case "AddPassword":
      return {...currentState,password:action.payload};
    

    default:
      return currentState;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSubmit=(e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(state)
  
  }
  return (
    <form onSubmit={handleSubmit} className="bg-slate-400 p-4 mx-auto flex flex-col justify-center gap-4 my-4 rounded-xl">
      <div className="">
        <label className="text-slate-500">
          Username:
          <input onChange={(e)=>dispatch({type:"AddName",payload:e.target.value})} type="text" name="name" />
        </label>
      </div>
      <div>
        <label className="text-slate-500">
          Email:
          <input onChange={(e)=>dispatch({type:"AddEmail",payload:e.target.value})} type="email" name="email" />
        </label>
      </div>
      <div>
        <label className="text-slate-500">
          Password:
          <input onChange={(e)=>dispatch({type:"AddPassword",payload:e.target.value})} type="password" name="password" />
        </label>
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default UseReducer;
