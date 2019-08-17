import { useEffect } from "react";

const events = ["mousedown", "touchstart"];

/**
 * React custom hook to implement clicking outside to trigger a function.
 * @param {DOMNode} element Element on which click outside has to be computed
 * @param {function} handler Function to execute on click outside
 */
function useClickOutside(elementRef, handler) {
  useEffect(() => {
    const clickHandler = event => {
      const target = event.target;
      const { current: element } = elementRef;
      if (target && element && !element.contains(target)) {
        handler();
      }
    };

    for (const eventName of events) {
      document.addEventListener(eventName, clickHandler);
    }

    return () => {
      for (const eventName of events) {
        document.removeEventListener(eventName, clickHandler);
      }
    };
  }, [elementRef, handler]);
}

export default useClickOutside;
