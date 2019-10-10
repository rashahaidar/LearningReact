import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Button=({text,onClick})=><button onClick={onClick}>{text}</button>
const Average=({good,neutral,bad})=>((good*1)+(neutral*0)+(bad*-1))/(good+bad+neutral)
const Positive=({good,total})=>(good/total)*100
const Statistics=({good,bad,neutral})=>{
    //console.log(good)
    //console.log({good})
    if ((good===0) && (bad===0) && (neutral===0)){
        
        return(
            <div>
         <p>No Feedback given</p>
        </div>
        )
    }
    else{
        return(
        <div>
        
        <h1>Statistics</h1>
        <p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p> all {good+bad+neutral}</p>
        <p>average <Average good={good} neutral={neutral} bad={bad}/></p>
        <p>positive <Positive good={good} total={good+bad+neutral}/>%</p>
        </div>
        )
    }
}

const App=()=>{
const [good,setGood]=useState(0)
const setToGood=()=>setGood(good+1)
const [neutral,setNeutral]=useState(0)
const setToNeutral=()=>setNeutral(neutral+1)
const [bad,setBad]=useState(0)
const setToBad=()=>setBad(bad+1)
return(
    <div>
        <h1>give feedback</h1>
    <Button text='Good' onClick={setToGood}/>
    <Button text='Neutral' onClick={setToNeutral}/>
    <Button text='Bad' onClick={setToBad}/>
  
<Statistics good={good} neutral={neutral} bad={bad}/>
</div>
)
    

}

ReactDOM.render(<App />, document.getElementById('root'));


