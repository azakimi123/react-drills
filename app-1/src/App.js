import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      userInput: ''
    }
  }

  handleInput = (val) => {
    this.setState({userInput: val});
  }



  render() {
  return (
    <div className="App">
      <input
      placeholder='type in the box'
      value={this.state.userInput}
      onChange={e => this.handleInput(e.target.value)}/>

      <p>{this.state.userInput}</p>

    </div>
  )
  }
}

export default App;
