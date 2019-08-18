import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SideBtn from "./SideBtn";

const Aside = styled.aside`
  position: fixed;
  top: calc(${props => props.theme.layout.navHeight} + 4rem);
  right: 0;
`;

const HeaderContainer = styled.div`
  transform: translate(35%, 50%) rotate(270deg);
`;

const CollapsibleTabs = ({ tabs }) => {
  return (
    <Aside>
      <HeaderContainer>
      { tabs.map(({ header }, index) => (
        <SideBtn key={index}>
          {header}
        </SideBtn>
      ))}
      </HeaderContainer>
    </Aside>
  );
}

CollapsibleTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.oneOf([PropTypes.node, PropTypes.string]).isRequired,
      component: PropTypes.node,
    }),
  ),
}

export default CollapsibleTabs;