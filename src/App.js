import { useState } from "react"

// Component that will act as title of page
const Heading = (props) => {
  return (<h1>props.pageName</h1>)
}

// title for a task
const TitleInput = () => {
  const [title, setTitle] = useState('')

  const handleInput = (e) => {
    setTitle(e.target.value)
  }

  return (
    <input 
      type="text"
      id="title"
      name="title"
      placeholder="Enter Task Title"
      onChange={handleInput}
      value={title}
    />
  )
}

// elaborate on whatever task user wants to add
const DescriptionInput = () => {
  const [desc, setDesc] = useState('')

  const handleInput = (e) => {
    setDesc(e.target.value)
  }

  return (
    <textarea 
      type="text"
      cols="50"
      rows="10"
      id="desc"
      name="desc"
      placeholder="Enter Task Description"
      onChange={handleInput}
      value={desc}
    />
  )
}



// interface where user can add their task
const TaskInput = (props) => {
  const [submitted, setSubmitted] = useState(0)
  const handleSubmission = () => { 
    setSubmitted(submitted + 1) 
  }
  return (
    <div>
      <div id="TaskTitle">
        <TitleInput />
      </div>
      <div id="TaskDescription">
        <DescriptionInput />
      </div>
      <button onClick={handleSubmission}>Submit</button>
      <p>Submitted Tasks: {submitted}</p>
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
