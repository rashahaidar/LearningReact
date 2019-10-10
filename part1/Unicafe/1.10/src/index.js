import React,{useState} from 'react';
import ReactDOM from 'react-dom';
const Button=({text,onClick})=><button onClick={onClick}>{text}</button>
const Statistics=({text,value})=>{

    return(
<tr>
<td>{text}</td><td> {value}</td>
{text==='positive' ? <td>%</td> : <td></td>

}


</tr>
)
}
const Average=({good,bad,neutral})=>((good*1)+(neutral*0)+(bad*-1))/(good+bad+neutral)
const noStatistics=(good,bad,neutral)=>{
    if ((good===0) && (bad===0) && (neutral===0)){
        return true
    }
    return false
}
const App=()=>{
    const [good,setGood]=useState(0)
    const [neutral,setNeutral]=useState(0)
    const [bad,setBad]=useState(0)
    const setToNeutral=()=>setNeutral(neutral+1)
    const setToGood=()=>setGood(good+1)
    const setToBad=()=>setBad(bad+1)
    const flag=noStatistics(good,bad,neutral)
    return(
        <div>
            <h1>give feedback</h1>
            <Button text='Good' onClick={setToGood}/>
            <Button text='Neutral' onClick={setToNeutral}/>
            <Button text='Bad' onClick={setToBad}/>
            <h1>statistics</h1>
            
        {
            flag ? <p>No feedback given</p> :
            <div>
                <table>
                    <tbody>
                        <Statistics text='Good' value={good}/>
                         
                <Statistics text='Neutral' value={neutral}/>
                <Statistics text='Bad' value={bad}/>
        
                <Statistics text='all' value={good+neutral+bad}/>
                <Statistics text='average' value={<Average good={good} neutral={neutral} bad={bad}/>}/>
                
                <Statistics text='positive' value={(good/(good+bad+neutral))*100}/>
                
                </tbody>
                </table>
                </div>
                
        }
        </div>
    )

}

ReactDOM.render(<App />, document.getElementById('root'));

