import React from "react";

const FootNote = () => {
  return (
    <p
      css={`
        text-align: center;
        margin-top: 4rem;
        color: rgba(0, 0, 0, 0.5);
      `}
    >
      <span>Can&apos;t find one to your liking? </span>
      <a
        href="https://dev.to/boywithsilverwings/creating-a-json-crew-plugin-2l55"
        css={`
          color: rgba(0, 0, 0, 1);
        `}
      >
        Create
      </a>
      <span> one</span>
    </p>
  );
};

export default FootNote;
