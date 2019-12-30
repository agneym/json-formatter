import React, { Fragment, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PluginContext from "./pluginContext";

import Listing from "./Listing";
import ExternalUI from "./ExternalUI";
import pluginsDir from "./pluginDir";

const Content = styled.ul`
  margin: 0.8rem 0;
  height: calc(100% - 11rem);
  overflow-y: auto;
  list-style: none;
  width: 100%;
`;

function Plugins(props) {
  const { onTransform } = props;

  const { selectedPlugin, setSelectedPlugin } = useContext(PluginContext);

  const loadPlugin = selectedPlugin => {
    setSelectedPlugin(selectedPlugin);
  };

  const handleTransform = transformedValue => {
    onTransform(transformedValue);
    setSelectedPlugin(null);
  };

  const goBack = () => {
    setSelectedPlugin(null);
  };

  return (
    <Fragment>
      {selectedPlugin ? (
        <Content as="section">
          <ExternalUI
            details={selectedPlugin}
            onTransform={handleTransform}
            goBack={goBack}
          />
        </Content>
      ) : (
        <Content>
          <Listing list={pluginsDir} onClick={loadPlugin} />
        </Content>
      )}
    </Fragment>
  );
}

Plugins.propTypes = {
  onTransform: PropTypes.func.isRequired,
};

export default Plugins;
