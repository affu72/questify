type PropFinishScreen = {
  points: number;
  totalPoints: number;
};
export function FinishScreen({points, totalPoints}: PropFinishScreen) {
  const percentage = (points / totalPoints) * 100;

  return (
    <div className="px-8 py-4 bg-blue-500 rounded-full">
      <p>
        You're finished with points{" "}
        <strong>
          {points} / {totalPoints}
        </strong>{" "}
        ({Math.ceil(percentage)}%)
      </p>
    </div>
  );
}
