import React from 'react';
import Select from "react-select";
import PropTypes from "prop-types";
import { Field as FormikField } from "formik";

import FieldSet, { Field } from './FieldSet';

export const themes = [{label: "Light", value: "vs"}, {label: "Dark", value: "vs-dark"}, {label: "High Contrast", value: "hc-black"}]

function EditorOptions({ values, handleBlur }) {
  return (
    <FieldSet>
      <h2>Editor Options</h2>
      <Field>
        <label htmlFor="theme">Theme</label>
        <FormikField
          name="theme"
        >
          {(field, form) => (
            <Select
              options={themes}
              name={field.name}
              id="theme"
              value={values.theme}
              onChange={(option) => form.setFieldValue(field.name, option)}
              onBlur={handleBlur}
            />
          )}
        </FormikField>
      </Field>
    </FieldSet>
  );
}

EditorOptions.propTypes = {
  values: PropTypes.shape({
    theme: PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  }),
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
}

export default EditorOptions;

