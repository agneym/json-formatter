import React from "react";
import styled from "styled-components";

const Line = styled.hr`
  display: block;
  border: none;
  height: 0.1rem;
  border-bottom: 0.1rem solid ${props => props.theme.colors.grey};
`;

const Text = styled.p`
  margin: 0;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  padding: 0 0.5rem;
  color: ${props => props.theme.colors.grey};
`;

function Seperator() {
  return (
    <div
      css={`
        position: relative;
        margin: 3rem;
      `}
    >
      <Line />
      <Text>OR</Text>
    </div>
  );
}

export default Seperator;
