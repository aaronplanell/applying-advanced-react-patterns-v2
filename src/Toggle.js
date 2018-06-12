import React from 'react';
import { Switch } from './Switch';

class Toggle extends React.Component {
  static defaultProps = {
    initialOn: false,
    stateReducer: (state, changes) => changes,
  };
  initialState = { on: this.props.initialOn };
  state = this.initialState;

  internalSetState(changes, callback) {
    this.setState(currentState => {
      // As setState, internalSetState can reveive a function or a state as a first argument
      const changesObject =
        typeof changes === 'function' ? changes(currentState) : changes;
      const reducerObject =
        this.props.stateReducer(currentState, changesObject) || {};
      // Only returns reducerObject if has changes to avoid an unecessary renders
      return Object.keys(reducerObject).length > 0 ? reducerObject : null;
    }, callback);
  }

  toggle = () =>
    this.internalSetState(
      ({ on }) => ({ on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  reset = () => {
    this.internalSetState(
      () => this.initialState,
      () => {
        this.props.onReset(this.state.on);
      }
    );
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
