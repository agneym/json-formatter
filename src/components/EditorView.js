import React, { Fragment, useContext } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Tabs from "./CollapsibleTabs/Tabs";
import EditorContext from "./EditorContext";

const EditorView = () => {
  const editorConfig = useContext(EditorContext);
  const onTransform = (transformCode) => {
    try {
      const originalValue = JSON.parse(editorConfig.getValue());
      const transformedValue = Function(`"use strict";return (${transformCode})`)()(originalValue);
      editorConfig.setValue(JSON.stringify(transformedValue));
    } catch(err) {
      console.error(err);
    }
  }
  return (
    <Fragment>
      <Editor editorConfig={editorConfig} />
      <Tabs onTransform={onTransform} />
      <DetectPaste />
    </Fragment>
  );
}

export default EditorView;