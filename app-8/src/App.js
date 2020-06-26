import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
constructor() {
  super();

  this.state = {
    luke: ''
  };

}

componentDidMount() {
  axios.get("https://community-open-weather-map.p.rapidapi.com/weather?q=London,uk")
  .then( results => {
    this.setState({luke: results.data});
  });
}




  render() {
    // console.log(this.state.luke)
    return (
      <div className="App">
    
      </div>
    )
  }
}
export default App;
