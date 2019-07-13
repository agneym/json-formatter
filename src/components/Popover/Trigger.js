import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { PopoverContext } from './PopoverContext';

function Trigger({ className, children }) {
  const { setOpen } = useContext(PopoverContext);
  const toggle = () => {
    setOpen(open => !open);
  }
  return (
    <div className={className} onClick={toggle} role="button" tabIndex="0" onKeyDown={toggle}>
      { children }
    </div>
  );
}

Trigger.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Trigger;

