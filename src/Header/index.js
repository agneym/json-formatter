import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import FormatBtn from "./FormatBtn";

const Nav = styled.nav`
  height: ${props => props.theme.layout.navHeight};
	background-color: ${props => props.theme.colors.primary};
	position: relative;
`;

function Header({ editorConfig }) {
	const formatCode = () => {
		editorConfig.format();
	}
  return (
    <Nav>
      <FormatBtn onClick={formatCode}/>
    </Nav>
  )
}

Header.propTypes = {
  editorConfig: PropTypes.shape({
    createEditor: PropTypes.func.isRequired,
		destroy: PropTypes.func.isRequired,
		format: PropTypes.func.isRequired,
  }),
}

export default Header;