import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api.js";
import { Button } from "buffetjs";
import styled from "styled-components";

const ActionContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;

  & > * {
    margin: 0 1rem;
  }
`;

const DiffEditor = ({ transformed, original, returnEditor }) => {
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
      css={`
        height: 100%;
      `}
    >
      <ActionContainer>
        <Button
          color="cancel"
          label="Keep Original"
          onClick={() => returnEditor(original)}
        />
        <Button
          color="primary"
          label="Keep Transformed"
          onClick={() => returnEditor(transformed)}
        />
      </ActionContainer>
      <div
        ref={editorContainer}
        css={`
          height: calc(100% - 5rem);
        `}
      />
    </div>
  );
};

DiffEditor.propTypes = {
  transformed: PropTypes.string.isRequired,
  original: PropTypes.string.isRequired,
  returnEditor: PropTypes.func.isRequired,
};

export default DiffEditor;
