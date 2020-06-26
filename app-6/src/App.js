import React, {Component} from 'react';
import ToDo from './Components/ToDo';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state ={
      list: [],
      input: ''
    }
  }


  handleInput = (val) => {
    this.setState({input: val})
  }

  handleButton = () => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }





  render() {
    let list = this.state.list.map((element, i) => {
      return <ToDo key={i} task={element}/>
    })
    return (
      <div className='App'>
        <h1>To Do List</h1>
        <input
        placeholder="enter new task"
        value={this.state.input}
        onChange={ e => this.handleInput(e.target.value)}/>
        <button onClick={this.handleButton}>Add</button>

        {list}

      </div>
    )
  }
}





export default App;


