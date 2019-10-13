import React, { Fragment } from "react";
import styled from "styled-components";

import Listing from "./Listing";

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
  const loadPlugin = () => {
    console.log("load plugin");
  };
  return (
    <Fragment>
      <Content>
        <Listing list={pluginsDir} onClick={loadPlugin} />
      </Content>
    </Fragment>
  );
}

export default Plugins;
