import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FormatIcon from "../../icons/format.svg";

const Button = styled.button`
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #ffffff;
  border: none;
  height: 3.5rem;
  width: 3.5rem;
  border-radius: 50%;
  cursor: pointer;
  color: ${props => props.theme.colors.secondary};

  &:focus {
    border: 0.1rem solid ${props => props.theme.colors.primary};
    outline: none;
  }

  svg {
    height: 100%;
    width: 100%;
  }
`;

function FormatBtn({ onClick }) {
  return (
    <Button onClick={onClick}>
      <FormatIcon />
    </Button>
  );
}

FormatBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FormatBtn;
