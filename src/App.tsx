// import { useState } from "react";
import { useContext } from "react";
import "./App.css";
// import UseEffectExample from "./pages/UseEffectExample";
// import UseRef from "./pages/UseRef";
// import Counter from "./pages/Counter";
// import Form from "./pages/form";
// import UseReducer from "./pages/UseReducer";
import UseRefForm from "./pages/UseRefForm";
import { ThemeContext } from "./context/ThemeProvider";

function App() {
  // const [counter, setCounter] = useState(0);
const { dark, setDark } = useContext(ThemeContext);
  return (
    <div className={`h-screen w-full ${dark?"bg-black":"bg-white"}`}>
      {dark?<button className="text-white"  onClick={()=>setDark(!dark)}>Light</button>:<button onClick={()=>setDark(!dark)}>Drak</button>}
    
      {/* <Counter counter={counter} setCounter={setCounter}></Counter> */}

      {/* <Form></Form> */}
      {/* <UseReducer></UseReducer> */}
      {/* <UseEffectExample></UseEffectExample> */}
      {/* <UseRef></UseRef> */}

      <UseRefForm></UseRefForm>
    </div>
  );
}

export default App;
