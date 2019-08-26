import React from "react";

import CollapsibleTabs from "../CollapsibleTabs";
import Transformation from "../Transformation";

function Tabs({ onTransform }) {
  const tabs = [
    { key: "transformation", header: <span>Transform</span>}
  ];
  const createComponent = (selected) => {
    switch(selected) {
      case "transformation":
        return (
          <Transformation transformCode={onTransform} />
        );
      default:
        return null;
    }
  }
  return (
    <CollapsibleTabs
      tabs={tabs}
    >
      {createComponent}
    </CollapsibleTabs>
  );
}

export default Tabs;
