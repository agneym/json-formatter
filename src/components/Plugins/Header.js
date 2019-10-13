import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CloseIcon from "../../icons/close.svg";
import NakedButton from "../../utils/NakedButton";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;

const Heading = styled.h2`
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

function Header({ title }) {
  return (
    <Container>
      <Heading>{title}</Heading>
      <NakedButton title="Close">
        <CloseIcon
          css={`
            height: 2rem;
          `}
        />
      </NakedButton>
    </Container>
  );
}

Header.defaultProps = {
  title: "Plugin",
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
