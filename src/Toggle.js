import React from 'react';
import { Switch } from './Switch';

const ToggleContext = React.createContext({
  on: false,
  toggle: () => {},
});

class Toggle extends React.Component {
  state = { on: false };

  static On = props => (
    <ToggleContext.Consumer>
      {contextValue => (contextValue.on ? props.children : null)}
    </ToggleContext.Consumer>
  );

  static Off = props => (
    <ToggleContext.Consumer>
      {contextValue => (contextValue.on ? null : props.children)}
    </ToggleContext.Consumer>
  );

  static Button = props => (
    <ToggleContext.Consumer>
      {contextValue => (
        <Switch on={contextValue.on} onClick={contextValue.toggle} />
      )}
    </ToggleContext.Consumer>
  );

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  render() {
    return (
      <ToggleContext.Provider
        value={{
          on: this.state.on,
          toggle: this.toggle,
        }}
      >
        {this.props.children}
      </ToggleContext.Provider>
    );
  }
}

export default Toggle;
