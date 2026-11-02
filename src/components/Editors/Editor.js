import React, { useRef, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import EditorActions from "./EditorActions";

import "monaco-editor/editor/contrib/hover/browser/hoverContribution.js";
import "monaco-editor/editor/browser/coreCommands.js";
import "monaco-editor/editor/contrib/find/browser/findController.js";
import "monaco-editor/editor/contrib/folding/browser/folding.js";
import "monaco-editor/editor/contrib/bracketMatching/browser/bracketMatching.js";
import "monaco-editor/language/json/monaco.contribution.js";
import "monaco-editor/editor/contrib/wordHighlighter/browser/wordHighlighter.js";
import "monaco-editor/editor/contrib/wordOperations/browser/wordOperations.js";
import "monaco-editor/editor/contrib/rename/browser/rename.js";
import "monaco-editor/editor/contrib/multicursor/browser/multicursor.js";
import "monaco-editor/editor/contrib/smartSelect/browser/smartSelect.js";
import "monaco-editor/editor/contrib/format/browser/formatActions.js";
import "monaco-editor/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js";
import "monaco-editor/editor/contrib/linesOperations/browser/linesOperations.js";

function Editor({ editorConfig, modelType, value }) {
  const editorContainer = useRef(null);
  useEffect(() => {
    if (editorContainer.current) {
      editorConfig.createEditor(editorContainer.current);
      if (modelType === "json") {
        editorConfig.createJsonModel(value);
      }
    }
    return () => {
      editorConfig.destroy();
    };
  }, [modelType, editorConfig]);
  return (
    <Fragment>
      <div
        ref={editorContainer}
        css={`
          height: 100%;
          width: 100%;
        `}
      />
      <EditorActions editorConfig={editorConfig} />
    </Fragment>
  );
}

Editor.defaultProps = {
  value: ``,
  modelType: "json",
};

Editor.propTypes = {
  value: PropTypes.string,
  modelType: PropTypes.string,
  editorConfig: PropTypes.any.isRequired,
};

export default Editor;
