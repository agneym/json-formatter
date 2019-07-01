import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: ${props => props.theme.layout.navHeight};
  background-color: ${props => props.theme.colors.primary};
`;

function Header() {
  return (
    <Nav>
      
    </Nav>
  )
}

export default Header;