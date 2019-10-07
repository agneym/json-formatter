import React, { useCallback, useContext } from "react";
import PropTypes from "prop-types";

import Container from "../BannerContainer";
import Seperator from "../Seperator";
import ByLink from "./ByLink";
import DownloadBtn from "./DownloadBtn";
import EditorContext from "../../../Editors/EditorContext";

const ShareBanner = ({ close }) => {
  const editorConfig = useContext(EditorContext);
  const currentValue = editorConfig.getValue();

  const actionComplete = useCallback(() => {
    close();
  }, [close]);

  return (
    <Container>
      <DownloadBtn value={currentValue} complete={actionComplete} />
      <Seperator />
      <ByLink value={currentValue} complete={actionComplete} />
    </Container>
  );
};

ShareBanner.propTypes = {
  close: PropTypes.func.isRequired,
};

export default ShareBanner;
