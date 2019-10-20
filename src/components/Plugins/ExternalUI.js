import React, { useContext } from "react";
import PropTypes from "prop-types";

import pluginPropType from "./pluginType";
import EditorContext from "../Editors/EditorContext";

const EVENT_TYPE = "json-transform";

function ExternalUI({ details, onTransform }) {
  const editorConfig = useContext(EditorContext);

  window.addEventListener("message", event => {
    const eventData = event.data;
    const eventType = eventData.__event;
    if (eventType === EVENT_TYPE) {
      onTransform(eventData.message);
    }
  });

  const value = editorConfig.getValue();

  return (
    <iframe
      width="100%"
      height="100%"
      title="Plugin UI"
      frameBorder="0"
      srcDoc={`
      <html>
        <head>
          <script src=${details.url}></script>
        </head>
        <body>
          <${details.tagName} data='${value}'></${details.tagName}>
          <script>
            function handleTransform(event) {
              const detail = event.detail;
              if (detail) {
                const eventDetail = {...detail, __event: "json-transform"};
                window.top.postMessage(eventDetail, "*");
              }
            }
            const el = document.querySelector("${details.tagName}");  
            el.addEventListener("json-transform", handleTransform);
          </script>
        </body>
      </html>`}
    />
  );
}

ExternalUI.propTypes = {
  details: pluginPropType,
  onTransform: PropTypes.func.isRequired,
};

export default ExternalUI;
