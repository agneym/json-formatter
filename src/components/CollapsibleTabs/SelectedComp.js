import React, { cloneElement } from "react";
import PropTypes from "prop-types";

import Content from "./Content";
import Header from "./Header";

const SelectedComp = ({ selected, component, close }) => {
  const componentWithClose = cloneElement(component, {
    close,
  });
  return (
    <Content show={!!selected}>
      <Header title={selected.title} onClose={close} />
      {componentWithClose}
    </Content>
  );
};

SelectedComp.propTypes = {
  close: PropTypes.func.isRequired,
  component: PropTypes.node.isRequired,
  selected: PropTypes.object.isRequired,
};

export default SelectedComp;
