import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Button = styled.button`
  border: none;
  box-shadow: none;
  background-color: #FFFFFF;
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;

  svg {
    height: 100%;
    width: 100%;
  }
`;

function HeaderBtn({ title, children }) {
  return (
    <Button title={title ? title : undefined}>
      {children}
    </Button>
  );
}

HeaderBtn.defaultProps = {
  title: null,
}

HeaderBtn.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default HeaderBtn;

