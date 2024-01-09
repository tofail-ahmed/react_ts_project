import React, { useEffect, useState } from "react";

function UseEffectExample() {
  const [hidden, sethidden] = useState(false);
  useEffect(() => {
    console.log("render");
    return () => {
      console.log("Cleanup");
    };
  }, [hidden]);
  const conditionalBg={
      backgroundColor: hidden?"red": "green",
  }

  return (
    <div style={conditionalBg}>
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
  );
}

export default UseEffectExample;
