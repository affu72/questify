import {ActionKind, Actions, TQuestions} from "./type";

type PropQuestion = {
  question: TQuestions;
  dispatch: (action: Actions) => void;
  answer: number | null;
};

export default function Question({question, dispatch, answer}: PropQuestion) {
  return (
    <div>
      <h4 className="mb-4 font-bold tracking-wide text-slate-200 text-xl text-center p-4">
        {question?.question}
      </h4>
      <Options
        options={question?.options}
        dispatch={dispatch}
        answer={answer}
        correctAnswer={question.correctOption}
      />
    </div>
  );
}

function Options({
  options,
  dispatch,
  answer,
  correctAnswer,
}: {
  options: string[];
  dispatch: (action: Actions) => void;
  answer: number;
  correctAnswer: number;
}) {
  const hasAnswered = answer !== null;
  return (
    <div className="flex flex-auto flex-col gap-4 items-center w-full">
      {options.map((op, index) => (
        <button
          key={op}
          className={`px-4 py-2 rounded-full text-slate-200 text-left w-full ${
            !hasAnswered ? "hover:translate-x-5 duration-300" : ""
          } ${
            index === answer
              ? index === correctAnswer
                ? "bg-emerald-800 translate-x-5"
                : "bg-red-500 translate-x-5"
              : "bg-gray-500"
          } ${hasAnswered && index === correctAnswer ? "bg-green-800" : ""}`}
          onClick={() => dispatch({type: ActionKind.newAnswer, payload: index})}
          disabled={hasAnswered}
        >
          {op}
        </button>
      ))}
    </div>
  );
}
