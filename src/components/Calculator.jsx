import React from 'react'
import { useState } from 'react';

function Calculator() { 
  const [display,setDisplay]=useState("")
  const [display2,setDisplay2]=useState("")
  const ops=["/",'*',".","+","-"]

const delhandler=()=>{
  setDisplay("")
  setDisplay2("")
}

const clickhandler=(e)=>{
  if(e=="=" && display!="" ){
    setDisplay(eval(display).toString())
  }
  if(e=="=" && display==""){
    alert("there is no items or last element is ops")
  }
  
  if(e=="=" && display=="" ||
          e=="0" && display=="" || ops.includes(e) && display=="" 
          ||ops.includes(e) && ops.includes(display.slice(-1)))
  {
      return ;
  }
  else{
    setDisplay(display+e)
    setDisplay2(e)
  }
 
 
    
  }
  return (
    <div className="App">
      <div class="calculator">
      <div class="display">{display}</div>
      <div class="display2">{display2}</div>
      <div class="buttons_div">
        <button onClick={delhandler} class="AC_button">AC</button>
        <button onClick={(e)=>clickhandler("/")}>/</button>
        <button onClick={(e)=>clickhandler("*")}>x</button>
        <button onClick={(e)=>clickhandler("7")}>7</button>
        <button onClick={(e)=>clickhandler("8")}>8</button>
        <button onClick={(e)=>clickhandler("9")}>9</button>
        <button onClick={(e)=>clickhandler("-")}>-</button>
        <button onClick={(e)=>clickhandler("4")}>4</button>
        <button onClick={(e)=>clickhandler("5")}>5</button>
        <button onClick={(e)=>clickhandler("6")}>6</button>
        <button onClick={(e)=>clickhandler("+")}>+</button>
        <button onClick={(e)=>clickhandler("1")}>1</button>
        <button onClick={(e)=>clickhandler("2")}>2</button>
        <button onClick={(e)=>clickhandler("3")}>3</button>
        <button onClick={(e)=>clickhandler("=")} class="equal_button">=</button>
        <button onClick={(e)=>clickhandler("0")} class="zero_button">0</button>
        <button onClick={(e)=>clickhandler(".")}>.</button>
      </div>
    </div>
    </div>
  );
}

export default Calculator;