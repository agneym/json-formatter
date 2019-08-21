import React, { Fragment } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Tabs from "./CollapsibleTabs/Tabs";

const EditorView = () => {
  return (
    <Fragment>
      <Editor />
      <Tabs />
      <DetectPaste />
    </Fragment>
  );
}

export default EditorView;