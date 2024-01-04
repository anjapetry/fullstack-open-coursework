import { useState } from 'react';
import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    <Statistics good={good} neutral={neutral} bad={bad} />
    </main>
  )
}

export default App;

