import React, { useState, Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Button } from "buffetjs";
import Peer from "peerjs";
import randomWords from "random-words";
import styled from "styled-components";
import ClipInput from "../../ClipInput";

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

  useEffect(() => {
    const id = randomWords({ exactly: 2, join: "-" });
    const peer = new Peer(id);
    peer.on("connection", (conn) => {
      conn.on("open", () => {
        conn.send(value);
      });
    });
    setLink(`${window.location.href}?q=${id}`);
    return () => {
      peer.disconnect();
    }
  }, [value]);
  return (
    <Container>
      { !!link && (
        <Fragment>
          <p>Share your link:</p>
          <ClipInput value={link} />
        </Fragment>
      )}
      <sub>We do not send your content to our servers. This also means that you need to stay online for sharing to work.</sub>
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