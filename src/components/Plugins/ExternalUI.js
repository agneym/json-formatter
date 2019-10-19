import React, { useEffect, Fragment, useContext, useRef } from "react";
import PropTypes from "prop-types";

import pluginPropType from "./pluginType";
import EditorContext from "../Editors/EditorContext";

function ExternalUI({ details, onTransform }) {
  const editorConfig = useContext(EditorContext);
  const elementRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", details.url);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [details]);

  useEffect(() => {
    const elementNode = elementRef.current;
    function onTransform(event) {
      const detail = event.detail;
      if (detail) {
        console.log("on transform being called", detail.message);
        onTransform(detail.message);
      }
    }
    if (elementNode) {
      elementNode.addEventListener("json-transform", onTransform);
    }
  }, [onTransform]);

  const value = editorConfig.getValue();

  const Tag = details.tagName;

  return (
    <Fragment>
      <Tag data={value} ref={elementRef} />
    </Fragment>
  );
}

ExternalUI.propTypes = {
  details: pluginPropType,
  onTransform: PropTypes.func.isRequired,
};

export default ExternalUI;
