import React from 'react';
import { Switch } from './Switch';

class Toggle extends React.Component {
  state = { on: false };

  static On = props => (props.on ? props.children : null);
  static Off = props => (props.on ? null : props.children);
  static Button = props => <Switch on={props.on} onClick={props.toggle} />;

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  render() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      });
    });
  }
}

export default Toggle;
