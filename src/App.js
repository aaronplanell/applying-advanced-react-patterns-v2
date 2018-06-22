import React, { Component } from 'react';
import './App.css';

import Toggle from './Toggle';
import { Switch } from './Switch';
import { withToggle } from './HOCs';

const SwitchWithToggle = withToggle(({ toggle: { on, toggle } }) => (
  <Switch on={on} onClick={toggle} />
));

const TextWithToggle = withToggle(
  ({ toggle: { on } }) => `The status is ${on}`
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Applying Advanced React Patters v2</h1>
        </header>
        <p className="App-intro">
          <Toggle onToggle={() => console.log('onToggle')}>
            <SwitchWithToggle />
            <br />
            <br />
            <TextWithToggle />
          </Toggle>
        </p>
      </div>
    );
  }
}

export default App;
