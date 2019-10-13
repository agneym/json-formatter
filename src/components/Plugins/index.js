import React, { Fragment } from "react";
import styled from "styled-components";

import Header from "./Header";
import SingleItem from "./SingleItem";

const Content = styled.ul`
  margin: 0.8rem 0;
  height: calc(100% - 10rem);
  overflow-y: auto;
  list-style: none;
  width: 100%;
`;

function Plugins() {
  return (
    <Fragment>
      <Header title="Plugins" />
      <Content>
        <SingleItem />
        <SingleItem />
      </Content>
    </Fragment>
  );
}

export default Plugins;
