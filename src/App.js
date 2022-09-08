import { useState } from "react"


const App = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [tasks, setTasks] = useState([])

  return (
    <div id="page">
      <Heading pageName="Planner" />  
      <TaskInput 
      title={title} setTitle={setTitle} 
      desc={desc} setDesc={setDesc} 
      tasks={tasks} setTasks={setTasks}
      />
      <TaskList tasks={tasks}/>
    </div>
  )
}

// Component that will act as title of page
const Heading = (props) => {
  return (<h1>{props.pageName}</h1>)
}

const TaskList = ({ tasks }) => {
  return (
    tasks.map(task => <TaskListItem task={task} />)
  )
}

const TaskListItem = ({ task }) => {
  return (
    <div id="TaskListItem">
      <h3>{task.title}</h3>
      <p>Task Description: {task.desc}</p>
      <button>Remove Task</button>
    </div>
  )
}

// interface where user can add their task
const TaskInput = (props) => {
  const [submitted, setSubmitted] = useState(0)
  
  const handleSubmission = () => {
    if (props.title.length !== 0) {
      const newTask = {
        "title": props.title,
        "desc": props.desc,
      } 
      const newTasks = [...props.tasks, newTask]
      props.setTasks(newTasks)
      setSubmitted(submitted + 1) 
    } 
  }
  
  const handleClear = () => {
    setSubmitted(0)
  }
  return (
    <div>
      <div id="TaskTitle">
        <TitleInput title={props.title} setTitle={props.setTitle}/>
      </div>
      <div id="TaskDescription">
        <DescriptionInput desc={props.desc} setDesc={props.setDesc}/>
      </div>
      
      <div id="buttons">
        <button onClick={handleSubmission}>Submit</button>
        <button onClick={handleClear}>Clear Tasks</button>
        <p>Submitted Tasks: {submitted}</p>
      </div>
    </div>
    
  )
}

// title for a task
const TitleInput = ({ title, setTitle }) => {

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
const DescriptionInput = ({ desc, setDesc }) => {

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


export default App;
