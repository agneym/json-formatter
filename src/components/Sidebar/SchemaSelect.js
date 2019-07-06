import React from "react";
import AsyncCreatableSelect from 'react-select/async-creatable';
import PropTypes from "prop-types";

import api from "../../lib/api";

const getSchemas = (inputVal) => {
  return new window.Promise(resolve => {
    api.catalogue.get()
      .then(res => (res.schemas || []))
      .then(res => {
        if (inputVal) {
          resolve(res.filter(item => item.name.toLowerCase().includes(inputVal.toLowerCase())));
        } else {
          resolve(res);
        }
      });
  });
}

const validateUrl = (inputVal) => {
  try {
    new URL(inputVal);
    return true;
  } catch(_) {
    return false;
  }
}

function SchemaSelect({ field, form, schemaOnBlur }) {
  return (
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
      isValidNewOption={validateUrl}
      loadOptions={getSchemas}
      getOptionLabel={option => option.name}
      getOptionValue={option => option.url}
      onBlur={() => schemaOnBlur(field.value)}
    />
  );
}

SchemaSelect.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
  }),
  schemaOnBlur: PropTypes.func.isRequired,
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
  }),
}

export default SchemaSelect;