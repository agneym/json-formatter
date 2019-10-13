import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.li`
  padding: 1rem 2rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
`;

const Description = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
`;

function SingleItem({ name }) {
  return (
    <Container>
      <h3
        css={`
          margin: 0 0 0.3rem;
        `}
      >
        Plugin Name
      </h3>
      <Description>
        Description of the plugin, what it does and whatever. Some more text so
        we can see{" "}
      </Description>
    </Container>
  );
}

SingleItem.propTypes = {
  name: PropTypes.string,
};

export default SingleItem;
