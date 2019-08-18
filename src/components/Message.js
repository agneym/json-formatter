import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useTransition, animated, config } from "react-spring";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 5rem;
  overflow: hidden;
  width: 100%;
  transform: scaleY(0);
  transform-origin: bottom;
`;

const Message = ({ show, children }) => {
  const slideUpTransitions = useTransition(show, null, {
    enter: { transform: "scaleY(1)" },
    leave: { transform: "scale(0)" },
    from: { transform: "scaleY(0)" },
    config: config.gentle,
  });
  const AnimatedContainer = animated(Container);
  return slideUpTransitions.map(
    ({ item, key, props }) =>
      item && (
        <AnimatedContainer style={props} key={key}>
          {children}
        </AnimatedContainer>
      )
  );
};

Message.defaultProps = {
  show: false,
};

Message.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Message;
