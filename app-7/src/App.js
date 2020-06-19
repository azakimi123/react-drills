import React, {Component} from 'react';
import './App.css';
import NewTask from './Components/NewTask'
// import List from './Components/List';
// import Todo from './Components/Todo';




class App extends Component{




  render() {
    return (
      <div className='App'>
        <h1>To Do List</h1>
        <div className='App'>
          <NewTask />
        </div>
      </div>

    )
  }

}

export default App;
