import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  const { onTransform, selectedPlugin } = props;

  const [plugin, setPlugin] = useState(selectedPlugin);

  const loadPlugin = selectedPlugin => {
    setPlugin(selectedPlugin);
  };

  const handleTransform = transformedValue => {
    onTransform(transformedValue);
    setPlugin(null);
  };

  const goBack = () => {
    setPlugin(null);
  };

  return (
    <Fragment>
      {plugin ? (
        <Content as="section">
          <ExternalUI
            details={plugin}
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
  selectedPlugin: PropTypes.object,
  handlePinChange: PropTypes.func.isRequired,
  pinnedPlugins: PropTypes.array.isRequired,
};

export default Plugins;
