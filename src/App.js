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
        <div className="App-intro">
          <Toggle onToggle={(...args) => console.log('onToggle', ...args)}>
            <Toggle.On>The toggle is On</Toggle.On>
            <Toggle.Off>The toggle is Off</Toggle.Off>
            <div style={{ marginTop: '15px' }}>
              <Toggle.Button />
            </div>
          </Toggle>
        </div>
      </div>
    );
  }
}

export default App;
