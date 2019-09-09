import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  text-align: center;
`;

const MobileMessage = () => {
  return (
    <Container>
      <h1
        css={`
          font-size: 1.8rem;
        `}
      >
        We do not support mobile devices currently.
      </h1>
      <p>
        <span role="img" aria-label="Sad face">
          ☹️
        </span>
      </p>
    </Container>
  );
};

export default MobileMessage;
