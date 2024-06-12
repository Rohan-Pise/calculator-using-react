import { useState } from 'react'
import styles from "./App.module.css"
import Display from "./components/Displaycomp"
import ButtonsContainer from './components/ButtonsContainer'


function App() {
  const [currVal, setcurrVal] = useState("");


  const onButtonClick=(buttonText)=>{
       console.log( buttonText);
       if(buttonText === "C"){
          setcurrVal("");
       }else if(buttonText ==="="){
        const result = eval(currVal);
        setcurrVal(result);
       }else{
        const newDisplayValue = currVal+buttonText;
        setcurrVal(newDisplayValue);
       }
  }

  return ( <div className={styles.calculator}>
    <Display currVal= {currVal}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
  </div>
  )
}

export default App
