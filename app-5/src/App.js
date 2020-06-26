import React, {Component} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className='App'>
        <body>
        <Header />
        <section>
          <Main/>

        </section>
        
        </body>
      </div>
    )
  }
}




export default App;
