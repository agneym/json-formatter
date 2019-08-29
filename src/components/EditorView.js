import React, { Fragment, useContext } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Tabs from "./CollapsibleTabs/Tabs";
import EditorContext from "./EditorContext";
import DiffEditor from "./DiffEditor";

const EditorView = () => {
  const editorConfig = useContext(EditorContext);
  const [transformed, setTransformed] = useState(null);
  const onTransform = (transformCode) => {
    try {
      const originalValue = JSON.parse(editorConfig.getValue());
      const transformedValue = Function(`"use strict";return (${transformCode})`)()(originalValue);
      setTransformed(transformedValue);
    } catch(err) {
      console.error(err);
    }
  }
  return (
    <Fragment>
      {transformed ? <DiffEditor transformed={transformed} original={editorConfig.getValue()} /> : (
        <Editor editorConfig={editorConfig} />
      )}
      <Tabs onTransform={onTransform} />
      <DetectPaste />
    </Fragment>
  );
}

export default EditorView;