import React, { Fragment } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Transformation from "./Transformation";

const EditorView = ({ editorConfig }) => {
  return (
    <Fragment>
      <Editor editorConfig={editorConfig} />
      <DetectPaste editorConfig={editorConfig} />
      <Transformation />
    </Fragment>
  );
}

export default EditorView;