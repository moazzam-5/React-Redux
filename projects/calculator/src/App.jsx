import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setCalVal] = useState("")
  const buttonClick = (data) => {
    if(data === "C"){
      setCalVal("")
    }else if(data === "="){ 
      let result= eval(calVal)
      setCalVal(result)
    }else{
      let newVal = calVal+data 
      setCalVal(newVal)
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer onButtonClick={buttonClick}></ButtonsContainer>
    </div>
  );
}

export default App;