import React from "react";
import PropTypes from "prop-types";

import Container from "../BannerContainer";

const ShareBanner = () => {
  return (
    <Container>
      <p>Share Banner</p>
    </Container>
  );
}

ShareBanner.propTypes = {
  close: PropTypes.func.isRequired,
}

export default ShareBanner;