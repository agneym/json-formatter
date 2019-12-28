import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NakedButton from "../../utils/NakedButton";
import UnpinIcon from "../../icons/unpin.svg";
import PinIcon from "../../icons/pin.svg";
import { pinActionTypes } from "../CollapsibleTabs/Tabs";
const Container = styled.li`
  padding: 1rem 2rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  }
`;

const ButtonWrapper = styled.div`
  display: none;
  ${Container}:hover & {
    display: block;
  }
`;

const Description = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
`;

function SingleItem({
  name,
  description,
  onClick,
  onPinClick,
  showPin,
  showUnpin,
}) {
  return (
    <Container>
      <NakedButton
        css={`
          width: 85%;
        `}
        onClick={onClick}
      >
        <h3
          css={`
            margin: 0 0 0.3rem;
          `}
        >
          {name}
        </h3>
        <Description>{description}</Description>
      </NakedButton>
      <ButtonWrapper>
        {(showPin || showUnpin) && (
          <NakedButton
            onClick={() =>
              onPinClick(
                (showPin && pinActionTypes.ADD) ||
                  (showUnpin && pinActionTypes.REMOVE)
              )
            }
          >
            {showUnpin && (
              <UnpinIcon
                css={`
                  height: 2rem;
                `}
              />
            )}
            {showPin && (
              <PinIcon
                css={`
                  height: 2rem;
                `}
              />
            )}
          </NakedButton>
        )}
      </ButtonWrapper>
    </Container>
  );
}

SingleItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onPinClick: PropTypes.func.isRequired,
  showPin: PropTypes.bool.isRequired,
  showUnpin: PropTypes.bool.isRequired,
};

export default SingleItem;
