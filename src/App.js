import React, { Component } from 'react';
import logo from './logo.svg';
import List from "./List"
import Done from "./Done"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://png.icons8.com/nolan/1600/todo-list.png" className="Logo" alt="y33t" />
          <h1 className="App-title">Futuristic To-Do List</h1>
        </header>
        <List />
        <Done />
      </div>
    );
  }
}

export default App;
