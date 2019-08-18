import React from "react";

import CollapsibleTabs from "../CollapsibleTabs";
import getEditor from "../../utils/editor-actions";
import Editor from "../Editor";

function Transformation() {
  const transformEditor = getEditor();
  const tabs = [
    { key: "transformation", header: <span>Transform</span>}
  ];
  const createComponent = (selected) => {
    switch(selected) {
      case "transformation":
        return (
          <Editor modelType="js" editorConfig={transformEditor} />
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

export default Transformation;
