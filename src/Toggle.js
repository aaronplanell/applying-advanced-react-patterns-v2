import React from 'react';

class Toggle extends React.Component {
  state = { on: false };

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  getTogglerProps = ({ onClick, ...props }) => {
    return {
      onClick: () => {
        if (onClick) onClick();
        this.toggle();
      },
      ...props,
    };
  };

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggle: this.toggle,
      getTogglerProps: this.getTogglerProps,
    };
  };

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

export default Toggle;
