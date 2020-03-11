import React, { useState } from 'react';
import './App.css';


const Button = (props) => {
  return (
    <button onClick={props.buttonFunction}>Tabs {props.tabnumber}</button>
  )
}
const Display = (props) => {
  return(
    <div style={{width:"500px", height:"500px"}}>
      {props.names}
    </div>
  );
}

function App() {
  const [textNumber, setTextNumber ] = useState([0]);
  const changeNumber = (number) => {
    setTextNumber(number)
  }


  const textOptions = [
    'Billy',
    'Bob',
    'Joe',
  ]
  return (
    <div className="App">
      <div>
        <Button buttonFunction={() => changeNumber(0)} tabnumber="1"/>
        <Button buttonFunction={() => changeNumber(1)} tabnumber="2"/>
        <Button buttonFunction={() => changeNumber(2)} tabnumber="3"/>
        <Display names={textOptions[textNumber]}/>
      </div>
    </div>
  );
}

export default App;
