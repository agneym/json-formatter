import React from "react";

import getEditor from "../../utils/editor-actions";
import Editor from "../Editor";

function Transformation() {
  const transformEditor = getEditor();
  return (
    <div css={`height: 100%;`}>
      <header>
        <h2>Transformation</h2>
        <button>Run</button>
      </header>
      <Editor modelType="js" editorConfig={transformEditor} />
    </div>
  );
}

export default Transformation;
