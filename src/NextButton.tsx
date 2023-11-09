import {ActionKind, Actions} from "./type";

type PropNextBtn = {
  dispatch: (action: Actions) => void;
  answer: number | null;
  currQuestion: number;
  totalQuestion: number;
};

export default function NextButton({
  dispatch,
  answer,
  currQuestion,
  totalQuestion,
}: PropNextBtn) {
  if (answer === null) return;

  if (currQuestion < totalQuestion - 1) {
    return (
      <button
        className="bg-gray-600 px-8 py-2 rounded-full mt-4 float-right"
        onClick={() => dispatch({type: ActionKind.nextQuestion})}
      >
        Next
      </button>
    );
  }

  if (currQuestion === totalQuestion - 1) {
    return (
      <button
        className="bg-gray-600 px-8 py-2 rounded-full mt-4 float-right"
        onClick={() => dispatch({type: ActionKind.finish})}
      >
        Finish
      </button>
    );
  }
}
