import React, { useCallback, useState, Fragment } from "react";
import PropTypes from "prop-types";
import { Button, InputText } from "buffetjs";
import Peer from "peerjs";
import randomWords from "random-words";
import styled from "styled-components";

const Container = styled.div`
  display: flex; 
  flex-direction: column; 
  margin: 0 2rem;

  > * {
    margin: 1rem 0;
  }
`

const ByLink = ({ value }) => {
  const [link, setLink] = useState("");

  const shareLink = useCallback(() => {
    const id = randomWords({ exactly: 2, join: "-" });
    const peer = new Peer(id);
    peer.on("connection", (conn) => {
      conn.on("open", () => {
        conn.send(value);
      });
    });
    setLink(`${window.location.href}?q=${id}`)
  }, [value]);
  return (
    <Container>
      <Button color="primary" icon={false} label={"Share URL"} onClick={shareLink} />
      { !!link && (
        <Fragment>
          <p>Share your link:</p>
          <InputText value={link} readonly />
        </Fragment>
      )}
      <sub>We do not send your content to our servers. But this also means that you need to stay online for the sharing to work.</sub>
    </Container>
  );
}

ByLink.defaultProps = {
  value: "",
}

ByLink.propTypes = {
  value: PropTypes.string,
  complete: PropTypes.func.isRequired,
}

export default ByLink;