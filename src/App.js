import React, { Component } from 'react';
import './App.css';

import Toggle from './Toggle';
import { Switch } from './Switch';

const MAX_TIMES_CLICKED = 4;

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
    if (changes.type === 'FORCED') {
      return changes;
    }
    if (this.state.timesClicked >= MAX_TIMES_CLICKED) {
      return { ...changes, on: false };
    }
    return changes;
  };

  renderForceToggleButton = toggle => {
    return this.state.timesClicked >= MAX_TIMES_CLICKED ? (
      <button onClick={() => toggle({ type: 'FORCED' })}>Force Toggle</button>
    ) : null;
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
          >
            {({ on, toggle, reset }) => {
              return (
                <div>
                  <Switch on={on} onClick={toggle} />
                  <br />
                  <button onClick={reset}>Reset</button>
                  <br />
                  {this.renderForceToggleButton(toggle)}
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
