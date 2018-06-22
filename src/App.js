import React, { Component } from 'react';
import './App.css';

import Toggle from './Toggle';

class App extends Component {
  state = { on: false };

  onToggle = on => {
    this.setState({ on });
  };

  render() {
    const { on } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Applying Advanced React Patters v2</h1>
        </header>
        <p className="App-intro">
          <Toggle onToggle={this.onToggle} on={on} />
          <br />
          <Toggle onToggle={this.onToggle} on={on} />
        </p>
      </div>
    );
  }
}

export default App;
