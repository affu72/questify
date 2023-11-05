import { useState } from "react";

export default function DateCounter() {
  const [steps, setSteps] = useState<number>(1);
  const [value, setValue] = useState<number>(0);

  function handleInc() {
    setValue(v => v+steps);
  }

  function handleDec() {
    setValue((v)=>v-steps)
  }

  function reset() {
    setSteps(1);
    setValue(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + value);

  return (
    <div className="flex w-full h-screen bg-slate-700 items-center justify-center flex-col text-white gap-4">
      <div className="flex gap-2 items-center">
        <input
          type="range"
          min={1}
          max={10}
          className="outline-none"
          onChange={e => setSteps(+e.target.value)}
          value={steps}
        />
        <span className="font-semibold">{steps}</span>
      </div>
      <div>
        <button className="p-2 bg-gray-800 aspect-square" onClick={handleDec}>
          &minus;
        </button>
        <input
          type="number"
          className="py-1 px-2 outline-none text-black"
          onChange={e => setValue(+e.target.value)}
          value={value ?? ""}
        />
        <button className="p-2 bg-gray-800 aspect-square" onClick={handleInc}>
          &#43;
        </button>
      </div>
      <p>{date.toDateString()}</p>

      <button className="px-4 py-2 bg-gray-800" onClick={reset}>Reset</button>
    </div>
  );
}
