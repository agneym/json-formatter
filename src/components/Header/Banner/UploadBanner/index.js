import React, { useState } from "react";
import { Button } from "buffetjs";
import PropTypes from "prop-types";

import UploadFile from "./UploadFile";
import Seperator from "../Seperator";
import JsonUrl from "./JsonUrl";
import Container from "../BannerContainer";

function UploadBanner({ setValue, close }) {
  const [jsonData, setJsonData] = useState(null);
  const setEditor = event => {
    event.preventDefault();
    if (jsonData) {
      setValue(jsonData);
      close();
    }
  };
  return (
    <Container onSubmit={setEditor} as="form">
      <UploadFile setData={setJsonData} />
      <Seperator />
      <JsonUrl setData={setJsonData} />
      <Button
        type="submit"
        css={`
          margin: 1rem auto;
          text-align: center;
          display: block;
        `}
      >
        Load
      </Button>
    </Container>
  );
}

UploadBanner.propTypes = {
  setValue: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default UploadBanner;
