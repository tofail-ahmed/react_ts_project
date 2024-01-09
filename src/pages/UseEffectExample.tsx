import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [hidden, sethidden] = useState(false);

  useEffect(() => {
    console.log("render");
    return () => {
      console.log("Cleanup");
    };
  }, [hidden]);

  const conditionalBg = {
    backgroundColor: hidden ? "red" : "green",
  };

  return (
    <div style={conditionalBg}>
      <div>
        <h3 className="text-center">UseEffectExample</h3>

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
        {!hidden&& <Counter/>}
      </div>
    </div>
  );
}
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("count")
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);
  return <h1>{count}</h1>;
};


export default UseEffectExample;
