import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useClickAway, useKey } from 'react-use';

import { PopoverContext } from './PopoverContext';

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 1;

  ${props => !props.open && `
    display: none;
  `}
`;

function DropBanner({ children }) {
  const container = useRef(null);
  const { open, setOpen } = useContext(PopoverContext);
  const closeBanner = () => setOpen(false);
  useClickAway(container, closeBanner);
  useKey("Escape", closeBanner);
  return (
    <Container open={open} aria-hidden={!open} ref={container}>
      { children }
    </Container>
  );
}

DropBanner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DropBanner;

