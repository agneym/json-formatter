import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PopoverCtxProvider from "./PopoverContext";
import Trigger from './Trigger';
import DropBanner from './DropBanner';

const Container = styled.div`
  position: relative;
`;

function Popover({ children }) {
  return (
    <PopoverCtxProvider>
      <Container>
        {children}
      </Container>
    </PopoverCtxProvider>
  );
}

Popover.Trigger = Trigger;
Popover.DropBanner = DropBanner;

Popover.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Popover;

