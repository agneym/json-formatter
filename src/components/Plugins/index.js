import React, { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Listing from "./Listing";
import ExternalUI from "./ExternalUI";
import pluginsDir from "./pluginDir";

export const pinActionTypes = {
  ADD: "ADD",
  REMOVE: "REMOVE",
};

const Content = styled.ul`
  margin: 0.8rem 0;
  height: calc(100% - 11rem);
  overflow-y: auto;
  list-style: none;
  width: 100%;
`;

function Plugins({ onTransform, selectedPlugin }) {
  const [plugin, setPlugin] = useState(selectedPlugin);
  const [pinnedPligins, setPinnedPligins] = useState(
    JSON.parse(localStorage.getItem("pinnedPligins") || "[]")
  );

  const loadPlugin = selectedPlugin => {
    setPlugin(selectedPlugin);
  };

  const handleTransform = transformedValue => {
    onTransform(transformedValue);
    setPlugin(null);
  };

  const handlePinChange = (selectedPlugin, pinActionType) => {
    let newPinnedPlugins = [];
    if (pinActionType === pinActionTypes.ADD) {
      newPinnedPlugins = [...pinnedPligins, selectedPlugin.tagName];
    } else if (pinActionType === pinActionTypes.REMOVE) {
      newPinnedPlugins = pinnedPligins.filter(
        pinnedPligin => pinnedPligin != selectedPlugin.tagName
      );
    }
    localStorage.setItem("pinnedPligins", JSON.stringify(newPinnedPlugins));
    setPinnedPligins(newPinnedPlugins);
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
          <Listing
            list={pluginsDir}
            onClick={loadPlugin}
            handlePinChange={handlePinChange}
            pinnedPligins={pinnedPligins}
          />
        </Content>
      )}
    </Fragment>
  );
}

Plugins.propTypes = {
  onTransform: PropTypes.func.isRequired,
  selectedPlugin: PropTypes.object,
};

export default Plugins;
