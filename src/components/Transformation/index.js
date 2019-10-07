import React from "react";
import PropTypes from "prop-types";

import getEditor from "../../utils/editor-actions";
import Editor from "../Editors/Editor";
import Header from "./Header";

function Transformation({ transformCode }) {
  const transformEditor = getEditor();
  const onRun = () => {
    const value = transformEditor.getValue();
    transformCode(value);
  };
  return (
    <div
      css={`
        height: 100%;
      `}
    >
      <Header onRun={onRun} />
      <Editor modelType="js" editorConfig={transformEditor} />
    </div>
  );
}

Transformation.propTypes = {
  transformCode: PropTypes.func.isRequired,
};

export default Transformation;
