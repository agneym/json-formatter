import React, { Fragment, useContext } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Tabs from "./CollapsibleTabs/Tabs";
import EditorContext from "./EditorContext";

const EditorView = () => {
  const editorConfig = useContext(EditorContext);
  return (
    <Fragment>
      <Editor editorConfig={editorConfig} />
      <Tabs />
      <DetectPaste />
    </Fragment>
  );
}

export default EditorView;