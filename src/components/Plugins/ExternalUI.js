import React, { useEffect, Fragment, useContext, useRef } from "react";

import pluginPropType from "./pluginType";
import EditorContext from "../Editors/EditorContext";

function ExternalUI({ details }) {
  const editorConfig = useContext(EditorContext);
  const elementRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", details.url);
    document.head.appendChild(script);
  }, [details]);

  useEffect(() => {
    const elementNode = elementRef.current;
    function onTransform(event) {
      const { message: data } = event.detail;
      editorConfig.setValue(data);
    }
    if (elementNode) {
      elementNode.addEventListener("json-transform", onTransform);
    }
  }, [editorConfig]);

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
};

export default ExternalUI;
