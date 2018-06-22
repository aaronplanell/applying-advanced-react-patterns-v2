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
        <p className="App-intro">
          <Toggle onToggle={() => console.log('onToggle')}>
            <Toggle.Consumer>
              {({ on, toggle }) => <Switch on={on} onClick={toggle} />}
            </Toggle.Consumer>
            <br />
            <br />
            <Toggle.Consumer>
              {({ on }) => `The status is ${on}`}
            </Toggle.Consumer>
          </Toggle>
        </p>
      </div>
    );
  }
}

export default App;
