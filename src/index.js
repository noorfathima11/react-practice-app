import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
//import serviceWorker from './serviceWorker'

/*
function Person(props){
  return (
    <div className="person">
       <h1>{props.name}</h1>
       <p>Your Age: {props.age}</p>
    </div>
  )
}

let app = (
  <div>
    <Person name="Max" age="28"/>
    <Person name="Noor" age="26"/>
  </div>
  )

ReactDOM.render(app, document.querySelector('#app'))
*/

ReactDOM.render(<App />, document.getElementById('app'))

//serviceWorker()
