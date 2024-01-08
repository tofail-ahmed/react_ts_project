import { useState } from "react";
import "./App.css";
import Counter from "./pages/Counter";
import Form from "./pages/form";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Counter counter={counter} setCounter={setCounter}></Counter>

      <Form></Form>
    </>
  );
}

export default App;
