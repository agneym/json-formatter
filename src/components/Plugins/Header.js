import React from "react";
import styled from "styled-components";

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
`;

function Header({ title }) {
  return (
    <Container>
      <h2>{title}</h2>
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

export default Header;
