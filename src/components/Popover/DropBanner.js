import React, { useContext, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PopoverContext } from './PopoverContext';
import useKey from '../../utils/hooks/use-key';
import useClickOutside from '../../utils/hooks/use-click-outside';

const Container = styled.div`
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  z-index: 1;

  ${props => !props.open && `
    display: none;
  `}
`;

function DropBanner({ children }) {
  const containerRef = useRef(null);
  const { open, setOpen } = useContext(PopoverContext);

  const closeBanner = useCallback(() => setOpen(false), [setOpen]);
  useKey("Escape", closeBanner);
  useClickOutside(containerRef, closeBanner);
  
  return (
    <Container open={open} aria-hidden={!open} ref={containerRef}>
      { children }
    </Container>
  );
}

DropBanner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DropBanner;

