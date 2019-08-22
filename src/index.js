import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Person(props){
  return (
    <div className="person">
       <h1>{props.name}</h1>
       <p>Your Age: {props.age}</p>
    </div>
  )
}

ReactDOM.render(<Person name="Max" age="28"/>, document.querySelector('#p1'))

ReactDOM.render(<Person name="Noor" age="26"/>, document.querySelector('#p2'))
