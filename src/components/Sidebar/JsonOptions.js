import React from "react";
import { Toggle, Label } from "buffetjs";
import PropTypes from "prop-types";
import AsyncCreatableSelect from 'react-select/async-creatable';

import FieldSet, { HorizontalField, HorizontalLabel } from "./FieldSet";
import api from "../../lib/api";

const getSchemas = () => {
  return api.catalogue.get().then(res => (res.schemas || []));
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
      <AsyncCreatableSelect
        cacheOptions
        name="schemaInput"
        id="schema"
        defaultOptions
        allowCreateWhileLoading
        loadOptions={getSchemas}
        getOptionLabel={option=>option.name}
        getOptionValue={option=>option.url}
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
