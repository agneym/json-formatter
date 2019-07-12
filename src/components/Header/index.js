import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FormatBtn from "./FormatBtn";
import Popover from "../Popover";
import UploadIcon from "../../icons/upload.svg";
import HeaderBtn from "./HeaderBtn";
import UploadBanner from "./UploadBanner";

const Nav = styled.nav`
  height: ${props => props.theme.layout.navHeight};
  background-color: ${props => props.theme.colors.primary};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 2rem;
`;

function Header({ editorConfig }) {
  return (
    <Nav>
      <FormatBtn onClick={editorConfig.format} />
      <Popover>
        <Popover.Trigger>
          <HeaderBtn title="Upload a File">
            <UploadIcon />
          </HeaderBtn>
        </Popover.Trigger>
        <Popover.DropBanner>
          <UploadBanner setValue={editorConfig.setValue} />
        </Popover.DropBanner>
      </Popover>
    </Nav>
  );
}

Header.propTypes = {
  editorConfig: PropTypes.shape({
    createEditor: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
    format: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
  }),
};

export default Header;
