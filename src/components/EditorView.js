import React, { Fragment } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Transformation from "./Transformation";

const EditorView = () => {
  return (
    <Fragment>
      <Editor />
      <DetectPaste />
      <Transformation />
    </Fragment>
  );
}

export default EditorView;