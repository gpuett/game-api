import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import GameList from './components/GameList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Display />
        <GameList />
      </div>
    );
  }
}

export default App;
