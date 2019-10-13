import React, { Fragment, useState } from "react";
import styled from "styled-components";

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

function Plugins() {
  const [plugin, setPlugin] = useState(null);

  const loadPlugin = () => {
    console.log("load plugin");
  };
  return (
    <Fragment>
      <Content>
        {plugin ? (
          <ExternalUI />
        ) : (
          <Listing list={pluginsDir} onClick={loadPlugin} />
        )}
      </Content>
    </Fragment>
  );
}

export default Plugins;
