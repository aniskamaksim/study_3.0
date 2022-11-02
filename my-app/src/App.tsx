import React from 'react';
//import logo from './logo.svg';
import './App.css';

//import {start} from "repl";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            Hello there
            <AppStar />
        </div>
    );
}

function AppStar() {
    console.log("AppStar rendering");
    return <>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
    </>
    }

function Star() {
    console.log("Star rendering")
    return (
        <div>Star</div>
    )
}

/* function Rating() {
  return (
      <div>
        <ul>
          <li>star</li>
          <li>star</li>
          <li>star</li>
          <li>star</li>
          <li>star</li>
        </ul>
      </div>
  )
}
function Accordion() {
   return (<div>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
        </ul>
    </div>
   )
}
*/
export default App;
