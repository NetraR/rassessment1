// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react';
import ClassComponent from './Component/ClassComponent';
import './App.css';
import FuncComponent from './Component/FuncComponent';

class App extends Component {
  state = {
    isClass: false,
    isFunctional: false,
  };
  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <h1>Styling using Functional and Class Components</h1>
        </div>
        <div className='button'>
          <button
            onClick={() =>
              this.setState({ isFunctional: !this.state.isFunctional })
            }
          >
            To see styling in Functional Component
          </button>
          <button
            onClick={() => this.setState({ isClass: !this.state.isClass })}
          >
            To see styling in Class Component
          </button>
        </div>
        <div className='container'>
          {this.state.isFunctional ? <FuncComponent /> : null}
          {this.state.isClass ? <ClassComponent /> : null}
        </div>
      </div>
    );
  }
}

export default App;
