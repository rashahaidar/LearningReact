import React,{useState}from 'react';
import ReactDOM from 'react-dom';
const Button=({text,onClick})=><button onClick={onClick} >{text}</button>
const Total=({good,neutral,bad})=>good+neutral+bad

const Average=({good,neutral,bad})=>((good*1)+(neutral*0)+(bad*-1))/(good+bad+neutral)
const Positive=({good,total})=>(good/total)*100
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
        <Button onClick={setToGood} text='Good'/>
        <Button onClick={setToNeutral} text='Neutral'/>
        <Button onClick={setToBad} text='Bad'/>
        <br/>
        <h2>statistics</h2>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all <Total good={good} neutral={neutral} bad={bad}/></p>
        <p>average <Average good={good} neutral={neutral} bad={bad}/></p>
        <p>psitive <Positive good={good} total={good+bad+neutral}/>%</p>
    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));


