import React from 'react';
import PropTypes from 'prop-types';

function Trigger({ activate, className, children }) {
  return (
    <div className={className} onClick={activate} role="button" tabIndex="0" onKeyDown={activate}>
      { children }
    </div>
  );
}

Trigger.defaultProps = {
  activate: () => {},
}

Trigger.propTypes = {
  activate: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Trigger;

