import React, { useState } from 'react';
import { InputText } from 'buffetjs';
import PropTypes from "prop-types";

import fetchData from "../../../lib/api/fetchData";

function JsonUrl({ setData }) {
  const [url, setUrl] = useState("");
  const changeUrl = (event) => {
    const target = event.target;
    const value = target.value;
    setUrl(value);
    if(target.checkValidity()) {
      fetchData(value)
        .then((response) => setData(response));
    }
  }
  return (
    <InputText
      type="url"
      name="url"
      value={url}
      onChange={changeUrl}
      placeholder="Enter a JSON URL"
      css={`margin: 1rem 3rem; width: 85%;`}
    />
  );
}

JsonUrl.propTypes = {
  setData: PropTypes.func.isRequired,
}

export default JsonUrl;

