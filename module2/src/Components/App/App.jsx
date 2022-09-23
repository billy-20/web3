

  import Display from 'Components/Display/Display'
  import Button from 'Components/Button/Button'

  import { useState } from 'react'
  const App = () => {
  
    const [ counter, setCounter ] = useState(localStorage.getItem("counter"))
  
    const changeCount = (delta) => setCounter(counter + delta)


    localStorage.setItem("counter", JSON.stringify(counter))
    return (
      <div>
      <Display counter={counter}/>
      <Button
        onClick={changeCount}
        delta={1}
        text={"plus"}
       
      />
      <Button
        onClick={changeCount}
        delta={-counter}
        text={"reset"}
     
      /> 
       <Button
        onClick={changeCount}
        delta={-1}
        text={"minus"}
        
      /> 
      </div>
    )
  }
  
  export default App
  

