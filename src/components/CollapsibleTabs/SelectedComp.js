import React from "react";
import PropTypes from "prop-types";

import Content from "./Content";

const SelectedComp = ({ selected, component }) => {
  return <Content show={!!selected}>{component}</Content>;
};

SelectedComp.propTypes = {
  close: PropTypes.func.isRequired,
  component: PropTypes.node.isRequired,
  selected: PropTypes.object.isRequired,
};

export default SelectedComp;
