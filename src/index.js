import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const title = "Planner"
const not_title = "WRONG HEADING WRONG HEADING"

root.render(title)


// Swap between title we want and title we DON'T want based on value of flag
let flag = true
const swap = () => {
  const element = <h1> Title: {flag ? title : not_title} </h1>
  flag = !flag
  root.render(element)
}

// Calls swap to run ever 1000ms = 1 sec
setInterval(swap, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
