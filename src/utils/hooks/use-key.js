import { useEffect } from "react";

/**
 * Detect keyboard presses.
 * @param {string} key
 * @param {function} handler Function to be executed when particular key is pressed.
 */
function useKey(key, handler) {
  useEffect(() => {
    const keydownHandler = (event) => {
      const pressedKey = event.key;
      if (pressedKey === key) {
        handler();
      }
    }
    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    }
  }, [key, handler]);
}

export default useKey;