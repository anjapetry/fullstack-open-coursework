import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad;

  const handleClick = (feedback) => {
    const handleFeedBack = () => {
      if (feedback === 'good') {
      setGood(good +1);
    } else if (feedback === 'neutral') {
      setNeutral(neutral + 1);
    } else if (feedback === 'bad') {
      setBad(bad + 1);
    }
   }
   return handleFeedBack }

  return (
    <main>
      <h1>Give Feedback</h1>
      <div>
      <button onClick={handleClick('good')}>good</button>
      <button onClick={handleClick('neutral') }>neutral</button>
      <button onClick={handleClick('bad') }>bad</button>
      </div>

      <h2>Statistics</h2>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {(good - bad) / total}</p>
        <p>positive {good / total * 100}%</p>
      </div>

    </main>
  )
}

export default App;

