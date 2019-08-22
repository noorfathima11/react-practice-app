import { Component } from 'react'
import React from 'react'
import './App.css'
import Person from './Person/Person'

/*function App() {
  return (
    <div className="App">
     <h1>Hi! I am a React App.</h1>
    </div>
  )
}*/

class App extends Component {
  render(){
    return (
      <div className="App">
       <h1>Hi! I am a React App. </h1>
       <Person name="Debi" age="24" />
       <Person name="Akshay" age="24">Hobbies: Walking Simba </Person>
       <Person name="Nitin" age="26" />
      </div>
    )
  }
}

export default App;
