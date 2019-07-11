import React from 'react';
import styled from "styled-components";

const Label = styled.label`
  background-color: ${props => props.theme.colors.secondary};
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: #FFFFFF;
`;

const OutInput = styled.input`
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
  z-index: -1;
  
  &:focus + ${Label} {
    outline: 0.1rem solid ${props => props.theme.colors.primary}
  }
`;

function UploadFile() {
  return (
    <div css={`text-align: center;`}>
      <Label htmlFor="upload-file">Upload JSON File</Label>
      <OutInput type="file" id="upload-file" />
    </div>
  );
}

export default UploadFile;

