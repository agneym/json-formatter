import React from 'react';
import styled from "styled-components";

import UploadFile from './UploadFile';

const Container = styled.div`
  background-color: #FFFFFF;
  height: 20rem;
  width: 30vw;
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  padding: 1rem;
  padding: 3rem 0;
`;

function UploadBanner() {
  return (
    <Container>
      <UploadFile />
    </Container>
  );
}

export default UploadBanner;

