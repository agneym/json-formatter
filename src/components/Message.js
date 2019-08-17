import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 5rem;
  border: 1px solid red;
  overflow: hidden;
  width: 100%;
  transform: scaleY(0);
  transform-origin: bottom;
`;

const Message = () => {
  const slideUp = useSpring({ transform: "scaleY(1)", from: { transform: "scaleY(0)" }});
  const AnimatedContainer = animated(Container);
  return (
    <AnimatedContainer style={slideUp}>
      <p>Message</p>
    </AnimatedContainer>
  )
}

export default Message;