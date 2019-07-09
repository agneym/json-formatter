import React from 'react';
import PropTypes from 'prop-types';

function Action({ className, children }) {
  return (
    <div className={className}>
      { children }
    </div>
  );
}

Action.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Action;

