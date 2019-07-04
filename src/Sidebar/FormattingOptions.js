import React from 'react';
import PropTypes from "prop-types";
import { InputNumber, Label } from "buffetjs";

import FieldSet from "./FieldSet";

function FormattingOptions({ values, handleChange, handleBlur }) {
  return (
    <FieldSet>
      <h2>Formatting</h2>
      <div>
        <Label htmlFor="tab-size">Tab Size</Label>
        <InputNumber
          id="tab-size"
          name="tabSize"
          value={values.tabSize}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </div>
      <div>
        <Label htmlFor="intent-size">Intent Size</Label>
        <InputNumber
          id="intent-size"
          name="intentSize"
          value={values.intentSize}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </div>
    </FieldSet>
  );
}

FormattingOptions.defaultProps = {
  handleBlur: () => {},
}

FormattingOptions.propTypes = {
  values: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
}

export default FormattingOptions;

