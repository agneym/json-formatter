import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SideBtn from "./SideBtn";
import Content from "./Content";
import useClickOutside from "../../utils/hooks/use-click-outside";

const Aside = styled.aside`
  position: fixed;
  top: calc(${props => props.theme.layout.navHeight});
  right: 0;
  height: 100%;
  box-shadow: -0.2rem 0 0.6rem -0.5rem #333;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 5rem;
  left: -8rem;
  transform: rotate(270deg);
`;

const CollapsibleTabs = ({ tabs, children }) => {
  const sideContainer = useRef(null);
  const [selected, setSelected] = useState(null);
  useClickOutside(sideContainer, () => {
    setSelected(null);
  });
  return (
    <Aside ref={sideContainer}>
      <HeaderContainer>
        {tabs.map(({ key, header, component }) => (
          <SideBtn
            active={key === selected}
            key={key}
            onClick={() => setSelected(component)}
          >
            {header}
          </SideBtn>
        ))}
      </HeaderContainer>
      <Content show={!!selected}>{children(selected)}</Content>
    </Aside>
  );
};

CollapsibleTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      header: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
        .isRequired,
    })
  ).isRequired,
  children: PropTypes.func.isRequired,
};

export default CollapsibleTabs;
