import React, { Fragment, useContext, useState } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Tabs from "../CollapsibleTabs/Tabs";
import EditorContext from "./EditorContext";
import DiffEditor from "./DiffEditor";

const EditorView = () => {
  const editorConfig = useContext(EditorContext);
  const [transformed, setTransformed] = useState(null);

  const onTransform = transformCode => {
    try {
      const originalValue = editorConfig.getValue();
      const originalValueObj = JSON.parse(originalValue);
      const transformedValue = Function(
        `"use strict";return (${transformCode})`
      )()(originalValueObj);
      const transformedValueJson = JSON.stringify(transformedValue);
      setTransformed(transformedValueJson);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Fragment>
      {transformed ? (
        <DiffEditor
          transformed={transformed}
          original={editorConfig.getValue()}
        />
      ) : (
        <Editor editorConfig={editorConfig} />
      )}
      <Tabs onTransform={onTransform} />
      <DetectPaste />
    </Fragment>
  );
};

export default EditorView;
