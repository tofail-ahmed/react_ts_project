// import { useState } from "react";
import { useContext } from "react";
import "./App.css";
// import UseEffectExample from "./pages/UseEffectExample";
// import UseRef from "./pages/UseRef";
// import Counter from "./pages/Counter";
// import Form from "./pages/form";
// import UseReducer from "./pages/UseReducer";
// import UseRefForm from "./pages/UseRefForm";
import { TThemeContext, ThemeContext } from "./context/ThemeProvider";
import UserContainer from "./component/UserContainer";
import Select from "./component/Select";
// import UserList from "./component/UserList";
// import UserAvatar from "./component/UserAvatar";
// import GameResult from "./pages/GameResult";
// import { MenuContext, MenuItem, MenuList } from "./component/Menu";

function App() {
  // const [counter, setCounter] = useState(0);
  const { dark, setDark } = useContext(ThemeContext) as TThemeContext;
  // console.log(dark)
  return (
    <div className={`h-full py-4 w-full ${dark ? "bg-black" : "bg-white"}`}>
      {dark ? (
        <button className="text-white" onClick={() => setDark(!dark)}>
          Light
        </button>
      ) : (
        <button onClick={() => setDark(!dark)}>Drak</button>
      )}

      {/* <Counter counter={counter} setCounter={setCounter}></Counter> */}

      {/* <Form></Form> */}
      {/* <UseReducer></UseReducer> */}
      {/* <UseEffectExample></UseEffectExample> */}
      {/* <UseRef></UseRef> */}

      {/* <UseRefForm></UseRefForm>
      <MenuList>
        <MenuItem>
       
        </MenuItem>
      </MenuList> */}

      {/* <UserAvatar></UserAvatar> */}
      {/* <GameResult></GameResult> */}
      {/* <UserContainer></UserContainer> */}
      <Select>
        <Select.SelectOption value={"Option1"}>Option1</Select.SelectOption>
        <Select.SelectOption value={"Option2"}>Option2</Select.SelectOption>
        <Select.SelectOption value={"Option3"}>Option3</Select.SelectOption>
        <Select.SelectOption value={"Option4"}>Option4</Select.SelectOption>
      </Select>
     
    </div>
  );
}

export default App;
