import React from "react";
import styled from "styled-components";

import BannerContainer from "./BannerContainer";
import TwitterIcon from "../../icons/social/twitter.svg";
import TelegramIcon from "../../icons/social/telegram.svg";
import RedditIcon from "../../icons/social/reddit.svg";

const NakedButton = styled.button`
  background-color: transparent;
  box-shadow: none;
`;

function InfoBanner() {
  return (
    <BannerContainer>
      <p>
        <span>Code is Open Source on </span>
        <a href="https://github.com/BoyWithSilverWings/json-formatter">
          Github
        </a>
      </p>
      <p>
        <span>Made with </span>
        <span role="img" aria-label="Computer">
          💻
        </span>
        <span> by</span>
        <a href="https://agney.dev">Agney</a>
      </p>
      <p>
        <NakedButton>
          <TwitterIcon />
        </NakedButton>
        <NakedButton>
          <TelegramIcon />
        </NakedButton>
        <NakedButton>
          <RedditIcon />
        </NakedButton>
      </p>
    </BannerContainer>
  );
}

export default InfoBanner;
