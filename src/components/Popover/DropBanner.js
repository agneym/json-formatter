import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PopoverContext } from './PopoverContext';

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;

  ${props => !props.open && `
    display: none;
  `}
`;

function DropBanner({ children }) {
  const { open } = useContext(PopoverContext);
  return (
    <Container open={open} aria-hidden={!open}>
      { children }
    </Container>
  );
}

DropBanner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DropBanner;

