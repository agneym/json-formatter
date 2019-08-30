import React, { useContext } from "react";
import styled from "styled-components";

import FormatBtn from "./FormatBtn";
import Popover from "../Popover";
import UploadIcon from "../../icons/upload.svg";
import LogoIcon from "../../icons/logo.svg";
import SearchIcon from "../../icons/search.svg";
import ShareIcon from "../../icons/share.svg";
import HeaderBtn from "./HeaderBtn";
import UploadBanner from "./Banner/UploadBanner";
import ShareBanner from "./Banner/ShareBanner";
import EditorContext from "../Editors/EditorContext";

const Nav = styled.nav`
  height: ${props => props.theme.layout.navHeight};
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

function Header() {
  const editorConfig = useContext(EditorContext);
  return (
    <Nav>
      <LogoIcon
        css={`
          width: 18%;
        `}
      />
      <FormatBtn onClick={editorConfig.format} />
      <div
        css={`
          display: flex;
        `}
      >
        <HeaderBtn title="Search" onClick={editorConfig.find}>
          <SearchIcon />
        </HeaderBtn>
        <Popover>
          <Popover.Trigger>
            <HeaderBtn title="Upload a File">
              <UploadIcon />
            </HeaderBtn>
          </Popover.Trigger>
          <Popover.DropBanner>
            {closeBanner => (
              <UploadBanner
                setValue={editorConfig.setValue}
                close={closeBanner}
              />
            )}
          </Popover.DropBanner>
        </Popover>
        <Popover>
          <Popover.Trigger>
            <HeaderBtn title="Share">
              <ShareIcon />
            </HeaderBtn>
          </Popover.Trigger>
          <Popover.DropBanner>
            {closeBanner => (
              <ShareBanner editorConfig={editorConfig} close={closeBanner} />
            )}
          </Popover.DropBanner>
        </Popover>
      </div>
    </Nav>
  );
}

export default Header;
