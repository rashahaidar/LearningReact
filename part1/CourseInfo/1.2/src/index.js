import React from 'react';
import ReactDOM from 'react-dom';
const Part=(props)=>{
    return(
        <div>
            <p>{props.part.name}, {props.part.exercises} exercises</p>
        </div>
    )
}
const Content=(props)=>{
    return(
        <div>
            <Part part={props.parts[0]}/>
            <Part part={props.parts[1]}/>
            <Part part={props.parts[2]}/>
             {/* <Part part={props.content2} exercises={props.exerciseNB2}/>
            <Part part={props.content3} exercises={props.exerciseNB3}/> */}
        </div>
    )
}
const Header=(props)=>{
    return(
        <div>
            <h1>{props.course}</h1>
        </div>
    )
}
const Total=(props)=>{
    console.log(props.total[0].exercises)
    console.log(props.total[1].exercises)
    console.log(props.total[2].exercises)
    return(
        <div>

            <p>Total number of exercises={props.total[0].exercises+props.total[1].exercises+props.total[2].exercises}</p>
        </div>
    )
}
const App = () => {
  const parts=[
      {name:'Fundamentals of React', exercises:10},
      {name:'Using props to pass data', exercises:7},
      {name:'State of a component',exercises:14}
  ]
  const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

  
    return (
      <div>
        <Header course={course} />
         {/* <Content content1={part1} exerciseNB1={exercises1} content2={part2} exerciseNB2={exercises2} content3={part3} exerciseNB3={exercises3} /> */}
        {/* <Content content={part1} exerciseNB={exercises1}/>
        <Content content={part2} exerciseNB={exercises2}/>
        <Content content={part3} exerciseNB={exercises3}/> */}
        <Content parts={parts}/>
         <Total total={parts} /> 
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));


