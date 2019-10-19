import React, { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Listing from "./Listing";
import ExternalUI from "./ExternalUI";

const Content = styled.ul`
  margin: 0.8rem 0;
  height: calc(100% - 10rem);
  overflow-y: auto;
  list-style: none;
  width: 100%;
`;

const pluginsDir = [
  {
    name: "Test Plugin",
    description: "Whatever works",
    url: "https://unpkg.com/@agney/og-json-utils",
    tagName: "og-json-utils",
  },
];

function Plugins({ onTransform }) {
  const [plugin, setPlugin] = useState(null);

  const loadPlugin = selectedPlugin => {
    setPlugin(selectedPlugin);
  };

  const handleTransform = transformedValue => {
    onTransform(transformedValue);
    setPlugin(null);
  };
  return (
    <Fragment>
      <Content>
        {plugin ? (
          <ExternalUI details={plugin} onTransform={handleTransform} />
        ) : (
          <Listing list={pluginsDir} onClick={loadPlugin} />
        )}
      </Content>
    </Fragment>
  );
}

Plugins.propTypes = {
  onTransform: PropTypes.func.isRequired,
};

export default Plugins;
