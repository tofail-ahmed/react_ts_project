import React from "react";
type TCounter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

const Counter = ({ counter, setCounter }: TCounter) => {
  console.log("render");

  return (
    <div className="flex flex-col gap-4">
      <span className="text-lg text-yellow-400 p-4 rounded-lg bg-zinc-600 font-bold text-center mx-auto">
        {counter}
      </span>

     <div className="flex flex-row gap-4 justify-center">
     <button
        className="p-4 bg-emerald-600 rounded-lg text-md"
        onClick={() => setCounter((prevValue) => prevValue + 1)}
      >
        Increment 1
      </button>
      <button
        className="p-4 bg-red-400 rounded-lg text-md"
        onClick={() => setCounter((prevValue) => prevValue - 1)}
      >
        Decrement
      </button>
      <button
        className="p-4 bg-stone-800 text-gray-100 rounded-lg text-md"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
     </div>
    </div>
  );
};

export default Counter;
