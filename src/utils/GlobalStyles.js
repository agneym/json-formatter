import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
  }
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    box-sizing: border-box;
    padding: 0;
  }

  ::-webkit-scrollbar-track {
	  border: 0.1rem solid black;
	  background-color: #F5F5F5;
  }

  ::-webkit-scrollbar {
	  width: 0.6rem;
	  background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb {
	  background-color: #555555;
  }
`;

export default GlobalStyles;
