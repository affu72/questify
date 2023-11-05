import {useReducer} from "react";

enum ActionsKind {
  inc = "inc",
  dec = "dec",
  setCount = "setCount",
  setSteps = "setSteps",
  reset = "reset",
}

interface Actions {
  type: ActionsKind;
  payload?: number;
}

interface State {
  count: number;
  steps: number;
}

function reducer(state: State, action: Actions): State {
  const {count, steps} = state;
  if (action.type === "inc") return {...state, count: count + steps};
  if (action.type === "dec") return {...state, count: count - steps};
  if (action.type === "setCount") return {...state, count: action.payload ?? 0};
  if (action.type === "setSteps") return {...state, steps: action.payload ?? 0};
  if (action.type === "reset") return {count: 0, steps: 1};

  throw new Error("Unknown Action");
}

export default function DateCounter() {
  // const [steps, setSteps] = useState<number>(1);
  // const [value, setValue] = useState<number>(0);

  const initialvalue = {count: 0, steps: 1};

  const [state, dispatch] = useReducer(reducer, initialvalue);

  const {count, steps} = state;

  function handleInc() {
    // setValue(v => v + steps);
    // dispatch({type: "inc", payload: 1});

    dispatch({type: ActionsKind.inc});
  }

  function handleDec() {
    // setValue(v => v - steps);
    // dispatch({type: "dec", payload: 1});

    dispatch({type: ActionsKind.dec});
  }

  function reset() {
    // setSteps(1);
    // setValue(0);
    dispatch({type: ActionsKind.reset});
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div className="flex w-full h-screen bg-slate-700 items-center justify-center flex-col text-white gap-4">
      <div className="flex gap-2 items-center">
        <input
          type="range"
          min={1}
          max={10}
          className="outline-none"
          onChange={e =>
            dispatch({type: ActionsKind.setSteps, payload: +e.target.value})
          }
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
          onChange={e =>
            dispatch({type: ActionsKind.setCount, payload: +e.target.value})
          }
          value={state.count ?? ""}
        />
        <button className="p-2 bg-gray-800 aspect-square" onClick={handleInc}>
          &#43;
        </button>
      </div>
      <p>{date.toDateString()}</p>

      <button className="px-4 py-2 bg-gray-800" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
