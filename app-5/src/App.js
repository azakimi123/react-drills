import React, {Component} from 'react';
import './App.css';
import Image from './Components/Image'





class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      image: 'https://picsum.photos/id/1025/367/267'
    }

  }
  
  
  
  
  
  render() {
  return (
    <div className="App">
      <Image picture={this.state.image}/>
    </div>
  );
  }
}

export default App;
