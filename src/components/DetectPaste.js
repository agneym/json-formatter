import React, { useState, useEffect, useCallback, useContext } from "react";
import { Button } from "buffetjs";

import Message from "./Message";
import EditorContext from "./EditorContext";

const DetectPaste = () => {
  const editorConfig = useContext(EditorContext);
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  useEffect(() => {
    async function getClipboardContents() {
      try {
        const text = await navigator.clipboard.readText();
        if (text) {
          setShow(true);
          setText(text);
        }
      } catch (err) {
        console.warn("Failed to read clipboard contents: ", err);
      }
    }
    getClipboardContents();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(checkForContents, 2000);
    function checkForContents() {
      const editorText = editorConfig.getValue();
      if (editorText) {
        setShow(false);
        clearInterval(intervalId);
      }
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [editorConfig]);
  const pasteContents = useCallback(() => {
    editorConfig.setValue(text);
    setShow(false);
  }, [text, editorConfig]);
  return (
    <Message show={show}>
      <div
        css={`
          margin: 0 2rem;
          display: flex;
          align-items: center;
        `}
      >
        <p>We detected some text in your clipboard. Do you want to paste?</p>
        <Button
          css={`
            margin: 0 4rem;
          `}
          onClick={pasteContents}
        >
          Paste
        </Button>
      </div>
    </Message>
  );
};

DetectPaste.propTypes = {
};

export default DetectPaste;
