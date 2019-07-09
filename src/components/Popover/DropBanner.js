import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
`;

function DropBanner({ children }) {
  return (
    <Container>
      { children }
    </Container>
  );
}

DropBanner.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DropBanner;

