import React, { Component } from 'react';
import './App.css';

import Toggle from './Toggle';
import { Switch } from './Switch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Applying Advanced React Patters v2</h1>
        </header>
        <div className="App-intro">
          <Toggle onToggle={(...args) => console.log('onToggle', ...args)}>
            {props => {
              const { on, toggle } = props;
              const status = on ? 'On' : 'Off';
              return (
                <div>
                  <p>The status is {status}</p>
                  <Switch on={on} onClick={toggle} />
                  <div style={{ marginTop: '15px' }}>
                    <button onClick={toggle}>{status}</button>
                  </div>
                </div>
              );
            }}
          </Toggle>
        </div>
      </div>
    );
  }
}

export default App;
