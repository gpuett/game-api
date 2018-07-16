import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Display />
      </div>
    );
  }
}

export default App;
