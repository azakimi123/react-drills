import React, {Component} from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='App'>
        <Image picture={'https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68'}/>
      </div>
    )
  }
}




export default App;
