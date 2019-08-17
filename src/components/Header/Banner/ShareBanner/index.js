import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Container from "../BannerContainer";
import Seperator from "../Seperator";
import ByLink from "./ByLink";

const ShareBanner = ({ close, editorConfig }) => {
  const currentValue = editorConfig.getValue();
  
  const actionComplete = useCallback(() => {
    close();
  }, [close]);
  
  return (
    <Container>
      <p>Download</p>
      <Seperator />
      <ByLink value={currentValue} complete={actionComplete} />
    </Container>
  );
}

ShareBanner.propTypes = {
  close: PropTypes.func.isRequired,
  editorConfig: PropTypes.object.isRequired,
}

export default ShareBanner;