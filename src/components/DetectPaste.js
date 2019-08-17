import React, { useState, useEffect } from "react";

import Message from "./Message";

const DetectPaste = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {

  }, []);
  return (
    <Message show={show}>
      <p>Detect paste</p>
    </Message>
  )
}

export default DetectPaste;