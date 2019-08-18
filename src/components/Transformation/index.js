import React from "react";
import styled from "styled-components";
import CollapsibleTabs from "../CollapsibleTabs";

function Transformation() {
  const tabs = [
    { header: <span>Transformation</span>}
  ]
  return (
    <CollapsibleTabs
      tabs={tabs}
    />
  );
}

export default Transformation;
