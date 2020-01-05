import React, { Fragment, useContext, useState } from "react";

import Editor from "./Editor";
import DetectPaste from "./DetectPaste";
import Tabs from "../CollapsibleTabs/Tabs";
import EditorContext from "./EditorContext";
import DiffEditor from "./DiffEditor";
import { PluginContextProvider } from "../Plugins/pluginContext";

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
      <PluginContextProvider>
        <Tabs onTransform={onTransform} />
      </PluginContextProvider>
      <DetectPaste />
    </Fragment>
  );
};

export default EditorView;
