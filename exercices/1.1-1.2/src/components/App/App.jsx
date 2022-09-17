

import React from 'react'
import Header from '../Header/Header'
import Total from '../Total/Total'
import Content from '../Content/Content'

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 13
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header/>
      <Content part1={part1} exercises1={exercises1} 
               part2={part2} exercises2={exercises2} 
               part3={part3} exercises3={exercises3}
      />
      <Total somme_exos={exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
