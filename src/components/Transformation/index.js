import React from "react";

import getEditor from "../../utils/editor-actions";
import Editor from "../Editor";
import Header from "./header";

function Transformation({ transformCode }) {
  const transformEditor = getEditor();
  const onRun = () => {
    const value = transformEditor.getValue();
    transformCode(value);
  }
  return (
    <div css={`height: 100%;`}>
      <Header onRun={onRun} />
      <Editor modelType="js" editorConfig={transformEditor} />
    </div>
  );
}

export default Transformation;
