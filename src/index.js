import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Person(){
  return (
    <div className="person">
       <h1>Max</h1>
       <p>Your Age: 26</p>
    </div>
  )
}

ReactDOM.render(<Person/>, document.querySelector('#p1'))
