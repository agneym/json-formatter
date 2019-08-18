import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "monaco-editor/esm/vs/editor/contrib/hover/hover.js";
import "monaco-editor/esm/vs/editor/browser/controller/coreCommands.js";
import "monaco-editor/esm/vs/editor/contrib/find/findController.js";
import "monaco-editor/esm/vs/editor/contrib/folding/folding.js";
import "monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js";
import 'monaco-editor/esm/vs/language/typescript/monaco.contribution';
import "monaco-editor/esm/vs/language/json/monaco.contribution";
import "monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js";
import "monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js";
import "monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js";
import "monaco-editor/esm/vs/editor/contrib/rename/rename.js";
import "monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js";
import "monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js";
import "monaco-editor/esm/vs/editor/contrib/format/formatActions.js";
import "monaco-editor/esm/vs/editor/contrib/inPlaceReplace/inPlaceReplace.js";
import "monaco-editor/esm/vs/editor/contrib/linesOperations/linesOperations.js";

window.MonacoEnvironment = {
  getWorkerUrl: function(moduleId, label) {
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return "./json.worker.bundle.js";
  },
};

function Editor({ editorConfig, modelType }) {
  const editorContainer = useRef(null);
  useEffect(() => {
    if (editorContainer.current) {
      editorConfig.createEditor(editorContainer.current);
      if(modelType === "json") {
        editorConfig.createJsonModel();
      } else {
        editorConfig.createJsModel();
      }
    }
    return () => {
      editorConfig.destroy();
    };
  }, [modelType, editorConfig]);
  return (
    <div
      ref={editorContainer}
      css={`
        height: 100%;
      `}
    />
  );
}

Editor.defaultProps = {
  modelType: "json",
}

Editor.propTypes = {
  editorConfig: PropTypes.shape({
    createEditor: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
    createJsonModel: PropTypes.func.isRequired,
    createJsModel: PropTypes.func.isRequired,
  }),
  modelType: PropTypes.string,
};

export default Editor;
