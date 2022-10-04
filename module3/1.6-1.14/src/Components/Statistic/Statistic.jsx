
import React from "react";
const Statistic = ({text , clickName}) => {
  
  
    return (
      <tr>
      <td>{text}</td>
      <td>{clickName}</td>
    </tr>
    )
  }

  export default Statistic;