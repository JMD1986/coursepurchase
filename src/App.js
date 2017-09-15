import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      { name: "Complete iOS10 dev course", price: 199 },
      { name: "Complete Rails 5 course", price: 199 },
      { name: "Complete React course", price: 199 },
      { name: "Complete Phoenix", price: 199 }
    ];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Course Purchases Page</h2>
        </div>
        <Coursesales items={courses}/>
      </div>
    );
  }
}

export default App;
