import React, { Fragment } from "react";
import styled from "styled-components";

import SingleItem from "./SingleItem";

const Content = styled.ul`
  margin: 0.8rem 0;
  height: calc(100% - 10rem);
  overflow-y: auto;
  list-style: none;
  width: 100%;
`;

const pluginsDir = [
  {
    name: "Plugin Name",
    description: "Whatever works",
  },
];

function Plugins() {
  return (
    <Fragment>
      <Content>
        {pluginsDir.map(pluginItem => (
          <SingleItem
            key={pluginItem.name}
            name={pluginItem.name}
            description={pluginItem.description}
          />
        ))}
      </Content>
    </Fragment>
  );
}

export default Plugins;
