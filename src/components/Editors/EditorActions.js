import React from "react";
import PropTypes from "prop-types";
import { Fab, Action } from "react-tiny-fab";

import CopyIcon from "../../icons/copy.svg";
import ExpandIcon from "../../icons/expand.svg";
import CollapseIcon from "../../icons/collapse.svg";

import "react-tiny-fab/dist/styles.css";

const mainButtonStyles = {
  backgroundColor: "#3B8BEB",
  color: "#FFF",
};

const actionButtonStyles = {
  backgroundColor: "#2F78F1",
  color: "#FFF",
  fill: "#FFF",
  fontSize: "24px",
  fontWeight: "normal",
};

function EditorActions({ editorConfig }) {
  const copyToClipboard = () => {
    // Pull the full contents of the editor off the config
    const textToCopy = editorConfig.getValue();

    // Create a temporary textarea element to copy from before removing it
    const copyableArea = document.createElement("textarea");
    document.body.appendChild(copyableArea);
    copyableArea.value = textToCopy;
    copyableArea.select();
    document.execCommand("copy");
    document.body.removeChild(copyableArea);
  };

  const collapseAll = () => {
    editorConfig.collapseAll();
  };

  const expandAll = () => {
    editorConfig.expandAll();
  };

  const clearEditor = () => {
    editorConfig.setValue("");
  };

  return (
    <Fab icon="+" mainButtonStyles={mainButtonStyles}>
      <Action
        text="Copy to Clipboard"
        onClick={copyToClipboard}
        style={actionButtonStyles}
      >
        <CopyIcon
          css={`
            height: 2rem;
          `}
        />
      </Action>
      <Action text="Expand all" onClick={expandAll} style={actionButtonStyles}>
        <ExpandIcon
          css={`
            height: 2rem;
          `}
        />
      </Action>
      <Action
        text="Collapse all"
        onClick={collapseAll}
        style={actionButtonStyles}
      >
        <CollapseIcon
          css={`
            height: 2rem;
          `}
        />
      </Action>
      <Action
        text="Clear Editor"
        onClick={clearEditor}
        style={actionButtonStyles}
      >
        ×
      </Action>
    </Fab>
  );
}

EditorActions.propTypes = {
  editorConfig: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
  }),
};

export default EditorActions;
