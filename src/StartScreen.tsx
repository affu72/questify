import {ActionKind, Actions} from "./type";

type PropStartScreen = {
  lenQuestion: number;
  dispatch: (action: Actions) => void;
};

export default function StartScreen({lenQuestion, dispatch}: PropStartScreen) {
  return (
    <div className="text-white flex flex-col items-center justify-center gap-4 font-bold">
      <h2 className="text-4xl">Welcome to the React Quiz!</h2>
      <h3 className="text-2xl">
        {`${lenQuestion}`} questions to test your React mastery
      </h3>
      <button
        className="rounded-full px-6 py-2 bg-slate-600 tracking-wider mt-8"
        onClick={() => dispatch({type: ActionKind.start})}
      >
        Let's Start!
      </button>
    </div>
  );
}
