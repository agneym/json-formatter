import React, { useContext } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CloseIcon from "../../icons/close.svg";
import NakedButton from "../../utils/NakedButton";
import TabContext from "../CollapsibleTabs/TabContext";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem 0 2rem;
`;

const Heading = styled.h2`
  max-width: 80%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

function Header({ title, back }) {
  const { close } = useContext(TabContext);
  return (
    <Container>
      {back && <NakedButton onClick={back}>←</NakedButton>}
      <Heading>{title}</Heading>
      <NakedButton title="Close" onClick={close}>
        <CloseIcon
          css={`
            height: 2rem;
          `}
        />
      </NakedButton>
    </Container>
  );
}

Header.defaultProps = {
  title: "Plugin",
};

Header.propTypes = {
  title: PropTypes.string,
  back: PropTypes.func,
};

export default Header;
