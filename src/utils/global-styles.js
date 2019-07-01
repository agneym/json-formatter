import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
  }
`;

export default GlobalStyles;