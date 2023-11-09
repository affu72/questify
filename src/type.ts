export enum StatusState {
  loading = "LOADING",
  error = "ERROR",
  ready = "READY",
  active = "ACTIVE",
  finish = "FINISH",
}

export interface Actions {
  type: ActionKind;
  payload?: TQuestions[] | number;
}

export interface TQuestions {
  question: string;
  correctOption: number;
  options: string[];
  points: number;
}

export enum ActionKind {
  dataReceived = "dataReceived",
  dataFailed = "dataFailed",
  start = "start",
  newAnswer = "newAnswer",
  nextQuestion = "nextQuestion",
  prevtQuestion = "prevQuestion",
  finish = "finish",
}

export interface State {
  questions: TQuestions[];
  status: StatusState;
  currentQuestionIndex: number;
  answer: number | null;
  points: number;
}

export const initialState: State = {
  questions: [],
  status: StatusState.loading,
  currentQuestionIndex: 0,
  answer: null,
  points: 0,
};
