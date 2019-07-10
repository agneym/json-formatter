import React, { useContext, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PopoverContext } from './PopoverContext';
import useKey from '../../utils/hooks/use-key';

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
  const closeBanner = useCallback(() => setOpen(false), [setOpen]);
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

