import React from "react";
import pluginPropType from "./pluginType";

function ExternalUI({ details }) {
  return <p>ExternalUI</p>;
}

ExternalUI.propTypes = {
  details: pluginPropType,
};

export default ExternalUI;
