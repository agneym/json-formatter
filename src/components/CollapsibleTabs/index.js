import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Aside = styled.aside`
  position: fixed;
  top: calc(${props => props.theme.layout.navHeight} + 4rem);
  right: 0;
`;

const CollapsibleTabs = ({ tabs }) => {
  return (
    <Aside>
      { tabs.map(({ header }, index) => (
        <button key={index}>
          {header}
        </button>
      ))}
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