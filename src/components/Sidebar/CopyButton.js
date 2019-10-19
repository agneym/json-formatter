import React from "react";
import { Button } from "buffetjs";
import PropTypes from "prop-types";
import FieldSet, { Field } from "./FieldSet";

function CopyButton({ editorConfig }) {
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

  return (
    <FieldSet>
      <Field>
        <Button
          type="button"
          css={`
              margin: 1rem auto;
              text-align: center;
              display: block;
              width: 100%;
          `}
          onClick={copyToClipboard}
        >
          Copy to Clipboard
        </Button>
      </Field>
    </FieldSet>
  );
}

CopyButton.propTypes = {
  editorConfig: PropTypes.shape({
    getValue: PropTypes.func.isRequired,
  }),
};

export default CopyButton;
