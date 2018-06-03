import React, { Component } from 'react';
import './App.css';

import Toggle from './Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Applying Advanced React Patters v2</h1>
        </header>
        <p className="App-intro">
          <Toggle onToggle={() => console.log('onToggle')}/>
        </p>
      </div>
    );
  }
}

export default App;
