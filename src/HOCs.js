import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import Toggle from './Toggle';

export const withToggle = Component => {
  let Wrapper = (props, ref) => {
    return (
      <Toggle.Consumer>
        {toggle => <Component {...props} toggle={toggle} ref={ref} />}
      </Toggle.Consumer>
    );
  };

  Wrapper.displayName = `withToggle(${Component.displayName ||
    Component.name})`;

  return hoistNonReactStatics(React.forwardRef(Wrapper), Component);
};
