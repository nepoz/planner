import { useState } from "react"

// Component that will act as title of page
const Heading = (props) => {
  return (<h1>props.pageName</h1>)
}

// title for a task
const TaskTitle = (props) => {
  return <h1>{props.text}</h1> 
}

// elaborate on whatever task user wants to add
const TaskDescription = (props) => {
  return <p>{props.text}</p>
}

// interface where user can add their task
const TaskInput = (props) => {
  return (
  <div id="TaskBox">
    <TaskTitle text={props.title} />
    <TaskDescription text={props.description} />
    <button>Submit Task</button> 
  </div>
  )
}

// create an element -- a single task. Remember empty JSX tags may be closed as in XML
const heading = "Planner Test"
const description = "This is a test component that uses small components to build a bigger component!"

function App() {
  return (
  <TaskInput title={heading} description={description} />
  )
}

export default App;
