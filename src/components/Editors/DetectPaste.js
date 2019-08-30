import React, { useState, useEffect, useCallback, useContext, useRef } from "react";
import { Button } from "buffetjs";

import Message from "../Message";
import EditorContext from "./EditorContext";
import useClickOutside from "../../utils/hooks/use-click-outside";

const DetectPaste = () => {
  const editorConfig = useContext(EditorContext);
  const containerRef = useRef(null);
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
  useClickOutside(containerRef, () => {
    setShow(false);
  });
  const pasteContents = useCallback(() => {
    editorConfig.setValue(text);
    editorConfig.format();
    setShow(false);
  }, [text, editorConfig]);
  return (
    <Message show={show}>
      <div
        ref={containerRef}
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
