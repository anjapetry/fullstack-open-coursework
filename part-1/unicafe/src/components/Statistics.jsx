const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  return (
    <div>
      <h2>Statistics</h2>

      {total > 0 ? (
        <div>
          <p>good {good}</p>
          <p>neutral {neutral}</p>
          <p>bad {bad}</p>
          <p>all {total}</p>
          <p>average {(good - bad) / total}</p>
          <p>positive {(good / total) * 100}%</p>
        </div>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default Statistics;
