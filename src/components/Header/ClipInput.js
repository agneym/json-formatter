import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CopyIcon from "../../icons/copy.svg";

const Container = styled.div`
  display: flex;
  padding: 0 4rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
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
  const inputRef = useRef(null);
  const copy = useCallback(() => {
    const inputEl = inputRef.current;
    if(inputEl) {
      inputEl.focus();
      inputEl.select();
      document.execCommand("copy");
    }
  }, []);
  return (
    <Container onClick={copy}>
      <Input name="url-input-readonly" value={value} readOnly ref={inputRef} />
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