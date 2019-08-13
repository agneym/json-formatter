import React from "react";
import PropTypes from "prop-types";

import Container from "../BannerContainer";
import Seperator from "../Seperator";
import ByLink from "./ByLink";

const ShareBanner = () => {
  return (
    <Container>
      <p>Download</p>
      <Seperator />
      <ByLink />
    </Container>
  );
}

ShareBanner.propTypes = {
  close: PropTypes.func.isRequired,
}

export default ShareBanner;