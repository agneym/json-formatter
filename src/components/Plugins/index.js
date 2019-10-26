import React, { Fragment, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Listing from "./Listing";
import ExternalUI from "./ExternalUI";

const Content = styled.ul`
  margin: 0.8rem 0;
  height: calc(100% - 11rem);
  overflow-y: auto;
  list-style: none;
  width: 100%;
`;

const pluginsDir = [
  {
    name: "Transform JSON",
    description: "Transform JSON strings using JavaScript.",
    url: "https://unpkg.com/@agney/jc-transform-json",
    tagName: "jc-transform-json",
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
      {plugin ? (
        <Content as="section">
          <ExternalUI details={plugin} onTransform={handleTransform} />
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
