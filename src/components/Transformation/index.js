import React from "react";
import styled from "styled-components";
import CollapsibleTabs from "../CollapsibleTabs";

function Transformation() {
  const tabs = [
    { key: "transformation", header: <span>Transform</span>}
  ]
  return (
    <CollapsibleTabs
      tabs={tabs}
    />
  );
}

export default Transformation;
