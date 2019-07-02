import React from 'react';
import PropTypes from "prop-types";

function FormattingOptions({ values, handleChange, handleBlur }) {
  return (
    <fieldset>
      <h2>Formatting</h2>
      <div>
        <label htmlFor="tab-size">Tab Size</label>
        <input
          type="number"
          id="tab-size"
          name="tabSize"
          value={values.tabSize}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </div>
      <div>
        <label htmlFor="intent-size">Intent Size</label>
        <input
          type="number"
          id="intent-size"
          name="intentSize"
          value={values.intentSize}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </div>
     
    </fieldset>
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

