import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  box-shadow: none;
  background-color: #ffffff;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  margin: 0 0.6rem;

  svg {
    height: 100%;
    width: 100%;
  }
`;

function HeaderBtn({ title, children, onClick, ...props }) {
  return (
    <Button title={title ? title : undefined} onClick={onClick} {...props}>
      {children}
    </Button>
  );
}

HeaderBtn.defaultProps = {
  title: null,
  onClick: () => {},
};

HeaderBtn.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default HeaderBtn;
