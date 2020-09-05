import React from 'react';
import logo from './logo.svg';
import './App.css';
import { C1, C2, C3, C4, C5 } from './components/comp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <C1 timeRange={'10'} />
        </div>
        <div>
          <C2 timeRange={'10'} />
        </div>
        <div>
          <C3 timeRange={'10'} />
        </div>
        <div>
          <C4 timeRange={'10'} />
        </div>
        <div>
          <C5 timeRange={'10'} />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
