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

  constructor(props){
    super(props)
    this.state = {
    persons: [
      {"name" : "Debi", "age" : 29},
      {"name" : "Akshay", "age" : 25},
      {"name" : "Nitin", "age" : 25}
    ]
  }
  this.switchNameHandler= this.switchNameHandler.bind(this)
}

  switchNameHandler (newName) {
   // console.log('Was Clicked')
   //Do not do this ! this.state.persons[0].name = 'Debi Dhar'
   this.setState({
    persons: [
      {"name" : newName, "age" : 24},
      {"name" : "Akshay", "age" : 200},
      {"name" : "Nitin", "age" : 250}
    ]
   })
  }

  render(){
    return (
      <div onClick={function(){
        console.log(this)
      }} className="App">
       <h1>Hi! I am a React App. </h1>
       <button onClick={() => this.switchNameHandler("Debi Dhar")}>Switch Name</button>
       <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler} />
       <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "DDhar!")}> Hobbies: Walking Simba </Person>
       <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;
