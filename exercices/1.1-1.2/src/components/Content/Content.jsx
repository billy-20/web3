
import React from "react"
import Part from'../Part/Part'

const Content = (props) => {
    return(
        <div>
        <Part course={props.part1} exercises={props.exercises1}/>
        <Part course={props.part2} exercises={props.exercises2}/>
        <Part course={props.part3} exercises={props.exercises3}/>
        </div>
    )
  }

  export default Content