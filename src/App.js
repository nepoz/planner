import logo from './logo.svg';
import './App.css';

// Create Title component -- ALL COMPONENTS MUST BE CAPITALIZED
const Title = (props) => {
  return <h1>{props.text}</h1> 
}

// Create Description component -- ALL COMPONENTS MUST BE CAPITALIZED
const Description = (props) => {
  return <p>{props.text}</p>
}

// Create Task component -- made up of a title and a description
const Task = (props) => {
  return (
  <div id="TaskBox">
    <Title text={props.titleText} />
    <Description text={props.descriptionText} />
  </div>
  )
}

// create an element -- a single task. Remember empty JSX tags may be closed as in XML
const heading = "Planner Test"
const description = "This is a test component that uses small components to build a bigger component!"

function App() {
  return (
  <Task titleText={heading} descriptionText={description} />
  )
}

export default App;
