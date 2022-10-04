import React from "react";


import Statistic from "../Statistic/Statistic";


const Statistics = ({good,bad,neutral}) => {
    const total = good+bad+neutral
    const moyenne = (good-total)/total;
    const positive = (good / total) * 100;

    if(total===0){
      return(
        <h4>no feedback given </h4>
      )
    }


    return (
      <div>
            <tbody>
        <Statistic text="good : " clickName={good} />
        <Statistic text="neutral : " clickName={neutral} />
        <Statistic text="bad : " clickName={bad} />
        <Statistic text="all = " clickName={total} />
        <Statistic text="average = " clickName={moyenne} />
        <Statistic text="positive = " clickName={positive} />


        
      </tbody>

      </div>
    )
  }
  export default Statistics