import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  top: calc(${props => props.theme.layout.navHeight} + 4rem);
  right: 0;
`;

const CollapsibleTabs = () => {
  return (
    <Aside>
      <p>Tabs</p>
    </Aside>
  );
}

export default CollapsibleTabs;