import React, { useCallback } from "react";
import { Button } from "buffetjs";
import Peer from "peerjs";
import shortid from "shortid";

const ByLink = () => {
  const shareLink = useCallback(() => {
    const id = shortid.generate();
    const peer = new Peer(id);
    peer.on("connection", (conn) => {
      conn.on("data", console.log);
    });
    console.log(id);
  }, []);
  return (
    <Button color="primary" icon={false} label={"Share URL"} onClick={shareLink} />
  );
}

export default ByLink;