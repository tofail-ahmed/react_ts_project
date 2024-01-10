import  { useRef, useState } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const myRef = useRef(0);

  const increment = () => {
    console.log(myRef);
    console.log({ count });
    myRef.current = myRef.current + 1;
    setCount(count + 1);
  };
  return (
    <div>
      <button
        className="border border-2 p-2  rounded-lg bg-green-400"
        onClick={() => increment()}
      >
        Count
      </button>
      <h1>{count}</h1>
    </div>
  );
};

export default UseRef;
