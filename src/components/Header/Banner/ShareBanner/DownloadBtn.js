import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Button } from "buffetjs";
import FileSaver from "file-saver";

const DownloadBtn = ({ value, complete }) => {
  const downloadFile = useCallback(() => {
    const blob = new Blob([value], {type: "text/json;charset=utf-8"});
    FileSaver.saveAs(blob, "file.json");
    complete();
  }, [value, complete]);
  return (
    <Button label="Download" onClick={downloadFile} />
  );
}

DownloadBtn.propTypes = {
  value: PropTypes.string,
  complete: PropTypes.func.isRequired,
}

export default DownloadBtn;