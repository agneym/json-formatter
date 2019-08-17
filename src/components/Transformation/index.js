import React from "react";
import styled from "styled-components";
import Popover from "../Popover";

const Container = styled.aside`
  position: fixed;
  bottom: 0;
  height: 40%;
`;

function Transformation() {
  return (
    <Container>
      <Popover>
        <Popover.Trigger>
          <p>Transformations</p>
        </Popover.Trigger>
        <Popover.DropBanner>
          {() => <p>Lets put rest of the content</p>}
        </Popover.DropBanner>
      </Popover>
    </Container>
  );
}

export default Transformation;
