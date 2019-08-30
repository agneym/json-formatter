import React, { useEffect, useRef } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";

const DiffEditor = ({ transformed, original }) => {
  const editorContainer = useRef(null);
  useEffect(() => {
    if (editorContainer.current) {
      const originalModel = monaco.editor.createModel(original, "json");
      const modifiedModel = monaco.editor.createModel(transformed, "json");
      const diffEditor = monaco.editor.createDiffEditor(
        editorContainer.current
      );
      diffEditor.setModel({
        original: originalModel,
        modified: modifiedModel,
      });
      const modifiedEditor = diffEditor.getModifiedEditor();
      modifiedEditor.getAction("editor.action.formatDocument").run();
    }
  }, [transformed, original]);
  return (
    <div
      ref={editorContainer}
      css={`
        height: 100%;
      `}
    />
  );
};

export default DiffEditor;
