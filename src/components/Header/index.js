import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FormatBtn from "./FormatBtn";
import Popover from "../Popover";
import UploadIcon from "../../icons/upload.svg";
import LogoIcon from "../../icons/logo.svg";
import SearchIcon from "../../icons/search.svg";
import HeaderBtn from "./HeaderBtn";
import UploadBanner from "./UploadBanner";

const Nav = styled.nav`
  height: ${props => props.theme.layout.navHeight};
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

function Header({ editorConfig }) {
  return (
    <Nav>
      <LogoIcon css={`width: 18%;`} />
      <FormatBtn onClick={editorConfig.format} />
      <div css={`display: flex;`}>
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
            {(closeBanner) => <UploadBanner setValue={editorConfig.setValue} close={closeBanner} />}
          </Popover.DropBanner>
        </Popover>
      </div>
    </Nav>
  );
}

Header.propTypes = {
  editorConfig: PropTypes.shape({
    createEditor: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
    format: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    find: PropTypes.func.isRequired,
  }),
};

export default Header;
