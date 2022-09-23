
import React from "react"

const Button = ({onClick, text, delta}) => {

    function handleClick(e) {
        console.log(e.target.dataset.delta);
        onClick(parseInt(e.target.dataset.delta));
    }

    return(
        <button onClick={handleClick} data-delta={delta}>
            {text}
        </button>
    )
}


  export default Button;