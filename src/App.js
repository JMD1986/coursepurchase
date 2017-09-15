import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './coursesales';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchases Page</h2>
        </div>
        <Coursesales />
      </div>
    );
  }
}

export default App;
