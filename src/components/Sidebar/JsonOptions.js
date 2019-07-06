import React from "react";
import { Toggle, Label } from "buffetjs";
import PropTypes from "prop-types";
import { Field } from "formik";

import FieldSet, { HorizontalField, HorizontalLabel } from "./FieldSet";
import SchemaSelect from "./SchemaSelect";

function JsonOptions({ values, handleChange, handleBlur, changeSchema }) {
  const handleToggleChange = event => {
    handleChange(event);
    const {
      target: { name, value },
    } = event;
    handleBlur({ [name]: value });
  };
  return (
    <FieldSet>
      <h2>JSON Options</h2>
      <HorizontalField>
        <HorizontalLabel htmlFor="validate">Validate</HorizontalLabel>
        <Toggle
          id="validate"
          value={values.validate}
          name="validate"
          onChange={handleToggleChange}
        />
      </HorizontalField>
      <HorizontalField>
        <HorizontalLabel htmlFor="allow-comments">
          Allow Comments
        </HorizontalLabel>
        <Toggle
          id="allow-comments"
          value={values.allowComments}
          name="allowComments"
          onChange={handleToggleChange}
        />
      </HorizontalField>
      <Label htmlFor="schema">Schema</Label>
      <Field
        name="schemaInput"
        onBlur={changeSchema}
        component={SchemaSelect}
      />
    </FieldSet>
  );
}

JsonOptions.defaultProps = {
  handleBlur: () => {},
};

JsonOptions.propTypes = {
  values: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
  changeSchema: PropTypes.func.isRequired,
};

export default JsonOptions;
