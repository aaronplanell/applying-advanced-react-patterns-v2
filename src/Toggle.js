import React from 'react';
import { Switch } from './Switch';

class Toggle extends React.Component {
  static defaultProps = { initialOn: false };
  initialState = { on: this.props.initialOn };
  state = this.initialState;

  toggle = () =>
    this.setState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  reset = () => {
    this.setState(this.initialState);
  };

  render() {
    const { on } = this.state;
    return (
      <div>
        <Switch on={on} onClick={this.toggle} />
        <br />
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Toggle;
