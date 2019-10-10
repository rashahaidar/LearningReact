import React from 'react';
import ReactDOM from 'react-dom';
const Header=(props)=>{
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Content=(props)=>{
    return(
        <div>
            {/* <p>{props.part1}, {props.exercises1} exercises</p>
            <p>{props.part2}, {props.exercises2} exercises</p>
            <p>{props.part3}, {props.exercises3} exercises</p> */}
            <p>{props.content}, {props.exerciseNB} exercises</p>
        </div>
    )
}
const Total=(props)=>{
    return(
        <div>
            <p>Total number of exercises={props.total}</p>
        </div>
    )
}
const App=()=>{
    
    const course = 'Half Stack application development'
    const part1 ={
        name:'Fundamentals of React',
        exercises:10
    } 
    const part2={
        name:'Using props to pass data',
        exercises:7
    }
 
    const part3 ={
        name:'State of a component',
        exercises:14
    } 
    return (
        <>
        <Header course={course}/>
        {/* <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/> */}
        <Content content={part1.name} exerciseNB={part1.exercises}/>
        <Content content={part2.name} exerciseNB={part2.exercises}/>
        <Content content={part3.name} exerciseNB={part3.exercises}/>
        <Total total={part1.exercises+part2.exercises+part3.exercises}/>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

