import React from 'react';

class Toggle extends React.Component {
  static defaultProps = {
    initialOn: false,
    stateReducer: (state, changes) => changes,
  };
  initialState = { on: this.props.initialOn };
  state = this.initialState;
  static stateChangeTypes = {
    toggle: 'TOGGLE',
    reset: 'RESET',
    force: 'FORCED',
  };

  internalSetState(changes, callback) {
    this.setState(currentState => {
      // As setState, internalSetState can reveive a function or a state as a first argument
      const changesObject =
        typeof changes === 'function' ? changes(currentState) : changes;
      const { type, ...remainingChanges } =
        this.props.stateReducer(currentState, changesObject) || {};
      // Only returns reducerObject if has changes to avoid an unnecessary renders
      return Object.keys(remainingChanges).length > 0 ? remainingChanges : null;
    }, callback);
  }

  toggle = ({ type = Toggle.stateChangeTypes.toggle } = {}) =>
    this.internalSetState(
      ({ on }) => ({ type, on: !on }),
      () => {
        this.props.onToggle(this.state.on);
      }
    );

  reset = ({ type = Toggle.stateChangeTypes.toggle } = {}) => {
    this.internalSetState(
      () => {
        return { type, ...this.initialState };
      },
      () => {
        this.props.onReset(this.state.on);
      }
    );
  };

  getStateAndHelpers = () => {
    return {
      on: this.state.on,
      toggle: this.toggle,
      reset: this.reset,
    };
  };

  render() {
    return this.props.children(this.getStateAndHelpers());
  }
}

export default Toggle;
