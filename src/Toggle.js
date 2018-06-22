import React from 'react';
import { Switch } from './Switch';

class Toggle extends React.Component {
  state = { on: false };

  isControlled = prop => {
    return this.props[prop] !== undefined;
  };

  getState = () => {
    return {
      on: this.isControlled('on') ? this.props.on : this.state.on,
    };
  };

  toggle = () => {
    if (this.isControlled('on')) {
      this.props.onToggle(!this.getState().on);
    } else {
      this.setState(
        ({ on }) => ({ on: !on }),
        () => {
          this.props.onToggle(this.getState().on);
        }
      );
    }
  };

  render() {
    const { on } = this.getState();
    return <Switch on={on} onClick={this.toggle} />;
  }
}

export default Toggle;
