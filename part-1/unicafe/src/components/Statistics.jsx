import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  return (
    <div>
      <h2>Statistics</h2>
      {total > 0 ? (
      <>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="bad" value={bad}/>
    <StatisticLine text="all" value={total} />
    <StatisticLine text="average" value={(good - bad) / total} />
    <StatisticLine text="positive" value={` ${(good / total) * 100}%`} />
    </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
