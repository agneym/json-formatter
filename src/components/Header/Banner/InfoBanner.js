import React from "react";
import styled from "styled-components";
import useWebShare from "react-use-web-share";

import BannerContainer from "./BannerContainer";
import TwitterIcon from "../../../icons/social/twitter.svg";
import TelegramIcon from "../../../icons/social/telegram.svg";
import RedditIcon from "../../../icons/social/reddit.svg";

const NakedButton = styled.a.attrs({
  target: "_blank",
  rel: "noopener noreferrer",
})`
  background-color: transparent;
  box-shadow: none;
  border: none;
  text-decoration: none;

  & > svg {
    height: 3rem;
    margin: 0 1rem;
  }
`;

const Section = styled.p`
  margin: 2rem 0;
`;

function InfoBanner() {
  const { isSupported, share } = useWebShare();
  return (
    <BannerContainer>
      <Section>
        <span>Code is Open Source on </span>
        <a
          href="https://github.com/BoyWithSilverWings/json-formatter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </Section>
      <Section as="div">
        <span>Share </span>
        <NakedButton href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fjsoncrew.netlify.com%2F&via=agneymenon&text=JSON%20Crew%20-%20Viewer%2C%20Editor%2C%20Formatter%2C%20Validator%20%26%20more.">
          <TwitterIcon />
        </NakedButton>
        <NakedButton href="https://telegram.me/share/url?url=https%3A%2F%2Fjsoncrew.netlify.com&text=JSON%20Crew%20-%20Viewer%2C%20Editor%2C%20Formatter%2C%20Validator%20%26%20more.">
          <TelegramIcon />
        </NakedButton>
        <NakedButton href="https://www.reddit.com/submit?url=https%3A%2F%2Fjsoncrew.netlify.com&title=JSON%20Crew%20-%20Viewer%2C%20Editor%2C%20Formatter%2C%20Validator%20%26%20more.">
          <RedditIcon />
        </NakedButton>
        {isSupported && <NakedButton onClick={share}>Share</NakedButton>}
      </Section>
      <Section>
        <span>Made with </span>
        <span role="img" aria-label="Computer">
          💻
        </span>
        <span> by</span>
        <a href="https://agney.dev" target="_blank" rel="noopener noreferrer">
          Agney
        </a>
      </Section>
    </BannerContainer>
  );
}

export default InfoBanner;
