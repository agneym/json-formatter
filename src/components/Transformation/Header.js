import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import PlayIcon from "../../icons/play.svg";

const Container = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

const Header = ({ onRun }) => {
  return (
    <Container>
      <h2
        css={`
          margin-right: 1rem;
        `}
      >
        Transformation
      </h2>
      <button
        onClick={onRun}
        css={`
          -webkit-appearance: none;
          background-color: transparent;
          border: none;
        `}
      >
        <PlayIcon
          css={`
            height: 3rem;
            width: 3rem;
          `}
        />
      </button>
    </Container>
  );
};

Header.propTypes = {
  onRun: PropTypes.func.isRequired,
};

export default Header;
