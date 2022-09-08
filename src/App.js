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
const TaskInput = () => {
  const [submitted, setSubmitted] = useState(0)
  const handleSubmission = () => { 
    setSubmitted(submitted + 1) 
  }
  const handleRemoval = () => {
    setSubmitted(0)
  }
  return (
    <div>
      <div id="TaskTitle">
        <TitleInput />
      </div>
      <div id="TaskDescription">
        <DescriptionInput />
      </div>
      
      <div id="buttons">
        <button onClick={handleSubmission}>Submit</button>
        <button onClick={handleRemoval}>Clear Tasks</button>
        <p>Submitted Tasks: {submitted}</p>
      </div>
    </div>
    
  )
}


function App() {
  return (
  <TaskInput />
  )
}

export default App;
