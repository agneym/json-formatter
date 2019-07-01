import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;