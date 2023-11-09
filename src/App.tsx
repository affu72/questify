import {useEffect, useReducer} from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import ErrorMsg from "./ErrorMsg";
import Question from "./Question";
import StartScreen from "./StartScreen";
import {State, Actions, ActionKind, StatusState, initialState} from "./type";
import NextButton from "./NextButton";
import {Progress} from "./Progress";
import {FinishScreen} from "./FinishScreen";

function reducer(state: State, action: Actions): State {
  const currentQuestion = state.questions[state.currentQuestionIndex];

  switch (action.type) {
    case ActionKind.dataReceived:
      return {
        ...state,
        questions: action.payload,
        status: StatusState.ready,
      };
    case ActionKind.dataFailed:
      return {
        ...state,
        status: StatusState.error,
      };
    case ActionKind.start:
      return {...state, status: StatusState.active};
    case ActionKind.newAnswer:
      return {
        ...state,
        answer: action.payload,
        points:
          currentQuestion.correctOption === action.payload
            ? state.points + currentQuestion.points
            : state.points,
      };

    case ActionKind.nextQuestion:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        answer: null,
      };

    case ActionKind.prevtQuestion:
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1 || 0,
      };
    case ActionKind.finish:
      return {
        ...state,
        status: StatusState.finish,
      };

    default:
      throw new Error("Action is unknown");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {questions, status, currentQuestionIndex, answer, points} = state;

  const numQuestion = questions.length;
  const totalPoints = questions.reduce((acc, value) => value.points + acc, 0);

  useEffect(function () {
    fetch("http://localhost:3000/questions")
      .then(res => res.json())
      .then(data => dispatch({type: ActionKind.dataReceived, payload: data}))
      .catch(err => dispatch({type: ActionKind.dataFailed}));
  }, []);

  return (
    <div className="grid grid-cols-1 h-[calc(100dvh-7.2rem-3*2.4rem)] justify-items-center">
      <Header></Header>
      <Main>
        {status === StatusState.loading && <Loader />}
        {status === StatusState.error && (
          <ErrorMsg message="There is some error in data loading" />
        )}
        {status === StatusState.ready && (
          <StartScreen lenQuestion={numQuestion} dispatch={dispatch} />
        )}

        {status === StatusState.active && (
          <>
            <Progress
              numberOfQuestions={numQuestion}
              totalPoints={totalPoints}
              currentQuestionIndex={currentQuestionIndex}
              points={points}
              answer={answer}
            ></Progress>
            <Question
              question={questions[currentQuestionIndex]}
              dispatch={dispatch}
              answer={answer}
            />

            <NextButton
              dispatch={dispatch}
              answer={answer}
              currQuestion={currentQuestionIndex}
              totalQuestion={numQuestion}
            />
          </>
        )}
        {status === StatusState.finish ? (
          <FinishScreen points={points} totalPoints={totalPoints} />
        ) : null}
      </Main>
    </div>
  );
}
