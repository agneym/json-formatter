import React from 'react';
import PropTypes from "prop-types";
import { InputNumber, Label } from "buffetjs";

import FieldSet, { Field } from "./FieldSet";

function FormattingOptions({ values, handleChange, handleBlur }) {
  return (
    <FieldSet>
      <h2>Formatting</h2>
      <Field>
        <Label htmlFor="tab-size">Tab Size</Label>
        <InputNumber
          id="tab-size"
          name="tabSize"
          min={1}
          value={values.tabSize}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Field>
      <Field>
        <Label htmlFor="intent-size">Intent Size</Label>
        <InputNumber
          id="intent-size"
          name="intentSize"
          min={1}
          value={values.intentSize}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Field>
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

