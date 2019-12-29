import React, { Fragment, useContext, useState } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Tabs from "../CollapsibleTabs/Tabs";
import EditorContext from "./EditorContext";
import DiffEditor from "./DiffEditor";
import { PinContextProvider } from "../Plugins/pinnedContext";

const EditorView = () => {
  const editorConfig = useContext(EditorContext);
  const [transformed, setTransformed] = useState(null);
  const [editorVal, setEditorVal] = useState("");

  const onTransform = transformedValue => {
    try {
      const transformedValueJson = JSON.stringify(transformedValue);
      setTransformed(transformedValueJson);
    } catch (err) {
      console.error(err);
    }
  };
  const loadEditor = value => {
    setTransformed("");
    setEditorVal(value);
    setTimeout(() => editorConfig.format(), 0);
  };
  return (
    <Fragment>
      {transformed ? (
        <DiffEditor
          transformed={transformed}
          original={editorConfig.getValue()}
          returnEditor={loadEditor}
        />
      ) : (
        <Editor value={editorVal} editorConfig={editorConfig} />
      )}
      <PinContextProvider>
        <Tabs onTransform={onTransform} />
      </PinContextProvider>
      <Tabs onTransform={onTransform} />
      <DetectPaste />
    </Fragment>
  );
};

export default EditorView;
