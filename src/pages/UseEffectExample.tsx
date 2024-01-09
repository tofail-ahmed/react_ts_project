import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [hidden, sethidden] = useState(false);
  const [user,setUser]=useState({name:"",email:""})
console.log(user)
  useEffect(() => {
//     console.log("render");
    return () => {
      // console.log("Cleanup");
    };
  }, [hidden]);
useEffect(()=>{
console.log("Render")
},[user.name,user.email])
  const conditionalBg = {
    backgroundColor: hidden ? "red" : "green",
  };

  return (
    <div style={conditionalBg}>
      <div>
            <input onBlur={(e)=>setUser({...user,name:e.target.value})} type="text" name="name" id="name" className="border border-red-800" placeholder="name" />
            <input onBlur={(e)=>setUser({...user,email:e.target.value})} type="text" name="email" id="email" className="border border-red-800" placeholder="email" />
      </div>
      <div>
        {/* <h3 className="text-center">UseEffectExample</h3> */}

        {hidden ? (
          <button onClick={() => sethidden(!hidden)}>Unhide</button>
        ) : (
          <button onClick={() => sethidden(!hidden)}>Hide</button>
        )}

        {hidden ? (
          <h1 className="bg-red-400">Hidden</h1>
        ) : (
          <h1 className="bg-green-600">Visible</h1>
        )}
      </div>
      <div className="bg-slate-400 border border-orange-400">
        <h3>Interval Counter</h3>
        <h1>{/* {!hidden&&<p>{count}</p>} */}</h1>
        {/* {!hidden&& <Counter/>} */}
        {/* {!hidden&& <Todos/>} */}
      </div>
    </div>
  );
}
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      // console.log("count")
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return <h1>{count}</h1>;
};

const Todos = () => {
      const [todos,setTodos]=useState();
      const controller=new AbortController();
      const signal=controller.signal;
      useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/todos",{signal}).then(res=>res.json()).then(data=>setTodos(data) )
            return ()=>{
                  controller.abort()
            }
      },[])
      console.log(todos)
  return <div>  
      <ul>
        {todos&&todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
   
    </div>;
 
};

export default UseEffectExample;
