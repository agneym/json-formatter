import React from "react";
import PropTypes from "prop-types";
import { animated, useTransition } from "react-spring";
import styled from "styled-components";

const Container = styled.div`
  width: 25vw;
  height: 100%;
`;

const Content = ({ show, children }) => {
  return show ? <Container>{children}</Container> : null;
  // const slideLeftTransitions = useTransition(show, null, {
  //   enter: { transform: "scaleX(1)" },
  //   leave: { transform: "scaleX(0)" },
  //   from: { transform: "scaleX(0)" },
  // });
  // const AnimatedContainer = animated(Container);
  // return slideLeftTransitions.map(
  //   ({ item, key, props }) =>
  //     item && (
  //       <AnimatedContainer style={props} key={key}>
  //         {children}
  //       </AnimatedContainer>
  //     )
  // );
}

Content.defaultProps = {
  show: false,
}

Content.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node,
}

export default Content;