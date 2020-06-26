import React, {Component} from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
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
        <Footer/>
        </body>
      </div>
    )
  }
}




export default App;
