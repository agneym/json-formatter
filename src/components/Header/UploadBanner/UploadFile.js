import React from 'react';
import styled from "styled-components";
import PropTypes from "prop-types";

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

const readFile = (file, setData) => {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    const target = event.target;
    const result = target.result;
    setData(result);
  });
  reader.readAsText(file);
}

function UploadFile({ setData }) {
  const onChange = (event) => {
    const target = event.target;
    const file = target.files[0];
    if(file) {
      readFile(file, setData);
    }
  }
  return (
    <div css={`text-align: center;`}>
      <Label htmlFor="upload-file">Upload JSON File</Label>
      <OutInput type="file" id="upload-file" accept=".json" onChange={onChange} />
    </div>
  );
}

UploadFile.propTypes = {
  setData: PropTypes.func.isRequired,
}

export default UploadFile;

