import React from 'react';

const ToggleContext = React.createContext({
  on: false,
  toggle: () => {},
});

class Toggle extends React.Component {
  static Consumer = ToggleContext.Consumer;
  state = { on: false };
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
        {...this.props}
      />
    );
  }
}

export default Toggle;
