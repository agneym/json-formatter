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
      const data = JSON.parse(eventData.message);
      onTransform(data);
    }
  });

  const value = editorConfig.getValue();

  return (
    <iframe
      width="100%"
      height="99%"
      title="Plugin UI"
      frameBorder="0"
      srcDoc={`
      <html>
        <head>
          <style>.loader{position: fixed; top: 30%; left: 50%; transform: translate(-50%, -50%);}</style>
          <script type="module" src=${details.url}></script>
        </head>
        <body>
          <${details.tagName} data='${value}'></${details.tagName}>
          <svg viewBox="0 0 64 64" class="loader" height="3rem" width="3rem"><g fill="none" stroke="#3B8BEB" fill-rule="evenodd" stroke-width="3"><circle cx="32" cy="32" r="23.9953"><animate attributeName="r" begin="0s" dur="2s" values="0;24" keyTimes="0;1" keySplines="0.1,0.2,0.3,1" calcMode="spline" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="2s" values=".2;1;.2;0" repeatCount="indefinite"></animate></circle><circle cx="32" cy="32" r="19.4645"><animate attributeName="r" begin="-1s" dur="2s" values="0;24" keyTimes="0;1" keySplines="0.1,0.2,0.3,1" calcMode="spline" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-1s" dur="2s" values=".2;1;.2;0" repeatCount="indefinite"></animate></circle></g></svg>
          <script>
            function handleTransform(event) {
              const detail = event.detail;
              if (detail) {
                const eventDetail = {...detail, __event: "json-transform"};
                window.top.postMessage(eventDetail, "*");
              }
            }
            function hideLoader() {
              document.querySelector(".loader").style.display = "none";
            }
            window.addEventListener("load", hideLoader);
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
