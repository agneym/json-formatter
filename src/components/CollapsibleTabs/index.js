import React, { useState } from "react";
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
  const [selected, setSelected] = useState(null);
  return (
    <Aside>
      <HeaderContainer>
      { tabs.map(({ key, header }) => (
        <SideBtn key={key} onClick={() => setSelected(key)}>
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
      key: PropTypes.string.isRequired,
      header: PropTypes.oneOf([PropTypes.node, PropTypes.string]).isRequired,
      component: PropTypes.node,
    }),
  ),
}

export default CollapsibleTabs;