

 import React from 'react'

import Header from 'components/Header/Header'
import Content from 'components/Content/Content'
import Total from 'components/Total/Total'
import imageLogo from '../App/logo_vinci.png';

const App = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 13
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
            <link rel="stylesheet" href="index.css"/>

            <img src={imageLogo}></img>
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
