import React, {Component} from 'react';
import './App.css';
import ToDo from './Components/ToDo'






class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      toDoList: [],
      userInput: ''
    };
    // binds the method addTask to 'this'
    this.addTask = this.addTask.bind(this);
  }

  //handles changes made from the user input
  handleChange(val) {
    // console.log(val)
    this.setState({ userInput: val });
  }

  addTask() {
    this.setState({
      // destructuring used to keep the previous items from the list and add the new ones to the array
      toDoList: [...this.state.toDoList, this.state.userInput],
      //sets the input field back to placeholder
      userInput: ''
    });
  }



  render() {
    
    //creates the variable list so we can use it to display the updated list from the user
    let list = this.state.toDoList.map( (element) => {
      //setting the task as the key for the props of element to pass to ToDo.js
      return <ToDo task={element}/>;
      
    })


    // { console.log(list) }
    return(
      <div className="App">
        <h1>To Do List</h1>
        <div>
          <input 
            onChange={(e) => this.handleChange(e.target.value)}
            value={this.state.userInput}
            placeholder='add to list'
          />
          <button onClick={this.addTask}>Add</button>
        </div>
          {/* displays the list variable that we created in the render section */}
          {list}
      </div>

    )
  }
}

export default App;


