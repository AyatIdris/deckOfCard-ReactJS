import React, { Component } from 'react';
import Deck from '../DeckCard/Deck';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Deck />
      </div>
    );
  }
}

export default App;