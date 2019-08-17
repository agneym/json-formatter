import React from "react";
import PropTypes from "prop-types";
import { InputText } from "buffetjs";
import styled from "styled-components";

import CopyIcon from "../../icons/copy.svg";

const Container = styled.div`
  display: flex;
  padding: 0 4rem;

  &>div {
    width: 100%;
  }
`;

const NakedButton = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  width: 3rem;
  line-height: 3rem;
  border: 1px solid #E3E9F3;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ClipInput = ({ value }) => {
  return (
    <Container>
      <InputText name="url-input-readonly" value={value} readonly />
      <NakedButton>
        <CopyIcon css={`width: 100%;`} />
      </NakedButton>
    </Container>
  )
}

ClipInput.defaultProps = {
  value: "",
}

ClipInput.propTypes = {
  value: PropTypes.string,
}

export default ClipInput;