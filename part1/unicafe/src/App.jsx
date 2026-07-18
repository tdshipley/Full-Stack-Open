import { useState } from 'react'
import Button from './Button'

const StatisticsLine = ({name, value}) => {
  return (
    <p>{name} {value}</p>
  )
}

const Statistics = ({good, neutral, bad, allFeedback}) => {

  if(allFeedback == 0) {
    return(
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  const getAverageFeedbackScore = () => {
    return (good + -bad) / allFeedback || 0
  }

  const getPositiveFeedbackPercentage = () => {
    return good / allFeedback * 100 || 0
  }

  return (
    <div>
      <h2>statistics</h2>
        <StatisticsLine name="good" value={good} />
        <StatisticsLine name="neutral" value={neutral} />
        <StatisticsLine name="bad" value={bad} />
        <StatisticsLine name="all" value={allFeedback} />
        <StatisticsLine name="average" value={getAverageFeedbackScore()} />
        <StatisticsLine name="positive" value={getPositiveFeedbackPercentage()} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allFeedback, setAllFeedback] = useState(0)


  const handleGoodClick = () => {
    setGood(good + 1)
    setAllFeedback(allFeedback + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAllFeedback(allFeedback + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAllFeedback(allFeedback + 1)
  }

  return (
    <div>
      <h2>give feedback</h2>
        <Button onClick={handleGoodClick} text="good" />
        <Button onClick={handleNeutralClick} text="neutral" />
        <Button onClick={handleBadClick} text="bad" />
        <Statistics good={good} neutral={neutral} bad={bad} allFeedback={allFeedback} />
    </div>
  )
}

export default App