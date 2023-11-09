type PropProgress = {
  currentQuestionIndex: number;
  numberOfQuestions: number;
  points: number;
  totalPoints: number;
  answer: number | null;
};
export function Progress({
  currentQuestionIndex,
  numberOfQuestions,
  points,
  totalPoints,
  answer,
}: PropProgress) {
  return (
    <header className="grid grid-cols-[auto_auto] items-center justify-between gap-y-4 mb-8">
      <progress
        value={currentQuestionIndex + Number(answer !== null)}
        max={numberOfQuestions}
        className="w-full h-2 rounded-full col-span-full"
      ></progress>

      <p>
        Question{" "}
        <strong>
          {currentQuestionIndex + 1} / {numberOfQuestions}
        </strong>
      </p>

      <p>
        Points{" "}
        <strong>
          {points} / {totalPoints}
        </strong>
      </p>
    </header>
  );
}
