import React from "react";
import PropTypes from "prop-types";
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

const Message = ({ show }) => {
  const slideUp = useSpring({ transform: "scaleY(1)", from: { transform: "scaleY(0)" }});
  const AnimatedContainer = animated(Container);
  if(!show) {
    return null;
  }
  return (
    <AnimatedContainer style={slideUp}>
      <p>Message</p>
    </AnimatedContainer>
  );
}

Message.defaultProps = {
  show: false,
}

Message.propTypes = {
  show: PropTypes.bool,
}

export default Message;