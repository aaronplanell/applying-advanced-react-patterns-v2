import React, { Component } from 'react';
import './App.css';

import Toggle from './Toggle';

class App extends Component {
  initialState = { timesClicked: 0 };
  state = this.initialState;

  handleToggle = (...args) => {
    this.setState(({ timesClicked }) => {
      return { timesClicked: timesClicked + 1 };
    });
    console.log('onToggle', ...args);
  };

  handleReset = (...args) => {
    this.setState(this.initialState);
    console.log('onReset', ...args);
  };

  stateReducer = (state, changes) => {
    if (this.state.timesClicked >= 4) {
      return { ...changes, on: false };
    }
    return changes;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Applying Advanced React Patters v2</h1>
        </header>
        <div className="App-intro">
          <Toggle
            onToggle={this.handleToggle}
            onReset={this.handleReset}
            stateReducer={this.stateReducer}
          />
        </div>
      </div>
    );
  }
}

export default App;
