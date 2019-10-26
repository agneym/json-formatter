import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import SideBtn from "./SideBtn";
import ErrorBoundary from "../ErrorBoundary";
import SelectedComp from "./SelectedComp";
import { TabContextProvider } from "./TabContext";

const Aside = styled.aside`
  position: fixed;
  top: calc(${props => props.theme.layout.navHeight});
  right: 0;
  height: 100%;
  box-shadow: -0.2rem 0 0.6rem -0.5rem #333;
`;

const HeaderContainer = styled.div`
  position: absolute;
  top: 11rem;
  left: -4rem;
  display: flex;
  flex-direction: row-reverse;
`;

const CollapsibleTabs = ({ tabs, children }) => {
  const [selected, setSelected] = useState(null);

  const close = () => {
    setSelected(null);
  };

  return (
    <ErrorBoundary>
      <TabContextProvider>
        <Aside>
          <HeaderContainer>
            {tabs.map(tabConfig => (
              <SideBtn
                active={tabConfig.key === selected}
                key={tabConfig.key}
                onClick={() => setSelected(tabConfig)}
              >
                <span>{tabConfig.title}</span>
              </SideBtn>
            ))}
          </HeaderContainer>
          {selected && (
            <SelectedComp
              component={children(selected.component)}
              selected={selected}
              close={close}
            />
          )}
        </Aside>
      </TabContextProvider>
    </ErrorBoundary>
  );
};

CollapsibleTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    })
  ).isRequired,
  children: PropTypes.func.isRequired,
};

export default CollapsibleTabs;
