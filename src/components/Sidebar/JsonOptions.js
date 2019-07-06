import React from "react";
import { Toggle, Label } from "buffetjs";
import PropTypes from "prop-types";
import AsyncCreatableSelect from 'react-select/async-creatable';
import { Field } from "formik";

import FieldSet, { HorizontalField, HorizontalLabel } from "./FieldSet";
import api from "../../lib/api";

const getSchemas = (inputVal) => {
  return new window.Promise(resolve => {
    api.catalogue.get()
      .then(res => (res.schemas || []))
      .then(res => {
        if(inputVal) {
          resolve(res.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase())));
        } else {
          resolve(res);
        }
      });
  });
}

const validateUrl = (inputVal, selectVal) => {
  console.log(inputVal, selectVal);
  return true;
}

function JsonOptions({ values, handleChange, handleBlur }) {
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
        render={({ field, form }) => (
          <AsyncCreatableSelect
            cacheOptions
            name={field.name}
            id="schema"
            value={field.value}
            onChange={(option) => form.setFieldValue(field.name, option)}
            defaultOptions
            isClearable
            allowCreateWhileLoading
            placeholder="Select/Add schema"
            getNewOptionData={(_, optionLabel) => ({ name: optionLabel, url: optionLabel })}
            formatCreateLabel={(inputVal) => `Validate with ${inputVal}`}
            loadOptions={getSchemas}
            getOptionLabel={option => option.name}
            getOptionValue={option => option.url}
          />
        )}
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
};

export default JsonOptions;
