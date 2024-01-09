import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  return (
    <>
      <h2>Statistics</h2>
      <table>
      {total > 0 ? (
    <tbody>
    <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral}/>
    <StatisticLine text="bad" value={bad}/>
    <StatisticLine text="all" value={total} />
    <StatisticLine text="average" value={(good - bad) / total} />
    <StatisticLine text="positive" value={` ${(good / total) * 100}%`} />
    </tbody>
      ) : (
        <tbody>
        <tr>
        <td>No feedback given</td>
        </tr>
        </tbody>
      )}
      </table>
    </>
  );
};

export default Statistics;
