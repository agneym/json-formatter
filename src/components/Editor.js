import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "monaco-editor/esm/vs/editor/contrib/hover/hover.js";
import "monaco-editor/esm/vs/editor/browser/controller/coreCommands.js";
import "monaco-editor/esm/vs/editor/contrib/find/findController.js";
import "monaco-editor/esm/vs/editor/contrib/folding/folding.js";
import "monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js";
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
  getWorkerUrl: function() {
    return "./json.worker.bundle.js";
  },
};

function Editor({ editorConfig }) {
  const editorContainer = useRef(null);
  useEffect(() => {
    if (editorContainer.current) {
      editorConfig.createEditor(editorContainer.current);
    }
    return () => {
      editorConfig.destroy();
    };
  });
  return (
    <div
      ref={editorContainer}
      css={`
        height: 60%;
      `}
    />
  );
}

Editor.propTypes = {
  editorConfig: PropTypes.shape({
    createEditor: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
  }),
};

export default Editor;
