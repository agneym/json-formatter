import React from 'react';

import FieldSet, { HorizontalField, HorizontalLabel } from './FieldSet';
import { Toggle } from 'buffetjs';
import PropTypes from "prop-types";

function JsonOptions({ values, handleChange, handleBlur }) {
  const handleToggleChange = (event) => {
    handleChange(event);
    handleBlur();
  }
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
        <HorizontalLabel htmlFor="allow-comments">Allow Comments</HorizontalLabel>
        <Toggle
          id="allow-comments"
          value={values.allowComments}
          name="allowComments"
          onChange={handleToggleChange}
        />
      </HorizontalField>
    </FieldSet>
  );
}

JsonOptions.defaultProps = {
  handleBlur: () => {},
}

JsonOptions.propTypes = {
  values: PropTypes.any.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func,
}

export default JsonOptions;