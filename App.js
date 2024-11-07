import { useState } from "react";

const messages = [
  "Name S-j-d using React for App  ⚛️",
  " this is Simple App  💼",
  "You will see beautiful designs and applications on this account, so you should follow this account 🤑",
];


export default function App() {
  const[step,setStep]=useState(1)
  function handelnext(){
    
    if(step < 3)
    
    setStep(step +1);
  }
  
  function handelPrevious(){
    if(step > 1)
    
    
    
    setStep(step - 1);
  }
  return (
    <div className="steps">
     <div className="numbers">
<div className={`{ ${step === 1  ? "active" :""}`}>1</div>
<div className={`{ ${step  === 2  ? "active" :""}`} >2</div> 
<div className={`{ ${step  === 3  ? "active" :""}`} >3</div>

     </div>
    <em className="message">Step {step}:{messages[step -1]}   </em>
    <div className="buttons">
    <button style={{background:"#7950f2" , color:"efff"}}  onClick={handelPrevious} >Previous</button>
    <button style={{background:"#7950f2" , color:"efff"}} onClick={handelnext}   >next</button>
    

    </div>
    
    </div>
  );
}


