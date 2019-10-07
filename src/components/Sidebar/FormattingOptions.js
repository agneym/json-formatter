import React from "react";
import PropTypes from "prop-types";
import { InputNumber, Label, Toggle } from "buffetjs";

import FieldSet, { Field, HorizontalField, HorizontalLabel } from "./FieldSet";

function FormattingOptions({ values, handleChange, handleBlur }) {
  const handleToggleChange = event => {
    handleChange(event);
    handleBlur();
  };
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
        <HorizontalLabel htmlFor="indent-size">Indent Size</HorizontalLabel>
        <InputNumber
          id="indent-size"
          name="indentSize"
          min={1}
          value={values.indentSize}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Field>
      <HorizontalField>
        <HorizontalLabel htmlFor="insert-spaces">Insert Spaces</HorizontalLabel>
        <Toggle
          value={values.insertSpaces}
          name="insertSpaces"
          onChange={handleToggleChange}
        />
      </HorizontalField>
      <HorizontalField>
        <HorizontalLabel htmlFor="trim-whitespace">
          Trim Whitespace
        </HorizontalLabel>
        <Toggle
          value={values.trimAutoWhitespace}
          name="trimAutoWhitespace"
          onChange={handleToggleChange}
        />
      </HorizontalField>
    </FieldSet>
  );
}

FormattingOptions.defaultProps = {
  handleBlur: () => {},
};

FormattingOptions.propTypes = {
  values: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
};

export default FormattingOptions;
