

import { useState } from 'react'
import Loading from '../Loading/Loading'

import Statistics from '../Statistics/Statistics'



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [loading , setLoading] = useState(true);


  console.log(loading);

  setTimeout(()=>{
    setLoading(false)
  },3000)

  if(loading){
    return(
      <Loading></Loading>
    );
  }
 
  const handleGoodclick = () => {
    //setAll(allClicks.concat(good))
    setGood(good + 1)
    console.log(good);
  }

  const handleNeutralclick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadclick = () => {
    setBad(bad + 1)
    console.log(bad)
  }

  
  
 
  return (
   
    <div>
      <h2>give feedback</h2>

      <button onClick={handleGoodclick}> Good</button>
      <button onClick={handleNeutralclick}> Neutral</button>
      <button onClick={handleBadclick}> Bad</button>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    
     

    </div>
  )
}

export default App