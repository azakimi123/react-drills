// import React, {Component} from 'react';  // when using class component and extending
import React from 'react'; 
import './App.css';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <Login />
    </div>
  )
}

//class components use state, if you need to have state then use class
//this works also
// class App extends Component {
//   render() {

//     return (
//       <div className="App">
//         <Login />
//       </div>
//     )
//   }
// }
export default App;
