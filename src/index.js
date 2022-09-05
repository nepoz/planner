import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const title = "Planner"
const not_title = "WRONG HEADING WRONG HEADING"

root.render(title)

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
const element = <Task titleText={heading} descriptionText={description} />

// render the test element
root.render(element)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
