import React, { useRef, useEffect } from "react";

import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js';
import 'monaco-editor/esm/vs/editor/browser/controller/coreCommands.js';
import 'monaco-editor/esm/vs/editor/contrib/find/findController.js';
import 'monaco-editor/esm/vs/editor/contrib/folding/folding.js';
import 'monaco-editor/esm/vs/editor/contrib/bracketMatching/bracketMatching.js';
import 'monaco-editor/esm/vs/language/json/monaco.contribution';
import 'monaco-editor/esm/vs/editor/standalone/browser/accessibilityHelp/accessibilityHelp.js';
import 'monaco-editor/esm/vs/editor/contrib/wordHighlighter/wordHighlighter.js';
import 'monaco-editor/esm/vs/editor/contrib/wordOperations/wordOperations.js';
import 'monaco-editor/esm/vs/editor/contrib/rename/rename.js';
import 'monaco-editor/esm/vs/editor/contrib/multicursor/multicursor.js';
import 'monaco-editor/esm/vs/editor/contrib/smartSelect/smartSelect.js';
import 'monaco-editor/esm/vs/editor/contrib/format/formatActions.js';
import 'monaco-editor/esm/vs/editor/contrib/contextmenu/contextmenu.js';


window.MonacoEnvironment = {
	getWorkerUrl: function () {
		return './json.worker.bundle.js';
	}
}

function Editor() {
  const editorContainer = useRef(null);
  useEffect(() => {
    if(editorContainer.current) {
      monaco.editor.create(editorContainer.current, {
        value: ``,
        language: "json",
        formatOnPaste: true,

      });
    }
  });
  return (
    <div
      ref={editorContainer}
      css={`height: 100vh`}
    />
  )
}

export default Editor;