import React from 'react';
import PropTypes from 'prop-types';

function Trigger({ className, children }) {
  return (
    <div className={className}>
      { children }
    </div>
  );
}

Trigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Trigger;

