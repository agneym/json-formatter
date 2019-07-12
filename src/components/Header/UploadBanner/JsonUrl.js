import React from 'react';
import { InputText } from 'buffetjs';

function JsonUrl() {
  return (
    <InputText type="url" name="url" placeholder="Enter a JSON URL" css={`margin: 1rem 3rem; width: 85%;`} />
  );
}

export default JsonUrl;

