import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Action from './Action';
import DropBanner from './DropBanner';

const Container = styled.div`
  position: relative;
`;

function Popover({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Popover.Action = Action;
Popover.DropBanner = DropBanner;

Popover.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Popover;

