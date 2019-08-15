import React, { useCallback } from "react";
import { Button } from "buffetjs";
import Peer from "peerjs";
import shortid from "shortid";

const ByLink = () => {
  const shareLink = useCallback(() => {
    const id = shortid.generate();
    const peer = new Peer();
    const connection = peer.connect(id);
    connection.on("open", () => {
      connection.send("hello");
    });
    console.log(id);
  }, []);
  return (
    <Button color="primary" icon={false} label={"Share URL"} onClick={shareLink} />
  );
}

export default ByLink;