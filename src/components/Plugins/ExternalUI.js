import React, { useEffect, Fragment } from "react";

import pluginPropType from "./pluginType";

function ExternalUI({ details }) {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", details.url);
    document.head.appendChild(script);
  }, [details]);

  const Tag = details.tagName;
  return (
    <Fragment>
      <Tag />
    </Fragment>
  );
}

ExternalUI.propTypes = {
  details: pluginPropType,
};

export default ExternalUI;
