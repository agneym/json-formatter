import React from "react";

import getEditor from "../../utils/editor-actions";
import Editor from "../Editor";

function Transformation({ transformCode }) {
  const transformEditor = getEditor();
  const onRun = () => {
    const value = transformEditor.getValue();
    transformCode(value);
  }
  return (
    <div css={`height: 100%;`}>
      <header>
        <h2>Transformation</h2>
        <button onClick={onRun}>Run</button>
      </header>
      <Editor modelType="js" editorConfig={transformEditor} />
    </div>
  );
}

export default Transformation;
